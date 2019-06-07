var templateItem = document.getElementById('template-slide').innerHTML;
var templateViewCells = document.getElementById('template-view-cells').innerHTML;
var elem = document.querySelector('.main-carousel');
var viewCells = document.querySelector('.view-cells');
var progressBar = document.querySelector('.progress-bar');
var returnButton = document.getElementById('button');

// Mustache

Mustache.parse(templateItem);
Mustache.parse(templateViewCells);

function createTemplate(template, container, i) {
  var div = document.createElement('div');
  div = Mustache.render(template, properties[i]);
  container.insertAdjacentHTML('beforeend', div);
}

for(let i = 0; i <properties.length; i++) {
  createTemplate(templateItem, elem, i);
  createTemplate(templateViewCells, viewCells, i);
}
// Flickty

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

// GoogleMap

var infos = document.getElementById('infos');


window.initMap = function() {
  
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 3, center: properties[0].position});

    for (let i=0 ; i<properties.length ; i++) {
      var marker = new google.maps.Marker({
        position: properties[i].position,
        map: map
      });
      marker.addListener('click', function() {
        infos.innerHTML = properties[i].title;
      });
    }
}



