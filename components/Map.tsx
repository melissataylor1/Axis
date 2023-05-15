import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import the Leaflet CSS styles
import 'leaflet/dist/leaflet.css';

const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
`;

// Define the icon as an L.Icon object
const icon = new L.Icon({
  iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgIcon),
  iconRetinaUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgIcon),
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

function createCircle(center: L.LatLngExpression) {
  const radiusInKm = 600;
  const radiusInMeters = radiusInKm * 1000;
  return <Circle center={center} radius={radiusInMeters} />;
}

const GUELPH_COORDINATES: L.LatLngExpression = [43.5448, -80.2482];
const circle = createCircle(GUELPH_COORDINATES);

function MapComponent() {
  return (
    <MapContainer center={GUELPH_COORDINATES} zoom={5} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {circle}
      <Marker position={GUELPH_COORDINATES} icon={icon}>
        <Popup>Guelph, ON</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
