import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Login from '../components/Modal/Modals/Login';
import ForceDarkMode from '../components/ForceDarkMode';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ForceDarkMode>
        <Navbar />
        <Login />
        <Component {...pageProps} />
      </ForceDarkMode>
    </ChakraProvider>
  );
}

export default MyApp;
