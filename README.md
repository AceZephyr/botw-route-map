# botw-route-map

this is a route map for breath of the wild, you can upload a json file into it and it will display it. you can then press forwards and backwards to jump to the next or previous step, or you can jump an arbitrary number of steps with the Jump feature.

## the JSON format

You should be comfortable with JSON to use this. I personally am not, but that hasn't stopped me from making it.
Make an object with two fields: 'presets' and 'route'.

### Route

'route' is an array of the steps in order. Each step can have the following fields:

* 'id': the id of the object the step will happen at, which you can get from the object map. An ID can also  be a dash '-' followed by a korok's SSN, or a shrine name ending with 'Shrine', or a tower name ending with 'Tower'.
* 'coords': the coordinates on a map to use as the location.
* 'comment': a comment that will be placed below the route. You can put HTML here too. You can even put JS. There's no sanitization or anything. I'm assuming that people won't seriously try to use this as an attack vector or anything.
* 'counter': An array of strings that describe numbers that persist between steps. This is useful to track the number of korok seeds or shrines you've done or whatever you want, really. You just write the name of the variable, an operation (+, -, *, /, or =), and the number to apply to it. 
 * Example: 'k+1' adds 1 to the variable 'k'. 's=3' sets variable 's' to be equal to 3. I think you get the idea now.
 * Counters should properly work going both forwards and backwards, assuming you don't make the numbers *too* big.
* 'draw_path': says whether to draw a path between this element and the last one or not.
* 'path': an object with fields that describe the path.
 * 'points': an array of strings, each string is an ID of an object which is a point on the path between the start and end. can be an array of arrays instead.
  * 'id': the id of the object at the point
  * 'coords': the coordinates to put the point
  * 'img': the URL pointing to an image to use for the point
 * 'color': the color of the path. either a color name or a hex code.
* 'img': the URL pointing to an image to use for the location.
* 'merge': defines which array fields should merge with presets instead of overwriting them.
* 'presets': defines which presets this step should use.

### Presets

A preset is a set of fields to apply to many steps. Note that a preset cannot have a presets field, to avoid infinite recursion. Other than that, a preset can have anything. 'presets' is an object with a field for each preset, and each field is named what the preset is named.

The preset called 'default' is automatically applied to every step, so if you want every step to have some field, put it in there. Fields in a step or in a later preset in the presets array will override fields earlier. 

If you want to merge fields in an array instead of overriding them, put them in a preset's or object's 'merge' field. The merge field will always merge instead of override, and this cannot be changed. THis is useful if you want to add a counter in a step but also want a preset's counter to persist.

## Jumping

Jump to another step by typing a number in the Jump box and pressing Jump. Type the step number in the box, or use + or - and then the step number to go forwards or backwards that number of steps.