import React, { useState, useEffect } from "react";
import "./Select.css";

export type SelectSize = "sm" | "md" | "lg";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectSize?: SelectSize;
}

export const Select = ({
  onChange,
  value,
  selectSize = "md",
  children,
  ...props
}: SelectProps) => {
  // Sync local UI state with the incoming controlled value prop (like active URL filters)
  const [localValue, setLocalValue] = useState(value || "");

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setLocalValue(val); // Sync local state instantly
    if (onChange) {
      onChange(e); // Propagate the native event object back to the parent listener
    }
  };

  return (
    <select
      className="bmd-select"
      value={localValue}
      onChange={handleChange}
      data-select-size={selectSize}
      {...props}
    >
      {children}
    </select>
  );
};
