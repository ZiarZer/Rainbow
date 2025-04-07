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
