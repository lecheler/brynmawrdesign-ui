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

// src/stories/foundations/layout/Inline.tsx
import * as React3 from "react";
function Inline({
  as,
  gap = 2,
  align = "center",
  wrap = false,
  style,
  ...props
}) {
  const Comp = as || "div";
  return /* @__PURE__ */ React3.createElement(
    Comp,
    {
      className: "bmd-Inline",
      "data-gap": gap,
      style: {
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style
      },
      ...props
    }
  );
}

// src/stories/foundations/layout/Stack.tsx
import * as React4 from "react";
function Stack({
  as,
  gap = 3,
  style,
  ...props
}) {
  const Comp = as || "div";
  return /* @__PURE__ */ React4.createElement(Comp, { className: "bmd-Stack", "data-gap": gap, style, ...props });
}

// src/stories/foundations/typography/Heading.tsx
import * as React5 from "react";
function Heading({
  level = 2,
  as,
  ...props
}) {
  const defaultTag = `h${level}`;
  const Comp = as || defaultTag;
  return /* @__PURE__ */ React5.createElement(Comp, { className: "bmd-heading", "data-level": level, ...props });
}

// src/stories/foundations/typography/Text.tsx
import * as React6 from "react";
function Text({
  as,
  size = "md",
  ...props
}) {
  const Comp = as || "p";
  return /* @__PURE__ */ React6.createElement(Comp, { className: "bmd-text", "data-size": size, ...props });
}

// src/stories/components/Button/Button.tsx
import React7 from "react";
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
  return /* @__PURE__ */ React7.createElement(
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
    icon ? /* @__PURE__ */ React7.createElement(React7.Fragment, null, iconPosition === "left" && /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(Icon, { ...icon })), (children || label) && /* @__PURE__ */ React7.createElement("span", null, children || label), iconPosition === "right" && /* @__PURE__ */ React7.createElement("span", null, /* @__PURE__ */ React7.createElement(Icon, { ...icon }))) : /* @__PURE__ */ React7.createElement(React7.Fragment, null, children || label)
  );
};

// src/stories/components/TextInput/TextInput.tsx
import * as React8 from "react";

// src/stories/utils/classNames.ts
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/stories/components/TextInput/TextInput.tsx
var TextInput = React8.forwardRef(
  function TextInput2({ size = "md", state = "default", className, ...props }, ref) {
    return /* @__PURE__ */ React8.createElement(
      "div",
      {
        className: cx("bmd-text-input", className),
        "data-size": size,
        "data-state": state !== "default" ? state : void 0
      },
      /* @__PURE__ */ React8.createElement("input", { ref, className: "bmd-text-input__control", ...props })
    );
  }
);
export {
  Button,
  Heading,
  Icon,
  Inline,
  Stack,
  Text,
  TextInput
};
//# sourceMappingURL=index.mjs.map