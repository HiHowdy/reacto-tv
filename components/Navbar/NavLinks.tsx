import { Search2Icon, ChevronRightIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Styled from "../../styles/styled/navbar";
import { auth } from "../../utils/firebase";
import colors from "../../styles/theme/colors";
import UserMenu from "./UserMenu";

interface IProps {
   isSmall?: boolean;
   collapseNav?: boolean;
   search: {
      query: string;
      searchActive: boolean;
      results: any;
   };
   setSearch: (search: string) => void;
}

const NavLinks = ({ isSmall, collapseNav, search, setSearch }: IProps) => {
   const [searching, setSearching] = useState(false);
   const [user] = useAuthState(auth);

   return (
      <Styled.TopRight>
         {searching && !collapseNav ? (
            <>
               <InputGroup>
                  <InputLeftElement pointerEvents="none">
                     <Search2Icon
                        color={isSmall ? colors.text : colors.darkText}
                     />
                  </InputLeftElement>
                  <Input
                     variant={isSmall ? "ghost-dark" : "ghost"}
                     placeholder="Search"
                     value={search.query}
                     onChange={(e) => setSearch(e.target.value)}
                  />
               </InputGroup>
               <Styled.IconButton isSmall={isSmall}>
                  <ChevronRightIcon
                     fontSize="1.5rem"
                     onClick={() => setSearching(false)}
                  />
               </Styled.IconButton>
               {user && <UserMenu isSmall={isSmall} user={user} />}
            </>
         ) : (
            <>
               {!collapseNav ? (
                  <>
                     <Styled.IconButton
                        isSmall={isSmall}
                        onClick={() => setSearching(true)}
                     >
                        <Search2Icon />
                     </Styled.IconButton>
                     <Styled.Link active>Home</Styled.Link>
                     <Styled.Link>TV Shows</Styled.Link>
                     <Styled.Link>Movies</Styled.Link>
                     {user && <Styled.Link>My List</Styled.Link>}
                     {user && <UserMenu user={user} />}
                  </>
               ) : user ? (
                  <UserMenu user={user} />
               ) : null}
            </>
         )}
      </Styled.TopRight>
   );
};

export default NavLinks;
