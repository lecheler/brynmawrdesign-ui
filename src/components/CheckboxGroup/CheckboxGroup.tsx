// src/components/Primitives/CheckboxGroup/CheckboxGroup.tsx
import React from "react";
import "./CheckboxGroup.css";
import { Icon } from "../Icon/Icon";

export interface CheckboxOption {
  label: string;
  value: string;
  colorToken?: string; // ✅ Goal 2: Accept a custom color variable override
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (nextValues: string[]) => void;
  name: string;
  dismissible?: boolean;
}

export const CheckboxGroup = ({
  options = [],
  value = [],
  onChange,
  name,
  dismissible = false,
  ...props
}: CheckboxGroupProps) => {
  const handleToggle = (optionValue: string) => {
    let nextValues: string[];

    if (value.includes(optionValue)) {
      // Remove item if checked (or clicked via the X dismiss trigger)
      nextValues = value.filter((v) => v !== optionValue);
    } else {
      // Add item if unchecked
      nextValues = [...value, optionValue];
    }

    if (onChange) {
      onChange(nextValues);
    }
  };

  return (
    <div
      className="bmd-checkbox-group"
      role="group"
      aria-label={name}
      {...props}
    >
      {options.map((option) => {
        const isChecked = value.includes(option.value);

        console.log("option.colorToken:", option.colorToken);

        // Calculate a safe style object mapping if a color token is provided
        const customStyle =
          isChecked && option.colorToken
            ? ({ "--bmd-pill-bg": option.colorToken } as React.CSSProperties)
            : undefined;

        return (
          <label
            key={option.value}
            className="bmd-checkbox-item"
            data-state={isChecked ? "checked" : "unchecked"}
            style={customStyle} // Dynamically injects the background variable override
          >
            {/* Native input layer completely hidden visually by CSS */}
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="bmd-checkbox-hidden"
            />

            {/* Pill Label Label String */}
            <span className="bmd-checkbox-label-text">{option.label}</span>

            {/* ✅ Goal 1: The 'X' Close Action Icon Layer */}
            {isChecked && dismissible && (
              <span
                className="bmd-checkbox-dismiss"
                role="button"
                aria-label={`Remove ${option.label}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevents double-triggering checkbox clicks
                  handleToggle(option.value);
                }}
              >
                <Icon name="x" />
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
};
