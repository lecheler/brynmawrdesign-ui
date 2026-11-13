import React, { useEffect, useRef } from "react";
import { loadGoogleLibrary } from "../../utils/googleMapsLoader";
import "./PlaceAutocomplete.css";

export interface PlaceSelection {
  name: string;
  latitude: number;
  longitude: number;
  locality: string | null;
  administrative_area: string | null;
  place_id: string;
  formatted_address: string | null;
  country_code: string | null;
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
        fields: [
          "id",
          "displayName",
          "formattedAddress",
          "location",
          "addressComponents",
        ],
      });

      const getComponent = (type: string, short = false) => {
        const comp = place.addressComponents?.find((c: any) =>
          c.types.includes(type),
        );
        return comp ? (short ? comp.shortText : comp.longText) : "";
      };

      callbackRef.current({
        place_id: place.id,
        name: place.displayName || "",
        locality: getComponent("locality") || getComponent("postal_town"),
        administrative_area: getComponent("administrative_area_level_1", true), // e.g., "MN"
        country_code: getComponent("country", true), // e.g., "US"
        latitude: place.location?.lat(),
        longitude: place.location?.lng(),
        formatted_address: place.formattedAddress,
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
