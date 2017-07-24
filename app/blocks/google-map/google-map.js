window.initMap = function initMap() {
  var uluru = {lat: 52.1318917, lng: -106.6537744};
  var map = new google.maps.Map(document.querySelector('.google-map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    zoom: 6,
    center: uluru,
    position: uluru,
    map: map
  });
}