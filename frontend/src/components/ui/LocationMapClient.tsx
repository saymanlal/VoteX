// src/components/ui/LocationMapClient.tsx
"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), { ssr: false });

export default function LocationMapClient({ latitude, longitude }: { latitude: number; longitude: number }) {
  return <LocationMap latitude={latitude} longitude={longitude} />;
}
