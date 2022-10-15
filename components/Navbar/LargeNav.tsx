import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, useMediaQuery } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdLocalMovies } from 'react-icons/md';
import Styled from '../../styles/styled/navbar';
import { auth } from '../../utils/firebase';
import NavLinks from './NavLinks';
import SmallNav from './SmallNav';

interface IProps {
  search: {
    query: string;
    searchActive: boolean;
    results: any;
  };
  setLoggingIn: (_value: boolean) => void;
  setRegistering: (_value: boolean) => void;
  openDrawer: () => void;
  setSearch: (_search: string) => void;
  setSmallNav: (_value: boolean) => void;
  smallNav?: boolean;
  collapseNav?: boolean;
}

const LargeNav = ({
  search,
  setSearch,
  openDrawer,
  setLoggingIn,
  setRegistering,
  smallNav,
  collapseNav,
}: IProps) => {
  const [user] = useAuthState(auth);
  const [isMobileSize] = useMediaQuery('(max-width: 500px)');

  const btnSize = isMobileSize ? 'md' : 'lg';

  return (
    <>
      {smallNav && (
        <SmallNav
          setLoggingIn={setLoggingIn}
          setRegistering={setRegistering}
          openDrawer={openDrawer}
          search={search}
          setSearch={setSearch}
          collapseNav={collapseNav}
        />
      )}
      <Styled.Top>
        {collapseNav && (
          <Styled.TopSearch>
            <Styled.IconButton onClick={openDrawer}>
              <HamburgerIcon fontSize="2rem" />
            </Styled.IconButton>
          </Styled.TopSearch>
        )}
        <i></i>
        <NavLinks
          collapseNav={collapseNav}
          search={search}
          setSearch={setSearch}
          isSmall={false}
        />
      </Styled.Top>
      <Styled.Content>
        <Styled.ContentTitle>ReactoTV</Styled.ContentTitle>
        <Styled.ContentText>
          All of your favorite Movies & TV Shows listed in one place.
        </Styled.ContentText>
        {!user ? (
          <Styled.ContentButtons>
            <Button
              onClick={() => setLoggingIn(true)}
              size={btnSize}
              variant="light"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setRegistering(true)}
              size={btnSize}
              variant="dark"
            >
              Register
            </Button>
          </Styled.ContentButtons>
        ) : (
          <Styled.ContentButtons>
            <Button size={btnSize} variant="dark">
              View your list
            </Button>
          </Styled.ContentButtons>
        )}
      </Styled.Content>
      <Styled.Icon collapsed={collapseNav}>
        <MdLocalMovies fontSize={collapseNav ? '20rem' : '32rem'} />
      </Styled.Icon>
    </>
  );
};

export default LargeNav;
