for(var i = 0; i < properties.length; i++){
  console.log(properties);
  listItems += Mustache.render(templateItem, properties[i]);
}


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {

});

var flkty = new Flickity( '.carousel', {
  hash: true,
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});





