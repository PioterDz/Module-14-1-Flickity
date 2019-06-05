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

var infos = document.getElementById('infos');

window.initMap = function() {

  var position = [
    {lat: 41.009900, lng: 28.979228},
    {lat: 32.423594, lng: 8.204294},
    {lat: 14.600314, lng: 120.982307},
    {lat: 10.822057, lng: 106.630707},
    {lat: 41.730634, lng: 44.831105},
    {lat: 37.803386, lng: 20.904719},
  ]
  var name = ['Stambuł', 'Sahara', 'Filipiny', 'Wietnam', 'Gruzja', 'Zakynthos'];


  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 3, center: position[0]});

  for (let i=0 ; i<position.length ; i++) {
    var marker = new google.maps.Marker({
      position: position[i],
      map: map
    });
    marker.addListener('click', function() {
      infos.innerHTML = name[i];
      console.log(i, name, name[i], 'name');
    });
  }
}





