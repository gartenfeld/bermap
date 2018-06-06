var MAP_ELEMENT_ID = 'map-view';
var MAP_INIT_VIEW = {
  attributionControl: false,
  center: [52.5200, 13.4050], // Berlin
  zoom: 13,
};

// var TILE_API_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// var TILE_API_URL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
// var TILE_API_URL = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
var TILE_API_URL = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

var TILE_LAYER_PARAMS = {
  maxZoom: 18,
  minZoom: 7,
};

var map = L.map(MAP_ELEMENT_ID, MAP_INIT_VIEW);
var openMapLayer = L.tileLayer(TILE_API_URL, TILE_LAYER_PARAMS);

openMapLayer.addTo(map);
