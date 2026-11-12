// src/utils/googleMapsLoader.ts
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let isConfigured = false;

export const loadGoogleLibrary = <
  T extends
    | google.maps.MapsLibrary
    | google.maps.MarkerLibrary
    | google.maps.PlacesLibrary,
>(
  library: "maps" | "marker" | "places",
  userApiKey?: string,
) => {
  // @ts-ignore
  const apiKey = userApiKey || import.meta.env.VITE_APP_GOOGLE_MAPS_KEY || "";

  if (!isConfigured && !window.google?.maps && apiKey) {
    setOptions({
      key: apiKey,
      v: "weekly",
    });
    isConfigured = true;
  }

  return importLibrary(library) as Promise<T>;
};
