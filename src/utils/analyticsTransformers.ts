export interface BandTheme {
  colorVar: string; // The literal CSS variable string passed to your custom charts
}

export const BAND_THEME_MAP: Record<string, BandTheme> = {
  "right-here": { colorVar: "var(--color-data-1)" },
  "nato-coles": { colorVar: "var(--color-data-2)" },
  "slow-death": { colorVar: "var(--color-data-3)" },
  "luke-lecheler": { colorVar: "var(--color-data-4)" },
  "yesterdays-numbers": { colorVar: "var(--color-data-5)" },
  "the-chair": { colorVar: "var(--color-data-6)" },
};

// Fallback in case a new band doesn't have an explicitly defined theme mapping yet
export const getBandTheme = (bandKey: string): BandTheme => {
  return BAND_THEME_MAP[bandKey] || { colorVar: "var(--color-data-1)" };
};

export const prepareShowsForStackedChart = (
  filteredShows: any,
  allShows: any,
) => {
  if (!allShows || allShows.length === 0) return [];

  // 1. Establish the full chronological range across your entire dataset
  const allYears = allShows.map((s: any) => new Date(s.date).getFullYear());
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);

  // 2. Extract a unique list of all 6 bands from your system
  const distinctBandSlugs = Array.from(
    new Set(allShows.map((s: any) => s.band.slug)),
  );

  // 🔑 DEFINED STACK ORDERING: Hardcode or sort your slugs to freeze the layout order
  // This guarantees blue is always at the bottom, red at the top, etc.
  const orderedBands = distinctBandSlugs.sort();

  // 3. Populate a matrix initializing EVERY year with EVERY band set to 0
  const matrix: Record<string, Record<string, number>> = {};
  for (let year = minYear; year <= maxYear; year++) {
    matrix[year] = {};
    orderedBands.forEach((slug: any) => {
      matrix[year][slug] = 0;
    });
  }

  // 4. Fill the matrix with your actual *filtered* show data metrics
  filteredShows.forEach((show: any) => {
    const year = new Date(show.date).getFullYear().toString();
    const slug = show.band.slug;

    // Safety check in case filtered data spans outside the baseline scope
    if (matrix[year] && matrix[year][slug] !== undefined) {
      matrix[year][slug] += 1;
    }
  });

  // 5. Flatten the matrix into your exact bmd-ui data structure
  const chartData: any = [];
  let counter = 1;

  // Outer Loop: Ensures continuous, unbroken horizontal columns (e.g., 2021, 2022, 2023...)
  for (let year = minYear; year <= maxYear; year++) {
    const groupId = year.toString();
    //const displayLabel = `'${groupId.slice(-2)}`;
    const displayLabel = groupId;
    // Inner Loop: Guarantees every single segment stacks in the exact same vertical order
    orderedBands.forEach((slug: any) => {
      chartData.push({
        id: counter++,
        groupId, // Groups into the same vertical column
        label: displayLabel, // Human-readable axis text
        category: slug, // Separates band segments within the stack
        value: matrix[year][slug], // Height (will cleanly map 0 if no shows)
        color: getBandTheme(slug).colorVar, // Standard design token color
      });
    });
  }

  return chartData;
};
