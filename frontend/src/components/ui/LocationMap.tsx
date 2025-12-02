"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Custom large icon
const customIcon = new L.Icon({
  iconUrl: "/leaflet/images/MapPointer.png",
  iconRetinaUrl: "/leaflet/images/MapPointer.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
  shadowUrl: undefined,
});


interface LocationMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

// Animate zoom and pan when loaded
function RecenterAndZoom({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 4); // start zoomed out
    const timeout = setTimeout(() => {
      map.flyTo([lat, lng], zoom, {
        duration: 2, // seconds
      });
    }, 300); // delay for smoother animation
    return () => clearTimeout(timeout);
  }, [lat, lng, zoom, map]);

  return null;
}

export default function LocationMap({ latitude, longitude, zoom = 12 }: LocationMapProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={4} // initial zoom out
      style={{ height: "650px", width: "850px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon} />
      <RecenterAndZoom lat={latitude} lng={longitude} zoom={zoom} />
    </MapContainer>
  );
}
