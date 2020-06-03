/*for (var x = 0; x < 1000; x += 100) {
    for (var y = 0; y < 1000; y += 100) {
        new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
    }
};*/

var circles = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint
        console.log(maxPoint)
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color
        keyData[event.key].sound.play()
        circles.push(newCircle)
    }
};

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9)
        if (circles[i].area < 1) {
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
        }
    }
};