"use client";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map() {
  return (
    <MapContainer
      center={[40.74844, -74.00426]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.74844, -74.00426]}>
        <Popup>
          Welcome to our cozy cat-corner! Come visit us and bring tuna snacks!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
