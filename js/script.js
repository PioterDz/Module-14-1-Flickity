for(var i = 0; i < properties.length; i++){
  console.log(properties);
  listItems += Mustache.render(templateItem, properties[i]);
}

var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var returnButton = document.getElementById('button');

var flkty = new Flickity( elem, {
  // options
  hash: true,
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

flkty.on('scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

returnButton.addEventListener('click', function(event) {
  var index = 0;
  flkty.select(index, true, true);
});



