var dataArr = {};
var layerArr = [];
$("#botw-map-search-box").on("input", showList);

function showList() {
    $("#botw-map-search-results").html("");
    var val = $("#botw-map-search-box").val().toLowerCase();
    var results = $("#botw-map-search-results");
    for ([name, obj] of Object.entries(dataArr)) {
        if (name.toLowerCase().includes(val)) {
            results.append(`<p onclick="togglePoints('%name%');">%name%</p>`.replace(/%name%/g, name));
        }
    }
}
$(window).resize(setMapSize);

function setMapSize() {
    $('#botw-map-container').css("height", (window.innerHeight) * (2 / 3));
}
setMapSize();

function get(object, defaultObject) {
    return typeof object !== "undefined" ? object : defaultObject;
}

function addMapPointsToData(obj) {
    console.log(obj);
    for ([key, val] of Object.entries(obj)) {
        dataArr[key] = val;
    }
}

function togglePoints(name) {
    var opt = dataArr[name];
    if (typeof layerArr[name] === "undefined") {
        //it's invisible. make it visible.
        var imgURL = get(opt.img, "icons/marker.png");
        var divClass = get(opt.divClass, "");
        var tooltipFunction = get(opt.tooltipFunction, null);
        var titleFunction = get(opt.titleFunction, null);
        var layerGroup = L.layerGroup();
        for (var i = 0; i < opt.locations.length + 0; i++) {
            var tooltip = get(opt.tooltip, "");
            var loc = opt.locations[i];
            if (tooltipFunction !== null) {
                tooltip = tooltipFunction(loc);
            }
            if (typeof tooltip === "string") {
                tooltip = [tooltip, {}]
            }
            if (typeof tooltip[1].direction === "undefined") {
                tooltip[1].direction = "top";
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
            if (tooltip !== null && Array.isArray(tooltip) && tooltip.length === 2) {
                marker.bindTooltip(tooltip[0], tooltip[1]);
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

locations.FldObj_FirstShrine_A_01.img = "icons/shrine-of-resurrection.png";
locations.FldObj_FirstShrine_A_01.tooltip = "Shrine of Resurrection";
locations.Item_CookSet.img = "icons/icon-pot.png";
locations.Item_CookSet.tooltip = "Cooking Pot";
locations.Item_CookSet_PanOnly.img = "icons/icon-pot.png";
locations.Item_CookSet_PanOnly.tooltip = "Cooking Pot (Pan Only)";
locations.TwnObj_AncientReactorFurnace_A_01.img = "icons/tech-lab.png";
locations.TwnObj_AncientReactorFurnace_A_01.tooltip = "Hateno Ancient Tech Lab";
locations.TwnObj_AncientReactorFurnace_B_01.img = "icons/tech-lab.png";
locations.TwnObj_AncientReactorFurnace_B_01.tooltip = "Akkala Ancient Tech Lab";
DATA['Cooking Pot'] = locations.Item_CookSet;
DATA['Cooking Pot'].tooltip = "Cooking Pot";
DATA['Cooking Pot (Pot Only)'] = locations.Item_CookSet_PanOnly;
DATA['Cooking Pot (Pot Only)'].tooltip = "Cooking Pot (Pot Only)";
locations.DgnObj_EntranceElevatorSP.titleFunction = function (shrine) {
    return shrine + "";
}
addMapPointsToData(Object.assign(DATA, locations));
showList();

var route = [];

function handleFile(file) {
    var reader = new FileReader();
    reader.onLoad = function (text) {
        var json;
        try {
            json = JSON.parse(text);
        } catch (error) {
            return;
        }
    }
    reader.readAsText(file, "UTF-8");
}
