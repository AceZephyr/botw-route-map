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
                                    step[a] = b;
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

            route[route.length] = step;
        }
        console.log(route);
    }
    reader.readAsText(file, "UTF-8");
}

function drawStep(index) {
    if (index < 0) {
        err("Tried to draw step at index " + index + ", which is an invalid index.");
    }
    if (index > route.length) {
        err("Tried to draw step at index" + index + ", which is larger than the route size of " + route.length);
    }
    var step = route[index];
    var lat, lng;
    if (typeof step.id !== "undefined" && !isNaN(step.id)) {
        var coordReference = getById(step.id);
        if (!Array.isArray(coordReference)) {
            coordReference = coordReference.locations;
        }
        lat = coordReference[0];
        lng = coordReference[1];
    } else if (typeof step.lat !== "undefined" && typeof step.lng !== "undefined") {
        lat = parseInt(step.lat);
        lng = parseInt(step.lng);
    } else return;
    var imgUrl = get(step.img, "icons/marker.png");
    var counterCmds = get(step.counter, []);
    var camLast = get(step.cam_last, false);
    var comment = get(step.comment, "");
    var drawPath = get(step.draw_path, false);
    var pathCoords = get(step.path_coords, []);


}
