import React from "react";
import "./CheckboxGroup.css";

export interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  value: string[]; // Strictly required now
  onChange: (nextValues: string[]) => void;
  name: string;
}

export const CheckboxGroup = ({
  options,
  value = [], // Read array straight from parent context
  onChange,
  name,
  ...props
}: CheckboxGroupProps) => {
  const handleToggle = (optionValue: string) => {
    let nextValues: string[];

    if (value.includes(optionValue)) {
      // De-select
      nextValues = value.filter((v) => v !== optionValue);
    } else {
      // Select
      nextValues = [...value, optionValue];
    }

    // Call parent handler directly to update the URL
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

        return (
          <label
            key={option.value}
            className="bmd-checkbox-item"
            data-state={isChecked ? "checked" : "unchecked"}
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="bmd-checkbox-hidden"
            />
            <span className="bmd-checkbox-label-text">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};
