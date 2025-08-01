"use client";
import dynamic from "next/dynamic";

// Dynamically import the Map component and disable SSR
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function ClientOnlyMap() {
  return <Map />;
}
