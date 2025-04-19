/* 
  DESC
*/
import defaultTheme from "./theme/default.json" assert { type: 'json' };
import { createPalette, DARK_BRIGHTNESS, LIGHT_BRIGHTNESS } from "./palette/index.js";

const createTheme = (theme, isDark) => {
  const palette = createPalette(theme.palette, isDark ? DARK_BRIGHTNESS : LIGHT_BRIGHTNESS);
  return palette
};

console.log(createTheme(defaultTheme, false))

export default {
  createTheme,
};
