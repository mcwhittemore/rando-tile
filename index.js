var tilebelt = require('@mapbox/tilebelt');

module.exports = function() {
  var lng = 180-(Math.random()*360);
  var lat = 90-(Math.random()*180);
  var zoom = Math.floor(Math.random()*20);
  return tilebelt.pointToTile(lng, lat, zoom);
}
