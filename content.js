
// function randomReload() {
    // Generate random number.
    var randNum = Math.random();

    // The constant for which random numbers are multiplied by.
    var multiplier = 8;

    // Calculate time until next reload.
    var timeToReload = randNum * multiplier;

    // Wait for timeToReload seconds.
    setTimeout(timeToReload);

    // Reload the page.
    location.reload(false);
// }


var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}
