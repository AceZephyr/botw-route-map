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
var layerGroup = L.layerGroup();
var index = -1;
var counterVars = new Map();
var route = [];
var presets = null;
var layerArr = [];
var map = L.map('botw-map', {
    preferCanvas: true
    , minZoom: -4
    , maxZoom: 4
    , center: [0, 0]
    , zoom: -4
    , crs: L.CRS.Simple
});

function setMapSize() {
    $('#botw-map-container').css("height", (window.innerHeight) * (2 / 3));
}
$(window).resize(setMapSize);
$("#botw-map-jump-input").keydown(function(e) {
    if(e.keyCode === 13) {
        jump();
    }
});
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
        id = id.substr(1).trim();
        if (id.length === 3 && id.search(/[a-zA-Z][0-9][0-9]/) !== -1) {
            var koroksArr = DATA["Korok Seeds"].locations;
            for (var i = 0; i < koroksArr.length; i++) {
                if (koroksArr[i].id === id) {
                    return koroksArr[i].coords;
                }
            }
        }
    }
    else if (id.endsWith(" Shrine")) {
        var shrinesArr = DATA.Shrines.locations;
        for (var i = 0; i < shrinesArr.length; i++) {
            if (shrinesArr[i].id === id) {
                return shrinesArr[i].coords;
            }
        }
        var dlcShrinesArr = DATA["Champion`s Ballad Shrines"].locations;
        for (var i = 0; i < dlcShrinesArr.length; i++) {
            if (dlcShrinesArr[i].id === id) {
                return dlcShrinesArr[i].coords;
            }
        }
    }
    else if (id.endsWith(" Tower")) {
        var towersArr = DATA.Towers.locations;
        for (var i = 0; i < towersArr.length; i++) {
            if (towersArr[i].id === id) {
                return towersArr[i].coords;
            }
        }
    }
    if (id.indexOf("@") !== -1) {
        id = id.split("@");
        var type = id[0];
        var num = parseInt(id[1]);
        var loc = DATA[type].locations[num];
        if (!Array.isArray(loc)) {
            loc = loc.coords;
        }
        return typeof loc !== "undefined" ? loc : [];
    }
    return [];
}

function handleFile(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var json;
        try {
            json = JSON.parse(e.target.result);
        }
        catch (error) {
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
            for (var j = step.presets.length - 1; j >= -1; j--) {
                //get preset, start with default preset.
                var preset = j === -1 ? 'default' : step.presets[j];
                //loop through all defined presets to find the right one
                for ([name, k] of Object.entries(presets)) {
                    //is this that preset?
                    if (preset === name) {
                        //merge the 'merge' properties first
                        step['merge'] = get(step['merge'], []).concat(get(k['merge'], []));
                        //put each preset's property in the object
                        for ([a, b] of Object.entries(k)) {
                            if (a !== "presets") {
                                if (a !== "merge") {
                                    if (Array.isArray(b) && step['merge'].includes(a)) {
                                        step[a] = typeof step[a] === "undefined" ? b : step[a].concat(b);
                                    }
                                    else if (typeof step[a] === "undefined") {
                                        step[a] = b;
                                    }
                                }
                            }
                            else {
                                warn("`presets` property found in preset `" + name + "`, which will be ignored. Presets should not have a `presets` property.");
                            }
                        }
                        break;
                    }
                }
            }
            delete step.presets;
            if (typeof step.id === "string") {
                step.coords = getById(step.id);
                delete step.id;
            }
            if (typeof step.counter !== "undefined" && Array.isArray(step.counter)) {
                var newCounter = [];
                for (var j = 0; j < step.counter.length; j++) {
                    var cmdStr = step.counter[j];
                    if (typeof cmdStr === "string") {
                        counterFunctions.forEach(function (func, key, map) {
                            if (cmdStr.indexOf(key) !== -1) {
                                var expression = cmdStr.split(key);
                                if (!isNaN(expression[1])) {
                                    var value = parseInt(expression[1]);
                                    var counter = expression[0];
                                    newCounter[j] = {
                                        counter: counter
                                        , func: func
                                        , value: value
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
        drawStep(true, true);
    }
    reader.readAsText(file, "UTF-8");
}

function executeCommand(command, forwards) {
    if (!counterVars.has(command.counter)) {
        counterVars.set(command.counter, 0);
        $("#botw-counters").append("<p class='botw-counter' id='botw-counter-" + command.counter + "'></p>");
    }
    var val = command.func.apply(this, [
        counterVars.get(command.counter)
        , command.value
        , forwards
    ]);
    counterVars.set(name, val);
    $("#botw-counters #botw-counter-" + command.counter).html(command.counter + ": " + val + "");
}

function flip(coords) {
    return [-(coords[1]), coords[0]];
}

function draw(coords, img, drawPath = false, path = {}, pathFrom = {}) {
    var marker = L.marker(flip(coords), {
        icon: L.divIcon({
            html: "<img src='" + img + "'>"
        })
    });
    layerGroup.addLayer(marker);
    if (drawPath) {
        draw(route[index - 1].coords, get(route[index - 1].img, "icons/marker.png"));
        var defaultImg = get(path.default_img, "icons/marker.png");
        var len = Array.isArray(path.points) ? path.points.length : 0
        for (var i = 0; i < len; i++) {
            if (Array.isArray(path.points[i])) path.points[i] = {
                coords: path.points[i]
            };
            if (typeof path.points[i] === "string") {
                path.points[i] = {
                    coords: getById(path.points[i])
                };
            }
            if (typeof path.points[i].coords === "undefined") {
                err("Path is missing coords");
            }
            path.points[i].img = get(path.points[i].img, "icons/marker.png");
            draw(path.points[i].coords, path.points[i].img);
        }
        var pointsObjs = [route[index - 1]].concat(path.points).concat([route[index]]);
        var pointsArr = [];
        for (var i = 0; i < pointsObjs.length; i++) {
            if (typeof pointsObjs[i] === "object") pointsArr[pointsArr.length] = flip(pointsObjs[i].coords);
        }
        var color = get(path.color, "red");
        var line = L.polyline(pointsArr, {
            color: color
        });
        layerGroup.addLayer(line);
    }
}

function jump() {
    var str = $("#botw-map-jump-input").val();
    var jumps;
    var forwards;
    if (str.startsWith('+')) {
        jumps = parseInt(str.substr(1), 10)
        forwards = true;
    }
    else if (str.startsWith('-')) {
        jumps = parseInt(str.substr(1), 10)
        forwards = false;
    }
    else {
        jumps = parseInt(str, 10) - index
        forwards = jumps > 0;
        jumps = Math.abs(jumps);
    }
    for (var i = 0; i < jumps;) {
        if (drawStep(forwards, false, ++i == jumps || (index === forwards ? route.length - 1 : 1)) === -1) {
            return;
        }
    }
}

function drawStep(forwards, force = false, willDraw = true) {
    if (!force && ((!forwards && (index <= 0 || index > route.length)) || (forwards && (index < 0 || index >= route.length - 1)))) {
        return -1;
    }
    if (forwards) index++;
    if (!forwards) index--;
    var step = route[index];
    if (typeof step.coords === "undefined") {
        return;
    }
    var counterCmds = get(forwards ? step.counter : route[index + 1].counter, []);
    for (var i = 0; i < counterCmds.length; i++) {
        var command = counterCmds[i];
        if (!counterVars.has(command.counter)) {
            counterVars.set(command.counter, 0);
            $("#botw-counters").append("<p class='botw-counter' id='botw-counter-" + command.counter + "'></p>");
        }
        var val = command.func.apply(this, [
            counterVars.get(command.counter)
            , command.value
            , forwards]);
        counterVars.set(command.counter, val);
        if (draw) $("#botw-counters #botw-counter-" + command.counter).html(command.counter + ": " + val + "");
    }
    if (willDraw) {
        var lat, lng;
        var imgUrl = get(step.img, "icons/marker.png");
        var camLast = get(step.cam_last, false);
        var comment = get(step.comment, "");
        var drawPath = get(index === 0 ? false : step.draw_path, false);
        var path = get(step.path, {});
        layerGroup.removeFrom(map);
        layerGroup.clearLayers();
        draw(step.coords, imgUrl, drawPath, path);
        layerGroup.addTo(map);
        map.setView(flip(step.coords), force && forwards && index === 0 ? 0 : map.getZoom(), {
            animate: true
        });
        $("#botw-map-comments").html("<p>" + comment + "</p>");
    }
    return 0;
}