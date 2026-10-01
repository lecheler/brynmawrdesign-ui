import React, { lazy } from "react";

const makeSvgComponent = (importPromise: Promise<{ default: string }>) => {
  return lazy(async () => {
    const module = await importPromise;
    const rawSvgText = module.default;

    // 1. Correctly isolate everything inside the opening <svg ...> tag
    const attrMatch = rawSvgText.match(/<svg([^>]*)>/);
    const attributesString = attrMatch ? attrMatch[1] : "";

    // 2. Extract everything inside the opening and closing tags
    const innerHTML = rawSvgText
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>/, "");

    // 3. Map the raw string attributes into a clean JavaScript object
    const attrs: Record<string, string> = {};
    const attrRegex = /([\w:-]+)=["']([^"']*)["']/g;
    let match;

    while ((match = attrRegex.exec(attributesString)) !== null) {
      const key = match[1];
      const value = match[2];

      // Preserve essential viewBox rendering rules or react-specific naming conventions
      if (key.toLowerCase() === "viewbox") {
        attrs["viewBox"] = value;
      } else {
        attrs[key] = value;
      }
    }

    // Return the clean object tree that React.lazy expects to render
    return {
      default: (props: React.SVGProps<SVGSVGElement>) =>
        React.createElement("svg", {
          ...attrs,
          ...props,
          dangerouslySetInnerHTML: { __html: innerHTML },
        }),
    };
  });
};

// Your loaders remain identical:
export const ArrowUp = makeSvgComponent(import("./svgs/arrow-up.svg?raw"));
export const ArrowDown = makeSvgComponent(import("./svgs/arrow-down.svg?raw"));
export const ChevronRight = makeSvgComponent(
  import("./svgs/chevron-right.svg?raw"),
);
export const ChevronLeft = makeSvgComponent(
  import("./svgs/chevron-left.svg?raw"),
);
export const ChevronsRight = makeSvgComponent(
  import("./svgs/chevrons-right.svg?raw"),
);
export const ChevronsLeft = makeSvgComponent(
  import("./svgs/chevrons-left.svg?raw"),
);
export const CheckIcon = makeSvgComponent(import("./svgs/check.svg?raw"));
export const DownloadIcon = makeSvgComponent(import("./svgs/download.svg?raw"));
export const ExclamationIcon = makeSvgComponent(
  import("./svgs/exclamation.svg?raw"),
);
export const SearchIcon = makeSvgComponent(
  import("./svgs/magnifying-glass.svg?raw"),
);
export const StarIcon = makeSvgComponent(import("./svgs/star.svg?raw"));
export const XIcon = makeSvgComponent(import("./svgs/x.svg?raw"));
