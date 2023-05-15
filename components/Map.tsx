import React from "react";
import { MapContainer, Circle, TileLayer } from "react-leaflet";

interface MapProps {
  center: [number, number];
}

const Map: React.FC<MapProps> = ({ center }) => {
  const radius = 600000; // in meters

  return (
    <MapContainer center={center} zoom={8} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Circle center={center} radius={radius} />
    </MapContainer>
  );
};

export default Map;
