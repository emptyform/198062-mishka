//-------------popup show
(function () {
  var link = document.querySelector(".popup-button");
  var popup = document.querySelector(".modal-window");
  var form = popup.querySelector("form");
  var body = document.querySelector("body");
  var send = document.querySelector("size-form__send");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-window--show");
    body.classList.add("overlay");
  });

  form.addEventListener("submit", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window--show");
  body.classList.remove("overlay");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-window--show")) {
        popup.classList.remove("modal-window--show");
        popup.classList.remove("modal-window--show");
        body.classList.remove("overlay");
      }
    }
  })
})();

//--------interactive map
var map;
var mapCenter = {lat: 59.936789, lng: 30.321513};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 16
  });

var image = {
  url: 'img/icon-map-pin.svg',
  scaledSize: new google.maps.Size(100, 100),
}
var position = {lat: 59.936369, lng: 30.321613};
var beachMarker = new google.maps.Marker({
    position: position,
    map: map,
    optimized: false,
    icon: image
  });
}
