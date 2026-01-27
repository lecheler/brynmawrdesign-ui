import * as React from "react";
import { cx } from "../../utils/classNames";
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
    return (
      <div
        className={cx("bmd-text-input", className)}
        data-size={size}
        data-state={state !== "default" ? state : undefined}
      >
        <input ref={ref} className="bmd-text-input__control" {...props} />
      </div>
    );
  },
);
