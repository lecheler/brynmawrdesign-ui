import React from "react";
import "./TextInput.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // size?: "sm" | "md" | "lg";
  state?: "default" | "error" | "success";
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { size = "md", state = "default", className, ...props },
    ref,
  ) {
    return <input ref={ref} className="bmd-text-input" {...props} />;
  },
);
