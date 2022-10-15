import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import colors from './colors';
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  components,
  config,
  styles: {
    global: {
      body: {
        bg: colors.background,
        color: colors.text,
        fontFamily: 'inter, sans-serif',
        minHeight: '100vh',
      },
    },
  },
});

export default theme;
