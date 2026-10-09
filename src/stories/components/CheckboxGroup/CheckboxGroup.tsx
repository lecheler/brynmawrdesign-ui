import React, { useState, useEffect } from "react";
import "./CheckboxGroup.css";

export interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[]; // Array of selected string values
  onChange?: (nextValues: string[]) => void;
  name: string; // Crucial for accessibility and form groupings
}

export const CheckboxGroup = ({
  options,
  value = [],
  onChange,
  name,
  ...props
}: CheckboxGroupProps) => {
  // 1. Core State Hook: Array tracking all selected option string keys
  const [localValues, setLocalValues] = useState<string[]>(value);

  // Sync state cleanly if incoming values (like active URL filters) update externally
  useEffect(() => {
    if (value !== undefined) {
      setLocalValues(value);
    }
  }, [value]);

  const handleToggle = (optionValue: string) => {
    let nextValues: string[];

    if (localValues.includes(optionValue)) {
      // Remove item if already selected
      nextValues = localValues.filter((v) => v !== optionValue);
    } else {
      // Add item if not present
      nextValues = [...localValues, optionValue];
    }

    setLocalValues(nextValues);

    if (onChange) {
      onChange(nextValues); // Propagate selections back to your routing dashboard
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
        const isChecked = localValues.includes(option.value);

        return (
          <label
            key={option.value}
            className="bmd-checkbox-item"
            data-state={isChecked ? "checked" : "unchecked"}
          >
            {/* 2. Standard HTML5 Input hidden natively via CSS layout parameters */}
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="bmd-checkbox-hidden"
            />
            {/* 3. Visual Presentation Layer */}
            <span className="bmd-checkbox-label-text">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};
