// src/stories/foundations/icons/index.ts
import React from "react";
var CheckIcon = React.lazy(() => import("./check-FMSAIFD3.mjs"));
var DownloadIcon = React.lazy(() => import("./download-3I7BTR64.mjs"));
var ExclamationIcon = React.lazy(
  () => import("./exclamation-C7WM4IXG.mjs")
);
var SearchIcon = React.lazy(
  () => import("./magnifying-glass-V4RSPSB6.mjs")
);
var StarIcon = React.lazy(() => import("./star-6KL4VQDK.mjs"));
var XIcon = React.lazy(() => import("./x-QMWFAJT3.mjs"));

// src/stories/foundations/icons/Icon.tsx
var ICONS = {
  check: CheckIcon,
  download: DownloadIcon,
  search: SearchIcon,
  star: StarIcon,
  x: XIcon,
  warning: ExclamationIcon
};
var Icon = ({ name, className, ...rest }) => {
  const Svg = ICONS[name];
  return <Svg
    className={["bmd-icon", className].filter(Boolean).join(" ")}
    aria-hidden={rest["aria-label"] ? void 0 : true}
    focusable="false"
    {...rest}
  />;
};

// src/stories/components/Button/Button.tsx
var Button = ({
  label,
  children,
  icon,
  iconPosition = "left",
  variant = "solid",
  tone = "primary",
  size = "md",
  shape = "default",
  disabled = false,
  ...props
}) => {
  if (!label && !icon && !children) {
    console.error(
      "Warning: Button must contain either a label, icon, or children."
    );
    return null;
  }
  return <button
    type="button"
    className="bmd-button"
    disabled={disabled}
    data-variant={variant}
    data-tone={tone}
    data-size={size}
    data-shape={shape}
    {...props}
  >
      {icon ? <>
          {iconPosition === "left" && <>
              <Icon {...icon} />
            </>}

          {(children || label) && <span>{children || label}</span>}

          {iconPosition === "right" && <span>
              <Icon {...icon} />
            </span>}
        </> : <>{children || label}</>}
    </button>;
};
export {
  Button
};
//# sourceMappingURL=index.mjs.map