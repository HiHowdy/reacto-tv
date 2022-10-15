import { lighten } from "@wessberg/color";
import colors from "../colors";

export default {
   baseStyle: {
      field: {
         borderRadius: "none !important",
      },
   },
   variants: {
      filled: {
         field: {
            background: colors.input,
            color: colors.text,
            border: "none !important",
            outline: "none !important",
            borderRadius: 0,
            _placeholder: {
               color: colors.text,
               opacity: 0.5,
               fontWeight: 400,
            },
            _hover: {
               background: colors.input,
            },
            _focus: {
               boxShadow: "none !important",
               border: "none",
               bg: colors.input,
            },
            "> option": {
               background: colors.input,
               borderRadius: "none",
            },
         },
      },
      underline: {
         field: {
            background: colors.input,
            color: colors.text,
            borderBottom: `1px solid #fff`,
            outline: "none !important",
            borderRadius: 0,
            _placeholder: {
               color: colors.text,
               opacity: 0.5,
               fontWeight: 400,
            },
            _hover: {
               background: colors.input,
               cursor: "text",
            },
            _focus: {
               boxShadow: "none !important",
               borderBottom: `1px solid ${colors.brand}`,
               bg: colors.input,
            },
            "> option": {
               background: colors.input,
               borderRadius: "none",
            },
         },
      },
   },
   defaultProps: {
      variant: "filled",
   },
};
