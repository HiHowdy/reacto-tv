import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  wrapperId?: string;
  children?: React.ReactNode;
}

const Portal = ({ children, wrapperId = 'portal' }: IProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof document !== 'undefined') {
    const portalRoot = document.getElementById(wrapperId)!;
    return mounted ? createPortal(children, portalRoot) : null;
  }

  return null;
};

export default Portal;
