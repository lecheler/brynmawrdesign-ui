import React, { useMemo, useState } from "react";
import { Stack } from "../Stack/Stack";
import { Input } from "../Input/Input";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

export interface MultiFilterOption {
  label: string; // The display name inside the checkboxes/chips (e.g., "The Fillmore")
  value: string; // The unique ID or code (e.g., "42")
  searchString: string; // The searchable datalist text (e.g., "The Fillmore (Denver, CO)")
  colorToken?: string;
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
  const [searchValue, setSearchValue] = useState("");
  // Generate a totally unique HTML datalist ID attribute to support having multiple filters on a single page
  const datalistId = `bmd-multifilter-list-${name}`;
  const inputId = `bmd-multifilter-input-${name}`;

  const activeCheckboxOptions = useMemo(() => {
    // 1. Iterate over the small array of active string values (e.g., ["42", "109"])
    return (
      value
        .map((selectedValue) => {
          // 2. Perform a target lookup to find the corresponding master option object block
          const matchedOption = options.find(
            (opt) => opt.value === selectedValue,
          );
          return matchedOption;
        })
        // 3. Clear out any undefined values in case an unmapped ID slips through
        .filter((opt): opt is MultiFilterOption => !!opt)
        // 4. Shape the clean primitives payload
        .map((opt) => ({
          label: opt.label,
          value: opt.value,
          colorToken: opt.colorToken, // ✅ PERFECT: Forwards your color overrides directly to the pills!
        }))
    );
  }, [options, value]); // Recalculates dynamically when selections change

  const handleSearchInput = (inputValue: string) => {
    setSearchValue(inputValue);

    const match = options.find(
      (opt) => opt.searchString.toLowerCase() === inputValue.toLowerCase(),
    );

    if (match) {
      if (!value.includes(match.value)) {
        onChange([...value, match.value]);
      }

      // 1. Instantly clear out your React value state
      setSearchValue("");

      // 2. 🛟 THE FIX: Force the browser to drop focus from the active text block
      // This tells the native browser engine to instantly close the dropdown popover menu
      const activeEl = document.activeElement as HTMLElement;
      if (activeEl && activeEl.id === inputId) {
        activeEl.blur(); // Drops browser focus
      }
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
          value={searchValue}
        />
      </Stack>

      {/* The Selected Tray: Only mounts if at least one checkbox filter is engaged */}
      {activeCheckboxOptions.length > 0 && (
        <Stack gap={2} align="start">
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
            dismissible={true}
          />
        </Stack>
      )}
    </Stack>
  );
};
