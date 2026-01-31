// src/stories/components/Button/Button.tsx
import React3 from "react";

// src/stories/foundations/icons/Icon.tsx
import React2 from "react";

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
  return /* @__PURE__ */ React2.createElement(
    Svg,
    {
      className: ["bmd-icon", className].filter(Boolean).join(" "),
      "aria-hidden": rest["aria-label"] ? void 0 : true,
      focusable: "false",
      ...rest
    }
  );
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
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      type: "button",
      className: "bmd-button",
      disabled,
      "data-variant": variant,
      "data-tone": tone,
      "data-size": size,
      "data-shape": shape,
      ...props
    },
    icon ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, iconPosition === "left" && /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Icon, { ...icon })), (children || label) && /* @__PURE__ */ React3.createElement("span", null, children || label), iconPosition === "right" && /* @__PURE__ */ React3.createElement("span", null, /* @__PURE__ */ React3.createElement(Icon, { ...icon }))) : /* @__PURE__ */ React3.createElement(React3.Fragment, null, children || label)
  );
};
export {
  Button
};
//# sourceMappingURL=index.mjs.map