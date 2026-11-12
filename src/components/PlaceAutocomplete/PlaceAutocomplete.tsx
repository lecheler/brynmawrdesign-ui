import React, { useEffect, useRef } from "react";
import { loadGoogleLibrary } from "../../utils/googleMapsLoader";
import "./PlaceAutocomplete.css";

export interface PlaceSelection {
  placeId: string;
  name: string;
  address: string;
  lat?: number;
  lng?: number;
}

export interface PlaceAutocompleteProps {
  onPlaceSelect: (place: PlaceSelection) => void;
  placeholder?: string;
  includedPrimaryTypes?: string[]; // e.g. ["bar", "night_club", "performing_arts_theater"]
  disabled?: boolean;
  apiKey?: string;
  className?: string;
}

export const PlaceAutocomplete = ({
  onPlaceSelect,
  placeholder = "Search for a business or venue...",
  includedPrimaryTypes,
  disabled = false,
  apiKey,
  className = "",
}: PlaceAutocompleteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onPlaceSelect);

  // Keep latest callback without re-mounting the Google Web Component
  useEffect(() => {
    callbackRef.current = onPlaceSelect;
  }, [onPlaceSelect]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let autocompleteEl: google.maps.places.PlaceAutocompleteElement | null =
      null;
    let isCancelled = false;

    const handleSelect = async (event: any) => {
      const placePrediction = event.placePrediction;
      if (!placePrediction) return;

      const place = placePrediction.toPlace();
      await place.fetchFields({
        fields: ["id", "displayName", "formattedAddress", "location"],
      });

      callbackRef.current({
        placeId: place.id,
        name: place.displayName || "",
        address: place.formattedAddress || "",
        lat: place.location?.lat(),
        lng: place.location?.lng(),
      });
    };

    loadGoogleLibrary<google.maps.PlacesLibrary>("places", apiKey)
      .then((placesLib) => {
        if (isCancelled || !containerRef.current) return;

        autocompleteEl = new placesLib.PlaceAutocompleteElement({
          ...(includedPrimaryTypes ? { includedPrimaryTypes } : {}),
        });

        // Apply attributes directly to the custom web component
        autocompleteEl.setAttribute("placeholder", placeholder);
        if (disabled) {
          autocompleteEl.setAttribute("disabled", "true");
        }

        autocompleteEl.addEventListener("gmp-select", handleSelect);
        containerRef.current.appendChild(autocompleteEl);
      })
      .catch((err) => {
        console.error("Failed to load Google Places library:", err);
      });

    return () => {
      isCancelled = true;
      if (autocompleteEl) {
        autocompleteEl.removeEventListener("gmp-select", handleSelect);
        autocompleteEl.remove();
      }
    };
  }, [apiKey, placeholder, disabled, includedPrimaryTypes]);

  return (
    <div
      ref={containerRef}
      className={`bmd-place-autocomplete ${className}`}
      data-disabled={disabled || undefined}
    />
  );
};
