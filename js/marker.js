function initialize() {
  var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(32.699026, -117.205119)
  }
  var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);

  var image = "img/marker.png";

  var myLatlng = new google.maps.LatLng(32.699026, -117.205119);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, "load", initialize);
