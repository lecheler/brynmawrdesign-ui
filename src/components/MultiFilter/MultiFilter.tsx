import React, { useMemo } from "react";
import { Stack } from "../Stack/Stack";
import { Input } from "../Input/Input";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

export interface MultiFilterOption {
  label: string; // The display name inside the checkboxes/chips (e.g., "The Fillmore")
  value: string; // The unique ID or code (e.g., "42")
  searchString: string; // The searchable datalist text (e.g., "The Fillmore (Denver, CO)")
}

interface MultiFilterProps {
  label?: string;
  placeholder?: string;
  options: MultiFilterOption[];
  value?: string[]; // Array of currently active selected option values
  onChange: (nextValues: string[]) => void;
  name: string; // Crucial for unique datalist ID mappings on the DOM
}

export const MultiFilter = ({
  label,
  placeholder = "Search and add filters...",
  options = [],
  value = [],
  onChange,
  name,
}: MultiFilterProps) => {
  // Generate a totally unique HTML datalist ID attribute to support having multiple filters on a single page
  const datalistId = `bmd-multifilter-list-${name}`;
  const inputId = `bmd-multifilter-input-${name}`;

  // 1. Filter down your massive options array to ONLY show pills for items currently selected
  const activeCheckboxOptions = useMemo(() => {
    return options
      .filter((opt) => value.includes(opt.value))
      .map((opt) => ({
        label: opt.label,
        value: opt.value,
      }));
  }, [options, value]);

  // 2. Intercept the user input selection
  const handleSearchInput = (inputValue: string) => {
    const match = options.find(
      (opt) => opt.searchString.toLowerCase() === inputValue.toLowerCase(),
    );

    if (match) {
      // If it matches a dropdown item and isn't already active, append it!
      if (!value.includes(match.value)) {
        onChange([...value, match.value]);
      }

      // Automatically wipe out the input box text so they can search for the next item immediately
      const inputEl = document.getElementById(inputId) as HTMLInputElement;
      if (inputEl) inputEl.value = "";
    }
  };

  return (
    <Stack gap={2}>
      <Stack gap={1}>
        {label && (
          <label htmlFor={inputId} style={{ font: "var(--type-ui-sublabel)" }}>
            {label}
          </label>
        )}

        {/* Dynamic HTML5 Search Datalist anchor track */}
        <datalist id={datalistId}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.searchString} />
          ))}
        </datalist>

        <Input
          id={inputId}
          type="text"
          placeholder={placeholder}
          list={datalistId}
          debounceDelay={150}
          onChange={(val) => handleSearchInput(val.toString())}
        />
      </Stack>

      {/* The Selected Tray: Only mounts if at least one checkbox filter is engaged */}
      {activeCheckboxOptions.length > 0 && (
        <Stack gap={1}>
          <span
            style={{
              font: "var(--type-caption)",
              color: "var(--color-text-muted)",
            }}
          >
            Active Selections:
          </span>
          <CheckboxGroup
            name={name}
            options={activeCheckboxOptions}
            value={value}
            onChange={onChange}
          />
        </Stack>
      )}
    </Stack>
  );
};
