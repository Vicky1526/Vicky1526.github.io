var timeout, counter = 0;

var updateCounter = function() {
    counter++;
    Array.prototype.forEach.call(document.getElementsByClassName('counter'), function(element) {
        element.innerHTML = counter;
    });
    timeout = setTimeout(updateCounter, 1000);
    console.log(counter)
}


var orientationQuery = window.matchMedia('(orientation: portrait)');

var orientationHandler = function(portraitOrientation) {
    if (portraitOrientation.matches) {
        document.body.className = 'portrait';
        clearTimeout(timeout);
    } else {
        document.body.className = 'landscape';
        updateCounter();
    }
};

// get notified when orientation changes
orientationQuery.addListener(orientationHandler);

// detect current orientation
orientationHandler(orientationQuery);