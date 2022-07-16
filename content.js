



var time = 8;

// Calculates corruptedness to display.
function corruptedness(time) {
    return time * 1;
}

// Calculates time to randomly reload the page.
function calcTimeToReload(time) {
    return time * 1;
}

// Reload the page.
function randomReload(time) {
    location.reload(false);
}

// Replace all images with...
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

// Image replacement.
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i+=2) {
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

// Randomly reload.
window.setInterval('randomReload()', timeToReload)
randomReload(time);
