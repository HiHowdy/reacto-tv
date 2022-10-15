import { Search2Icon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import Styled from '../../styles/styled/navbar';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  search: {
    query: string;
    searchActive: boolean;
    results: any;
  };
  setSearch: (_search: string) => void;
}

const NavDrawer = ({ isOpen, onClose, search, setSearch }: IProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Styled.TopLogo>
            <div>
              <span>Reacto</span>TV
            </div>
          </Styled.TopLogo>
        </DrawerHeader>
        <DrawerBody>
          <Styled.DrawerBody>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search..."
                value={search.query}
                variant="ghost-dark"
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <Styled.DrawerNav>
              <Styled.DrawerNavItem active>Home</Styled.DrawerNavItem>
              <Styled.DrawerNavItem>Movies</Styled.DrawerNavItem>
              <Styled.DrawerNavItem>TV Shows</Styled.DrawerNavItem>
              <Styled.DrawerNavItem>My List</Styled.DrawerNavItem>
            </Styled.DrawerNav>
          </Styled.DrawerBody>
        </DrawerBody>
        <DrawerFooter alignItems="center" justifyContent="center" gap={3}>
          <Button size="md">Sign In</Button>
          <Button size="md" variant="dark">
            Register
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
