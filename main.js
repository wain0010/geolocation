
// JavaScript Document 

document.addEventListener("DOMContentLoaded", function(){
    if( navigator.geolocation ){
//code goes here to find position
      var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
//enableHighAccuracy means try to use GPS and drain the battery
//for improved accuracy within a few meters.
//maximum age is how long to cache the location info
//timeout is how long to wait for the network to respond after the user says ok
      navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params );
//to continually check the position (in case it changes) use
// navigator.geolocation.watchPosition( reportPosition, gpsError, params)
      }else{
//browser does not support geolocation api
      alert("Sorry, but your browser does not support location based awesomeness.")
      }
  });

function reportPosition( position ){

  var output = document.body;
  output.innerHTML += "<strong>Latitude:</strong> " + position.coords.latitude + "&deg;<br/>"
    + "<strong>Longitude:</strong> " + position.coords.longitude + "&deg;<br/>"
    + "<strong>Accuracy:</strong> " + position.coords.accuracy + "m<br/>"
    + "<strong>Altitude:</strong> " + position.coords.altitude + " m<br/>"
    + "<strong>Heading:</strong> " + position.coords.heading + " &deg;<br/>"
    + "<strong>Speed:</strong> " + position.coords.speed + " m/s<br/>"
    + "<strong>Timestamp:</strong> " + position.timestamp + "<br>";

// Canvas Code

var canvas1 = document.createElement("canvas");
document.body.appendChild(canvas1);
  canvas1.id='myCanvas';
  var canvas = document.querySelector('#myCanvas');
  var context = canvas.getContext('2d');
  var img = document.createElement("img");

  canvas.width = 400;
  canvas.height = 400;
  img.onload = function() {
  context.drawImage(img, 0, 0);
};
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=14&size=400x400&maptype=roadmap&markers=color:red|label:A|" + position.coords.latitude + ',' + position.coords.longitude ;
}
function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',  
    3: 'Request timeout'
};
    alert("Error: " + errors[error.code]);
  }
  