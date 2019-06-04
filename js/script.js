var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var returnButton = document.getElementById('button-return');

var flkty = new Flickity( elem, {
  // options
  hash: true,
  cellAlign: 'left',
  contain: true
});

var flkty = new Flickity('.carousel');

returnButton.addEventListener('click', flkty.select( 0, true, true ));

flkty.on( 'scroll', scroll(1));






