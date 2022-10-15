import { lighten } from '@wessberg/color';
import colors from '../colors';

export default {
  baseStyle: {
    label: {
      fontWeight: 500,
      color: colors.text,
    },
  },
  variants: {
    primary: {
      control: {
        borderRadius: 'none !important',
        outline: 'none',
        _checked: {
          bg: colors.brand,
          borderColor: colors.brand,
          color: colors.text,
          _hover: {
            bg: lighten(colors.brand, 10.5),
            borderColor: lighten(colors.brand, 10.5),
          },
        },
        _hover: {
          borderColor: colors.brand,
        },
        _focus: {
          boxShadow: `0 0 0 2px ${colors.brand} !important`,
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
