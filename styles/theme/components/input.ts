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
               cursor: "text",
            },
            _focus: {
               boxShadow: "none !important",
               border: "none",
               bg: colors.input,
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
         },
      },
      outline: {
         field: {
            background: colors.input,
            color: colors.text,
            border: `1px solid ${colors.text}`,
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
               border: `1px solid ${colors.brand}`,
               bg: colors.input,
            },
         },
      },
      ghost: {
         field: {
            background: "transparent",
            color: colors.darkText,
            border: `none !important`,
            outline: "none !important",
            borderRadius: 0,
            _placeholder: {
               color: colors.darkText,
               opacity: 0.5,
               fontWeight: 400,
            },
            _hover: {
               background: "transparent",
               cursor: "text",
            },
            _focus: {
               boxShadow: "none !important",
               border: `none !important`,
               bg: "transparent",
            },
         },
      },
      'ghost-dark': {
         field: {
            background: "transparent",
            color: colors.text,
            border: `none !important`,
            outline: "none !important",
            borderRadius: 0,
            _placeholder: {
               color: colors.text,
               opacity: 0.5,
               fontWeight: 400,
            },
            _hover: {
               background: "transparent",
               cursor: "text",
            },
            _focus: {
               boxShadow: "none !important",
               border: `none !important`,
               bg: "transparent",
            },
         },
      },
   },
   defaultProps: {
      variant: "outline",
      size: "md",
   },
};
