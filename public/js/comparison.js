// Transform the short [lat,lng] format in our
// data into the {x, y} expected by arc.js.
function obj(ll) { return { y: ll[0], x: ll[1] }; }

for (var i = 0; i < pairs.length; i++) {
    // Transform each pair of coordinates into a pretty
    // great circle using the Arc.js plugin, as included above.
    var generator = new arc.GreatCircle(
            obj(pairs[i][0]),
            obj(pairs[i][1]));
    var line = generator.Arc(100, { offset: 10 });
    // Leaflet expects [lat,lng] arrays, but a lot of
    // software does the opposite, including arc.js, so
    // we flip here.
    var newLine = L.polyline(line.geometries[0].coords.map(function(c) {
        return c.reverse();
    }), {
        color: '#fff',
        weight: 1,
        opacity: 0.5
    })
    .addTo(map);
    var totalLength = newLine._path.getTotalLength();
    newLine._path.classList.add('path-start');
    // This pair of CSS properties hides the line initially
    // See http://css-tricks.com/svg-line-animation-works/
    // for details on this trick.
    newLine._path.style.strokeDashoffset = totalLength;
    newLine._path.style.strokeDasharray = totalLength;
    // Offset the timeout here: setTimeout makes a function
    // run after a certain number of milliseconds - in this
    // case we want each flight path to be staggered a bit.
    setTimeout((function(path) {
        return function() {
            // setting the strokeDashoffset to 0 triggers
            // the animation.
            path.style.strokeDashoffset = 0;
        };
    })(newLine._path), i * 100);
}