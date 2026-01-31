var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/stories/foundations/icons/svgs/check.svg?react
var require_check = __commonJS({
  "src/stories/foundations/icons/svgs/check.svg?react"(exports2, module2) {
    module2.exports = "./check-NRM6WQNT.svg?react";
  }
});

// src/stories/foundations/icons/svgs/download.svg?react
var require_download = __commonJS({
  "src/stories/foundations/icons/svgs/download.svg?react"(exports2, module2) {
    module2.exports = "./download-LO4EVFVQ.svg?react";
  }
});

// src/stories/foundations/icons/svgs/exclamation.svg?react
var require_exclamation = __commonJS({
  "src/stories/foundations/icons/svgs/exclamation.svg?react"(exports2, module2) {
    module2.exports = "./exclamation-45S2GXVS.svg?react";
  }
});

// src/stories/foundations/icons/svgs/magnifying-glass.svg?react
var require_magnifying_glass = __commonJS({
  "src/stories/foundations/icons/svgs/magnifying-glass.svg?react"(exports2, module2) {
    module2.exports = "./magnifying-glass-B4KJJ7B6.svg?react";
  }
});

// src/stories/foundations/icons/svgs/star.svg?react
var require_star = __commonJS({
  "src/stories/foundations/icons/svgs/star.svg?react"(exports2, module2) {
    module2.exports = "./star-NACEYLM7.svg?react";
  }
});

// src/stories/foundations/icons/svgs/x.svg?react
var require_x = __commonJS({
  "src/stories/foundations/icons/svgs/x.svg?react"(exports2, module2) {
    module2.exports = "./x-2HNMQE4D.svg?react";
  }
});

// src/stories/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Heading: () => Heading,
  Icon: () => Icon,
  Inline: () => Inline,
  Stack: () => Stack,
  Text: () => Text,
  TextInput: () => TextInput
});
module.exports = __toCommonJS(index_exports);

// src/stories/foundations/icons/Icon.tsx
var import_react2 = __toESM(require("react"));

// src/stories/foundations/icons/index.ts
var import_react = __toESM(require("react"));
var CheckIcon = import_react.default.lazy(() => Promise.resolve().then(() => __toESM(require_check())));
var DownloadIcon = import_react.default.lazy(() => Promise.resolve().then(() => __toESM(require_download())));
var ExclamationIcon = import_react.default.lazy(
  () => Promise.resolve().then(() => __toESM(require_exclamation()))
);
var SearchIcon = import_react.default.lazy(
  () => Promise.resolve().then(() => __toESM(require_magnifying_glass()))
);
var StarIcon = import_react.default.lazy(() => Promise.resolve().then(() => __toESM(require_star())));
var XIcon = import_react.default.lazy(() => Promise.resolve().then(() => __toESM(require_x())));

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
  return /* @__PURE__ */ import_react2.default.createElement(
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
var React3 = __toESM(require("react"));
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
var React4 = __toESM(require("react"));
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
var React5 = __toESM(require("react"));
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
var React6 = __toESM(require("react"));
function Text({
  as,
  size = "md",
  ...props
}) {
  const Comp = as || "p";
  return /* @__PURE__ */ React6.createElement(Comp, { className: "bmd-text", "data-size": size, ...props });
}

// src/stories/components/Button/Button.tsx
var import_react3 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react3.default.createElement(
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
    icon ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, iconPosition === "left" && /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(Icon, { ...icon })), (children || label) && /* @__PURE__ */ import_react3.default.createElement("span", null, children || label), iconPosition === "right" && /* @__PURE__ */ import_react3.default.createElement("span", null, /* @__PURE__ */ import_react3.default.createElement(Icon, { ...icon }))) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children || label)
  );
};

// src/stories/components/TextInput/TextInput.tsx
var React8 = __toESM(require("react"));

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Heading,
  Icon,
  Inline,
  Stack,
  Text,
  TextInput
});
//# sourceMappingURL=index.js.map