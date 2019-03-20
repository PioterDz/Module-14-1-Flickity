var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var returnButton = document.getElementById('button-return');

var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true

});

returnButton.addEventListener('click', flkty.select( 0, false, false ));

function scroll(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
  console.log( 'Flickity scrolled ' + progress * 100 + '%' );
}

flkty.on( 'scroll', scroll(0.16));



var flkty = new Flickity( '.view-cells', {
  hash: true,
});




