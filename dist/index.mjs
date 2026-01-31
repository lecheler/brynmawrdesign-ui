// src/stories/components/TextInput/TextInput.tsx
import * as React from "react";

// src/stories/utils/classNames.ts
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/stories/components/TextInput/TextInput.tsx
var TextInput = React.forwardRef(
  function TextInput2({ size = "md", state = "default", className, ...props }, ref) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cx("bmd-text-input", className),
        "data-size": size,
        "data-state": state !== "default" ? state : void 0
      },
      /* @__PURE__ */ React.createElement("input", { ref, className: "bmd-text-input__control", ...props })
    );
  }
);

// src/stories/components/Button/Button.tsx
import React4 from "react";

// src/stories/foundations/icons/Icon.tsx
import React3 from "react";

// src/stories/foundations/icons/index.ts
import React2 from "react";
var CheckIcon = React2.lazy(() => import("./check-FMSAIFD3.mjs"));
var DownloadIcon = React2.lazy(() => import("./download-3I7BTR64.mjs"));
var ExclamationIcon = React2.lazy(
  () => import("./exclamation-C7WM4IXG.mjs")
);
var SearchIcon = React2.lazy(
  () => import("./magnifying-glass-V4RSPSB6.mjs")
);
var StarIcon = React2.lazy(() => import("./star-6KL4VQDK.mjs"));
var XIcon = React2.lazy(() => import("./x-QMWFAJT3.mjs"));

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
  return /* @__PURE__ */ React3.createElement(
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
  return /* @__PURE__ */ React4.createElement(
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
    icon ? /* @__PURE__ */ React4.createElement(React4.Fragment, null, iconPosition === "left" && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Icon, { ...icon })), (children || label) && /* @__PURE__ */ React4.createElement("span", null, children || label), iconPosition === "right" && /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement(Icon, { ...icon }))) : /* @__PURE__ */ React4.createElement(React4.Fragment, null, children || label)
  );
};
export {
  Button,
  TextInput
};
//# sourceMappingURL=index.mjs.map