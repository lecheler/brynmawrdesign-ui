import React, { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

import "./Map.css";

export interface MapMarkerData {
  id: number | string;
  lat: number;
  lng: number;
  title: string;
  subtitle?: string;
}

interface MapProps {
  markers?: MapMarkerData[];
  center?: { lat: number; lng: number };
  zoom?: number;
  apiKey?: string;
}

const MapComponent = ({
  markers = [],
  center = { lat: 44.9778, lng: -93.265 }, // Defaults to Minneapolis, MN
  zoom = 11,
  apiKey: userApiKey,
  ...props
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapInstanceRef = useRef<google.maps.Map | null>(null);

  // Persistent reference to manage and clear the cluster pool safely across cycles
  const clustererRef = useRef<MarkerClusterer | null>(null);

  // @ts-ignore
  const apiKey = userApiKey || import.meta.env.VITE_APP_GOOGLE_MAPS_KEY || "";

  useEffect(() => {
    if (!mapRef.current || !apiKey) return;

    setOptions({
      key: apiKey,
      v: "weekly",
    });

    Promise.all([importLibrary("maps"), importLibrary("marker")])
      .then(([mapsLib, markerLib]) => {
        if (!mapRef.current) return;

        const map = new mapsLib.Map(mapRef.current, {
          center,
          zoom,
          disableDefaultUI: true,
          clickableIcons: true,
          mapId: "DEMO_MAP_ID", // Required for AdvancedMarkerElement configurations
          gestureHandling: "cooperative",
        });

        googleMapInstanceRef.current = map;

        // Initialize the global cluster controller attached to this map instance
        clustererRef.current = new MarkerClusterer({ map, markers: [] });

        syncMarkers(markerLib);
      })
      .catch((err) => {
        console.error(
          "Google Maps functional API script initialization failure:",
          err,
        );
      });

    return () => {
      if (clustererRef.current) {
        clustererRef.current.clearMarkers();
      }
      googleMapInstanceRef.current = null;
      clustererRef.current = null;
    };
  }, [apiKey]);

  // Synchronize marker data updates by letting the Clusterer handle batches imperatively
  const syncMarkers = (markerLib: google.maps.MarkerLibrary) => {
    const mapInstance = googleMapInstanceRef.current;
    const clustererInstance = clustererRef.current;
    if (!mapInstance || !clustererInstance) return;

    // Wipe out historical cluster states before setting up fresh iterations
    clustererInstance.clearMarkers();

    const freshAdvancedMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

    markers.forEach((item) => {
      // Build modern advanced marker (Do NOT pass 'map: mapInstance' here, clusterer handles drawing)
      const markerInstance = new markerLib.AdvancedMarkerElement({
        position: { lat: item.lat, lng: item.lng },
        title: item.title,
        gmpClickable: true, // Unlocks native interaction layers for modern pointers
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="map-popup"><strong>${item.title}</strong>${item.subtitle ? `<p>\${item.subtitle}</p>` : ""}</div>`,
      });

      // Attach DOM native-friendly event handlers to satisfy deprecation guidelines
      markerInstance.addEventListener("gmp-click", () => {
        infoWindow.open({
          anchor: markerInstance,
          map: mapInstance,
        });
      });

      freshAdvancedMarkers.push(markerInstance);
    });

    // Inject the collection directly into the spatial array in a single execution step
    clustererInstance.addMarkers(freshAdvancedMarkers);
  };

  useEffect(() => {
    if (googleMapInstanceRef.current && clustererRef.current) {
      importLibrary("marker").then((markerLib) => syncMarkers(markerLib));
    }
  }, [markers]);

  useEffect(() => {
    if (googleMapInstanceRef.current) {
      googleMapInstanceRef.current.panTo(center);
      googleMapInstanceRef.current.setZoom(zoom);
    }
  }, [center, zoom]);

  if (!apiKey) {
    return (
      <div className="bmd-map-fallback">
        ⚠️ Google Maps API token missing. Add VITE_APP_GOOGLE_MAPS_KEY to
        environment configs.
      </div>
    );
  }

  return <div ref={mapRef} className="bmd-map-viewport" {...props} />;
};

// Wrap the file inside a memoized shallow comparison engine to optimize frame rates
export const Map = React.memo(MapComponent, (prevProps, nextProps) => {
  // Returns true if props are identical, indicating React should bypass updating the DOM canvas map layer entirely
  return (
    prevProps.markers === nextProps.markers &&
    prevProps.zoom === nextProps.zoom &&
    prevProps.center?.lat === nextProps.center?.lat &&
    prevProps.center?.lng === nextProps.center?.lng
  );
});

export default Map;
