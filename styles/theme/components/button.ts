import { lighten } from "@wessberg/color";
import colors from "../colors";

export default {
   sizes: {
      lg: {
         fontSize: "0.95rem",
      },
      md: {
         fontSize: "0.85rem",
      },
      sm: {
         fontSize: "0.75rem",
      }
   },
   baseStyle: {
      fontWeight: "600",
      boxShadow: "none !important",
      border: "none",
   },
   variants: {
      solid: {
         bg: colors.brand,
         color: colors.text,
         _hover: {
            bg: lighten(colors.brand, 5.5),
         },
         _active: {
            bg: lighten(colors.brand, 10),
         },
      },
      outline: {
         bg: "transparent",
         color: colors.brand,
         border: `2px solid ${colors.brand} !important`,
         _hover: {
            bg: colors.brand,
            color: colors.text,
         },
         _active: {
            bg: lighten(colors.brand, 5.5),
            color: colors.text,
         },
      },
      light: {
         background: "rgba(245, 245, 245, 0.55)",
         backdropFilter: "blur(4.5px)",
         color: colors.darkText,
         _hover: {
            background: lighten("rgba(245, 245, 245, 0.55)", 20.5),
            backdropFilter: "blur(0)",
         },
      },
      dark: {
         background: colors.card,
         color: colors.text,
         _hover: {
            background: lighten(colors.card, 5.5),
         },
      },
      ghost: {
         bg: "transparent",
         color: colors.brand,
         _hover: {
            bg: colors.brand,
            color: colors.text,
         },
         _active: {
            bg: lighten(colors.brand, 5.5),
            color: colors.text,
         },
      }
   },
   defaultProps: {
      variant: "solid",
      size: "sm",
   },
};
