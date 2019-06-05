var templateItem = document.getElementById('template-slide').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < properties.length; i++) {
  console.log(properties);
  listItems += Mustache.render(templateItem, properties[i]);
  console.log(listItems);
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

window.initMap = function() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}





