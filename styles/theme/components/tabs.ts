import { lighten } from "@wessberg/color";
import colors from "../colors";

export default {
   baseStyle: {
      tab: {
         borderRadius: "none !important",
      }
   },
   variants: {
      underline: {
         tab: {
            borderRadius: "none !important",
            borderBottom: `2px solid`,
            borderColor: lighten(colors.text, -50.0),
            _selected: {
               color: colors.text,
               fontWeight: 500,
               borderBottom: `2px solid ${colors.brand}`,
               _hover: {
                  color: colors.text,
                  borderBottom: `2px solid ${colors.brand}`,
               }
            },
            _hover: {
               color: colors.text,
               borderBottom: `2px solid ${lighten(colors.text, -25.5)}`,
            }
         }
      },
      filled: {
         tab: {
            borderRadius: "none !important",
            bg: colors.input,
            color: colors.text,
            _selected: {
               color: colors.text,
               fontWeight: 500,
               bg: colors.brand,
               _hover: {
                  color: colors.text,
                  bg: colors.brand,
               },
            },
            _hover: {
               color: colors.text,
               bg: lighten(colors.input, 3.0),
            },
         },
      }
   },
   defaultProps: {
      size: "md",
      variant: "underline",
   },
}