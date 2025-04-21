/* 
  DESC
*/
import defaultTheme from "./theme/default.json" assert { type: 'json' };
import { createPalette, DARK_BRIGHTNESS, LIGHT_BRIGHTNESS } from "./palette/index.js";

const createTheme = (theme, isDark) => {
  const palette = createPalette(theme.palette, isDark ? DARK_BRIGHTNESS : LIGHT_BRIGHTNESS);
  return palette
};

const transValueToVariable = (prefix, valueList, brightness) => {
  return Object.keys(valueList).reduce((pre, item) => {
    return pre.concat(...brightness.map((bright, index) => {
      return {
        [`--${prefix}-${item}-${bright}`]: valueList[item][index]
      }
    }))
  }, [])
}

// console.log(createTheme(defaultTheme, false))
console.log(transValueToVariable("apsc", createTheme(defaultTheme, false), LIGHT_BRIGHTNESS))

export default {
  createTheme,
};
