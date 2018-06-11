var route = [];
var presets = null;

function err(message) {
    $("#botw-map-comments").append("<p>FATAL: " + message + "</p>");
    throw message;
}

function warn(message) {
    $("#botw-map-comments").append("<p>WARN: " + message + "</p>");
    throw message;
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

}
