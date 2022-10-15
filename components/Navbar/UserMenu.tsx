import {
   Menu,
   MenuButton,
   MenuDivider,
   MenuGroup,
   MenuItem,
   MenuList,
} from "@chakra-ui/react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import useStore from "../../store";
import { logout } from "../../utils/firebase/collections/user";
import Styled from "../../styles/styled/navbar";

interface IProps {
   user?: any;
   isSmall?: boolean;
}

const UserMenu = ({ user }: IProps) => {
   const { setUser } = useStore((state) => state);

   const handleLogout = () => {
      setUser(undefined);
      logout();
   };

   return (
      <Menu
         autoSelect
         isLazy
         boundary="clippingParents"
         flip
         strategy="absolute"
      >
         <MenuButton as={Styled.Avatar} />
         <MenuList>
            <MenuGroup title={user?.displayName ?? "Loading..."}>
               <MenuItem icon={<IoSettingsSharp />}>Account Settings</MenuItem>
               <MenuItem icon={<MdLocalMovies />}>My List</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<RiLogoutBoxFill />} onClick={handleLogout}>
               Sign Out
            </MenuItem>
         </MenuList>
      </Menu>
   );
};

export default UserMenu;
