var url = new URL(window.location.href);
var dataArr = {};
var layerArr = [];
$("#botw-map-search-box").on("input", showList);
$("#botw-map-search-top-text").on("click", clear);

function showList() {
	$("#botw-map-search-results").html("");
	var val = $("#botw-map-search-box").val().toLowerCase();
	var results = $("#botw-map-search-results");
	for ([name, obj] of Object.entries(dataArr)) {
		if ((get(obj["display_name"], "").toLowerCase() + name.toLowerCase()).includes(val)) {
			results.append(`<p onclick="togglePoints('%name%');">%text%</p>`.replace(/%text%/g, get(obj["display_name"], "") !== name ? "(" + get(obj["display_name"], "") + ") " + name : name).replace(/%name%/g, name));
		}
	}
}
$(window).resize(setMapSize);

function setMapSize() {
	$('#botw-map-container').css("height", (window.innerHeight));
}
setMapSize();

function addMapPointsToData(obj) {
	for ([key, val] of Object.entries(obj)) {
		dataArr[key] = val;
	}
}

function togglePoints(name) {
	var opt = dataArr[name];
	if (typeof opt === "undefined") {
		return;
	}
	if (typeof layerArr[name] === "undefined") {
		//it's invisible. make it visible.
		var imgURL = get(opt.img, "icons/marker.png");
		var divClass = get(opt.divClass, "");
		var popupFunction = get(opt.popupFunction, null);
		var titleFunction = get(opt.titleFunction, null);
		var layerGroup = L.layerGroup();
		var zeroes = "0".repeat(Math.ceil(Math.log10(opt.locations.length)));
		for (var i = 0; i < opt.locations.length; i++) {
			var iStr = i + "";
			var id = name + "@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr)
			var popup = get(opt.popup, id);
			var loc = opt.locations[i];
			if (popupFunction !== null) {
				popup = popupFunction(loc);
			}
			if (typeof popup === "string") {
				popup = ["<div class='popup' title='Click to copy ID'>" + popup + "</div><textarea class='popup-hidden-text' id='popup-text-" + id + "'>" + id + "</textarea>", {}]
			}
			if (typeof popup[1].direction === "undefined") {
				popup[1].direction = "top";
			}
			var title = "";
			if (titleFunction !== null) {
				title = "title='" + titleFunction(loc) + "'";
			}
			var coords;

			if (typeof loc.coords !== "undefined") {
				coords = loc.coords;

			} else if (Array.isArray(loc) && loc.length === 2) {
				coords = loc;
			}
			var marker = L.marker([-(coords[1]), coords[0]], {
				icon: L.divIcon({
					html: "<img " + title + " class='" + divClass + "' src='" + imgURL + "'>"
				})
			});
			if (popup !== null && Array.isArray(popup) && popup.length === 2) {
				marker.bindPopup(popup[0], popup[1]);
			};
			layerGroup.addLayer(marker);
		}
		layerGroup.addTo(map);
		layerArr[name] = layerGroup;
	} else {
		//it's visible. make it invisible.
		var layerGroup = layerArr[name];
		layerGroup.remove();
		delete layerArr[name];
	}
}

function clear() {
	for ([name, k] of Object.entries(layerArr)) {
		var layerGroup = layerArr[name];
		layerGroup.remove();
		delete layerArr[name];
	}
}

var map = L.map('botw-map', {
	preferCanvas: true,
	minZoom: -4,
	maxZoom: 4,
	center: [0, 0],
	zoom: -4,
	crs: L.CRS.Simple
});
var southWest = map.unproject([-6000, 5000], 0);
var northEast = map.unproject([6000, -5000], 0);
var bounds = new L.LatLngBounds(southWest, northEast);
L.imageOverlay('BotW-Map.png', bounds).addTo(map);
map.setMaxBounds(bounds);
map.setView(new L.LatLng(0, 0), -4);

locations.FldObj_FirstShrine_A_01.img = "icons/shrine-of-resurrection.png";
locations.FldObj_FirstShrine_A_01.popup = "Shrine of Resurrection";
locations.Item_CookSet.img = "icons/icon-pot.png";
locations.Item_CookSet.popup = "Cooking Pot";
locations.Item_CookSet_PanOnly.img = "icons/icon-pot.png";
locations.Item_CookSet_PanOnly.popup = "Cooking Pot (Pan Only)";
locations.TwnObj_AncientReactorFurnace_A_01.img = "icons/tech-lab.png";
locations.TwnObj_AncientReactorFurnace_A_01.popup = "Hateno Ancient Tech Lab";
locations.TwnObj_AncientReactorFurnace_B_01.img = "icons/tech-lab.png";
locations.TwnObj_AncientReactorFurnace_B_01.popup = "Akkala Ancient Tech Lab";
DATA['Cooking Pot'] = locations.Item_CookSet;
DATA['Cooking Pot'].popup = "Cooking Pot";
DATA['Cooking Pot (Pot Only)'] = locations.Item_CookSet_PanOnly;
DATA['Cooking Pot (Pot Only)'].popup = "Cooking Pot (Pot Only)";

addMapPointsToData(Object.assign(DATA, locations));
showList();
document.onclick = function (event) {
	if (event.target.nodeName === "DIV" && event.target.classList.contains("popup")) {
		var textElem = event.target.parentElement.lastElementChild;
		textElem.select();
		document.execCommand("copy");
	}
}

var displayThese = get(url.searchParams.get("d"), "");
displayThese = displayThese !== null ? displayThese.split(",") : [];
for (var i = 0; i < displayThese.length; i++) {
	togglePoints(displayThese[i]);
}
