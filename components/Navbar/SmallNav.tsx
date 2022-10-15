import { HamburgerIcon } from "@chakra-ui/icons";
import NavLinks from "./NavLinks";
import Styled from "../../styles/styled/navbar";

interface IProps {
   search: {
      query: string;
      searchActive: boolean;
      results: any;
   };
   setLoggingIn: (value: boolean) => void;
   setRegistering: (value: boolean) => void;
   openDrawer: () => void;
   setSearch: (search: string) => void;
   collapseNav?: boolean;
}

const SmallNav = ({ search, setSearch, openDrawer, collapseNav }: IProps) => {
   return (
      <Styled.Wrapper isSmall>
         <Styled.Top>
            <Styled.TopLogo>
               {collapseNav && (
                  <Styled.IconButton isSmall onClick={openDrawer}>
                     <HamburgerIcon fontSize="1.5rem" />
                  </Styled.IconButton>
               )}
               <div>
                  <span>Reacto</span>TV
               </div>
            </Styled.TopLogo>
            <NavLinks
               isSmall
               collapseNav={collapseNav}
               search={search}
               setSearch={setSearch}
            />
         </Styled.Top>
      </Styled.Wrapper>
   );
};

export default SmallNav;
