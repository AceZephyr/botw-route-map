var counterFunctions = new Map(
	[['+', function (a, b, f) {
		return f ? a + b : a - b;
	}], ['-', function (a, b, f) {
		return f ? a - b : a + b;
	}], ['*', function (a, b, f) {
		return f ? a * b : a / b;
	}], ['/', function (a, b, f) {
		return f ? a / b : a * b;
	}], ['=', function (a, b, f) {
		return b;
	}]]);
var currIndex = 0;
var counterVars = new Map();
var route = [];
var presets = null;
var layerArr = [];

var map = L.map('botw-map', {
	preferCanvas: true,
	minZoom: -4,
	maxZoom: 4,
	center: [0, 0],
	zoom: -4,
	crs: L.CRS.Simple
});

function setMapSize() {
	$('#botw-map-container').css("height", (window.innerHeight) * (2 / 3));
}
$(window).resize(setMapSize);

setMapSize();

var southWest = map.unproject([-6000, 5000], 0);
var northEast = map.unproject([6000, -5000], 0);
var bounds = new L.LatLngBounds(southWest, northEast);
L.imageOverlay('BotW-Map.png', bounds).addTo(map);
map.setMaxBounds(bounds);
map.setView(new L.LatLng(0, 0), -4);

function err(message) {
	$("#botw-map-comments").append("<p>FATAL: " + message + "</p>");
	throw message;
}

function warn(message) {
	$("#botw-map-comments").append("<p>WARN: " + message + "</p>");
	throw message;
}

function getById(id) {
	if (id.startsWith("-")) {
		id = getIdBySpecialId(id);
	}
	if (id.indexOf("@") !== -1) {
		id = id.split("@");
		var type = id[0];
		var num = parseInt(id[1]);
		var loc = DATA[type].locations[num];
		return typeof loc !== "undefined" ? loc : {};
	}
	return {};
}

function getIdBySpecialId(id) {
	if (id.startsWith("-")) {
		id = id.substr(1).trim();
		if (id.length === 3 && id.search(/[a-zA-Z][0-9][0-9]/) !== -1) {
			var koroksArr = DATA["Korok Seeds"].locations;
			for (var i = 0; i < koroksArr.length; i++) {
				if (koroksArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(koroksArr.length)));
					return "Korok Seeds@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
		} else if (id.endsWith(" Shrine")) {
			var shrinesArr = DATA.Shrines.locations;
			for (var i = 0; i < shrinesArr.length; i++) {
				if (shrinesArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(shrinesArr.length)));
					return "Shrines@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
			var dlcShrinesArr = DATA["Champion`s Ballad Shrines"].locations;
			for (var i = 0; i < dlcShrinesArr.length; i++) {
				if (dlcShrinesArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(dlcShrinesArr.length)));
					return "Champion`s Ballad Shrines@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
		} else if (id.endsWith(" Tower")) {
			var towersArr = DATA.Towers.locations;
			for (var i = 0; i < towersArr.length; i++) {
				if (towersArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(towersArr.length)));
					return "Towers@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
		}
	}
	return id;
}

function handleFile(file) {
	var reader = new FileReader();
	reader.onload = function (e) {
		var json;
		try {
			json = JSON.parse(e.target.result);
		} catch (error) {
			err("Could not parse JSON. JSON parser returned: " + error.message);
			return;
		}
		presets = get(json['presets'], {});
		var jsonRoute = get(json['route'], []);
		for (var i = 0; i < jsonRoute.length; i++) {
			var step = jsonRoute[i];
			//set all preset values
			//loop through presets
			if (typeof step.presets === "undefined") {
				step.presets = [];
			}
			for (var j = -1; j < step.presets.length; j++) {
				//get preset, start with default preset.
				var preset = j === -1 ? 'default' : step.presets[j];
				//loop through all defined presets to find the right one
				for ([name, k] of Object.entries(presets)) {
					//is this that preset?
					if (preset === name) {
						//put each preset's property in the object
						for ([a, b] of Object.entries(k)) {
							if (a !== "presets") {
								if (typeof step[a] === "undefined") {
									if (Array.isArray(step[a]) && step["concat_merged_arrays"].includes(a)) {
										step[a] = step[a].concat(b);
									} else {
										step[a] = b;
									}
								}
							} else {
								warn("`presets` property found in preset `" + name + "`, which will be ignored. Presets should not have a `presets` property.");
							}
						}
						break;
					}
				}
			}
			delete step.presets;

			if (typeof step.id !== "undefined" && step.id.startsWith("-")) {
				step.id = getIdBySpecialId(step.id);
			}

			if (typeof step.counter !== "undefined" && Array.isArray(step.counter)) {
				var newCounter = [];
				for (var i = 0; i < step.counter.length; i++) {
					var cmdStr = step.counter[i];
					if (typeof cmdStr === "string") {
						counterFunctions.forEach(function (func, key, map) {
							if (cmdStr.indexOf(key) !== -1) {
								var counter = cmdStr.split(key);
								if (!isNaN(counter[1])) {
									var value = parseInt(counter[1]);
									counter = counter[0];
									newCounter[i] = {
										counter: counter,
										func: func,
										value: value
									}
									return;
								}
							}
						});
					}
				}
				step.counter = newCounter;
			}
			route[route.length] = step;
		}
		drawStep(true);
	}
	reader.readAsText(file, "UTF-8");
}

function executeCommand(command, forwards) {
	if (!counterVars.has(command.counter)) {
		counterVars.set(command.counter, 0);
		$("#botw-counters").append("<p class='botw-counter' id='botw-counter-" + command.counter + "'></p>");
	}
	var val = command.funct.apply(this, [
        counterVars.get(command.counter),
        command.value,
        forwards
    ]);
	counterVars.set(name, val);
	$("#botw-counters #botw-counter-" + command.counter).html(command.counter + ": " + val + "");
}

function drawOnMap(lat, lng, imgUrl, path = []) {
	console.log("drawing ", lat, lng, imgUrl, path);
	var layerGroup = L.layerGroup();
	var marker = L.marker([-(lng), lat], {
		icon: L.divIcon({
			html: "<img src='" + imgUrl + "'>"
		})
	});
	layerGroup.addLayer(marker);
	layerGroup.addTo(map);
}

function drawStep(forwards) {
	if (!forwards) currIndex--;
	if (currIndex < 0) {
		err("Tried to draw step at index " + currIndex + ", which is an invalid index.");
	}
	if (currIndex > route.length) {
		err("Tried to draw step at index" + currIndex + ", which is larger than the route size of " + route.length);
	}
	var step = route[currIndex];
	var lat, lng;
	if (typeof step.id !== "undefined") {
		var coordReference = getById(step.id);
		if (!Array.isArray(coordReference)) {
			coordReference = coordReference.coords;
		}
		lat = coordReference[0];
		lng = coordReference[1];
	} else if (typeof step.lat !== "undefined" && typeof step.lng !== "undefined") {
		lat = parseInt(step.lat);
		lng = parseInt(step.lng);
	} else {
		return;
	}
	var imgUrl = get(step.img, "icons/marker.png");
	var counterCmds = get(step.counter, []);
	var camLast = get(step.cam_last, false);
	var comment = get(step.comment, "");
	var drawPath = get(step.draw_path, false);
	var pathCoords = get(step.path_coords, []);
	for (var i = 0; i < counterCmds.length; i++) {
		executeCommand(counterCmds[i], forwards);
	}
	if (drawPath) {
		drawOnMap(lat, lng, imgUrl, pathCoords);
	} else {
		drawOnMap(lat, lng, imgUrl);
	}
	if (forwards) currIndex++;
}
