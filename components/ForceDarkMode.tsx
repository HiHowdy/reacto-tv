import { useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

interface IProps {
  children: any;
}

const ForceDarkMode = ({ children }: IProps) => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode !== 'dark') {
      setColorMode('dark');
    }
  }, [colorMode, setColorMode]);

  return children;
};

export default ForceDarkMode;
