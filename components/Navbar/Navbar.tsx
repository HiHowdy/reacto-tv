import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useStore from '../../store';
import Styled from '../../styles/styled/navbar';
import LargeNav from './LargeNav';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  const { search, setSearchQuery, setLoggingIn, setRegistering } = useStore(
    (state) => state
  );
  const [collapseNav] = useMediaQuery('(max-width: 768px)');
  const [smallNav, setSmallNav] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 430) setSmallNav(true);
    else setSmallNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [collapseNav]);

  const {
    isOpen: drawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  // const _isSSR = typeof window === "undefined";

  useEffect(() => {
    if (drawerOpen && !collapseNav) closeDrawer();
  }, [collapseNav, drawerOpen, closeDrawer]);

  return (
    <Styled.Wrapper>
      <NavDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        search={search}
        setSearch={setSearchQuery}
      />
      <LargeNav
        setLoggingIn={setLoggingIn}
        setRegistering={setRegistering}
        openDrawer={openDrawer}
        search={search}
        setSearch={setSearchQuery}
        collapseNav={collapseNav}
        smallNav={smallNav}
        setSmallNav={setSmallNav}
      />
    </Styled.Wrapper>
  );
};

export default Navbar;
