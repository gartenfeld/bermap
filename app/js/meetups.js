var MARKER_STYLES = {
  color: '#ccc',
  weight: 0.5,
  fillOpacity: 0.6,
  fillColor: 'orange',
};

MEETUPS.forEach(event => {
  var venue = event.venue || {
    lat: event.group.group_lat,
    lon: event.group.group_lon
  };
  var styles = Object.assign({}, MARKER_STYLES);
  var capacity = event['rsvp_limit'] || 10;
  styles.radius = Math.round(Math.log(capacity) / Math.log(2)) + 3;
  var circle = L.circleMarker([venue.lat, venue.lon], styles);
  circle.bindTooltip(event.name, {});
  circle.addTo(map);
});