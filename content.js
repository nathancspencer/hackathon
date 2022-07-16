var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i+=2) {
  images[i].src = 'https://loremflickr.com/' + images[i].width + '/' + images[i].height + '/earth';
}
