const computeColorComposantShade = (colorComposant, brightnessFactor) => {
  return colorComposant
    ? Math.min(255, Math.round(colorComposant * brightnessFactor))
    : 0;
};

const hexToRgb = (hexColor) => {
  if (!/^#[a-fA-F0-9]{6}$/.test(hexColor)) {
    return null;
  }
  const colorInt = parseInt(hexColor.slice(1), 16);
  return {
    r: (colorInt >> 16) % 256,
    g: (colorInt >> 8) % 256,
    b: colorInt % 256,
  };
};

const intToHex = (n) => n.toString(16).padStart(2, '0');
const rgbToHex = (rgb) => {
  return `#${intToHex(rgb.r)}${intToHex(rgb.g)}${intToHex(rgb.b)}`;
};

export const computeShade = (baseHexColor, brightnessFactor) => {
  const rgb = hexToRgb(baseHexColor);
  const shadeRgb = {
    r: computeColorComposantShade(rgb?.r, brightnessFactor),
    g: computeColorComposantShade(rgb?.g, brightnessFactor),
    b: computeColorComposantShade(rgb?.b, brightnessFactor),
  };
  return rgbToHex(shadeRgb);
};

export const computeGradientStepColor = (
  startColorHex,
  endColorHex,
  gradientStep
) => {
  const startColorRgb = hexToRgb(startColorHex);
  const endColorRgb = hexToRgb(endColorHex);

  const deltaRgb = {
    r: endColorRgb.r - startColorRgb.r,
    g: endColorRgb.g - startColorRgb.g,
    b: endColorRgb.b - startColorRgb.b,
  };
  const gradientStepRgb = {
    r: Math.round(startColorRgb.r + deltaRgb.r * gradientStep),
    g: Math.round(startColorRgb.g + deltaRgb.g * gradientStep),
    b: Math.round(startColorRgb.b + deltaRgb.b * gradientStep),
  };

  return rgbToHex(gradientStepRgb);
};
