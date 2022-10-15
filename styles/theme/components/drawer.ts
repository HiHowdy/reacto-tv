import { lighten } from "@wessberg/color";
import colors from "../colors";

export default {
   baseStyle: {
      header: {
         bg: colors.background,
      },
      body: {
         background: colors.background,
      },
      footer: {
         background: colors.background,
      }
   },
   variants: {
      primary: {
         background: colors.brand,
         body: {
            background: colors.background,
         },
         footer: {
            background: colors.background,
         }
      },
   },
   defaultProps: {
      size: "sm",
      variant: "primary",
   },
};