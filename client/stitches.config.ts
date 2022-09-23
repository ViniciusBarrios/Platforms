import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { colors } from "@styles/colors";
import { shadows } from "@styles/shadows";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    opacity: "opacity",
  },

  theme: {
    colors,

    fonts: {
      Montserrat: "'Montserrat', sans-serif",
      "Montserrat-Alternates": "'Montserrat Alternates', sans-serif",
    },

    radii: {
      xs: "2.5px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "99999px",
    },

    shadows,

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
  },

  media: {
    "480-min": "(min-width: 480px)",
    "480-max": "(max-width: 480px)",
    "600-min": "(min-width: 600px)",
    "600-max": "(max-width: 600px)",
    "900-min": "(min-width: 900px)",
    "900-max": "(max-width: 900px)",
  },

  utils: {
    size: (value: any) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: Stitches.ScaleValue<"colors">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

type StitchesCssType = Stitches.CSS<typeof config>;

export type { StitchesCssType };
