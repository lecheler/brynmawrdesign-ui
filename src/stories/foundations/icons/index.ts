// 1. Helper function that turns a relative asset path into an absolute string URL
const getIconUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};

// 2. Export simple string paths synchronously
export const ArrowUp = getIconUrl("./svgs/arrow-up.svg");
export const ArrowDown = getIconUrl("./svgs/arrow-down.svg");

export const ChevronRight = getIconUrl("./svgs/chevron-right.svg");
export const ChevronLeft = getIconUrl("./svgs/chevron-left.svg");
export const ChevronsRight = getIconUrl("./svgs/chevrons-right.svg");
export const ChevronsLeft = getIconUrl("./svgs/chevrons-left.svg");

export const Check = getIconUrl("./svgs/check.svg");
export const Download = getIconUrl("./svgs/download.svg");
export const Exclamation = getIconUrl("./svgs/exclamation.svg");
export const Search = getIconUrl("./svgs/magnifying-glass.svg");
export const Star = getIconUrl("./svgs/star.svg");
export const X = getIconUrl("./svgs/x.svg");
