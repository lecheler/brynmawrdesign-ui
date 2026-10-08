import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce"; // Standard industry utility

import "./Input.css";

export type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  debounceDelay?: number;
  placeholder?: string;
}

export const Input = ({
  onChange,
  inputSize = "md",
  placeholder = "",
  debounceDelay = 0, // 0 means instant execution by default
  ...props
}: InputProps) => {
  const [localValue, setLocalValue] = useState("");

  // Create a memoized debounced version of the external onChange handler
  const debouncedOnChange: any = useMemo(() => {
    if (!debounceDelay) return onChange;

    return debounce((nextValue) => {
      onChange(nextValue);
    }, debounceDelay);
  }, [onChange, debounceDelay]);

  // Clean up any pending debounced calls if the component unmounts
  useEffect(() => {
    return () => {
      if (debouncedOnChange?.cancel) debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  const handleChange = (e) => {
    const val = e.target.value;
    setLocalValue(val); // Always update UI instantly
    debouncedOnChange(val); // Debounce the callback to the parent
  };

  return (
    <input
      className="bmd-input"
      type="text"
      value={localValue}
      onChange={handleChange}
      placeholder={placeholder}
      data-input-size={inputSize}
      {...props}
    />
  );
};
