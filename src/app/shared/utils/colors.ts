/**
 * Converts an HSL color string to a HEX color string.
 *
 * @param color - The HSL color string in the format "H S% L%"
 *                Example: "120 50% 50%"
 *
 * @returns The HEX color string in the format "#RRGGBB"
 */
export const hslToHexColor = (color: string): string => {
  // Extract and parse H, S, and L values
  const [h, s, l] = color
    .replace(/%/g, '') // Remove '%' char from the string
    .split(' ') // Split by spaces into an array
    .map(Number); // Convert into a number

  // Normalizing HSL values
  const hNorm = h % 360; // Ensure hue is within 0-359 degrees
  const sNorm = Math.max(0, Math.min(s, 100)) / 100; // Normalize saturation to [0, 1]
  const lNorm = Math.max(0, Math.min(l, 100)) / 100; // Normalize lightness to [0, 1]

  // Calculate chroma, intermediate value 'x', and lightness adjustment 'm'
  const chroma = (1 - Math.abs(2 * lNorm - 1)) * sNorm; // This formula calculates the color’s chroma, or its intensity and purity.
  const x = chroma * (1 - Math.abs(((hNorm / 60) % 2) - 1)); //  Calculate intermediate value
  const m = lNorm - chroma / 2; // Calculate lightness adjustment

  // Determine RGB components based on hue
  let r = 0,
    g = 0,
    b = 0;
  if (0 <= hNorm && hNorm < 60) {
    r = chroma;
    g = x;
  } else if (60 <= hNorm && hNorm < 120) {
    r = x;
    g = chroma;
  } else if (120 <= hNorm && hNorm < 180) {
    g = chroma;
    b = x;
  } else if (180 <= hNorm && hNorm < 240) {
    g = x;
    b = chroma;
  } else if (240 <= hNorm && hNorm < 300) {
    r = x;
    b = chroma;
  } else if (300 <= hNorm && hNorm < 360) {
    r = chroma;
    b = x;
  }

  // Convert RGB to HEX and apply lightness adjustment
  const toHex = (value: number) =>
    Math.round((value + m) * 255)
      .toString(16)
      .padStart(2, '0');

  // Return final HEX color string
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const getPrimaryHexColor = (color: string): string => {
  try {
    // Validate color format before conversion
    if (!/hsl\(\d+%, \d+%, \d+%\)/.test(color)) {
      throw new Error('Primary color is not in HSL format.');
    }

    return hslToHexColor(color);
  } catch (error) {
    console.error('Error getting primary color:', error);
    return '#000000'; // Default black if there's an issue
  }
};
