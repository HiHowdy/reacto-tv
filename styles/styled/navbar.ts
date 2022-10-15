import { lighten } from "@wessberg/color";
import styled, { keyframes } from "styled-components";
import colors from "../theme/colors";

interface INavbarProps {
   isSmall?: boolean;
   collapsed?: boolean;
}

interface NavLinkProps {
   active: boolean;
}

let Styled: any = {};

const COLLAPSE_WIDTH = 768;

Styled.Wrapper = styled.div<INavbarProps>`
   width: 100%;
   height: ${(props) => (props.isSmall ? "4rem" : "27rem")};
   display: flex;
   align-items: ${(props) => (props.isSmall ? "center" : "start")};
   background: ${(props) =>
      props.isSmall ? colors.backgroundOpacity : colors.brand};
   backdrop-filter: ${(props) => (props.isSmall ? "blur(10px)" : "none")};
   color: ${(props) => (props.isSmall ? colors.text : colors.darkText)};
   position: ${(props) => (props.isSmall ? "fixed" : "relative")};
   top: 0;
   left: 0;
   overflow: ${(props) => (props.isSmall ? "visible" : "hidden")};
   z-index: 20;
   a {
      color: ${(props) => (props.isSmall ? colors.text : colors.darkText)};
   }
   @media (max-width: 500px) {
      height: ${(props) => (props.isSmall ? "4rem" : "20rem")};
   }
`;

Styled.Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 4rem;
   padding: 2.2rem;
`;

Styled.TopLogo = styled.div`
   display: flex;
   gap: 1rem;
   font-size: 1.8rem;
   font-weight: 700;
   cursor: pointer;
   align-items: center;

   span {
      color: ${colors.brand};
   }
`;

Styled.TopSearch = styled.div`
   display: flex;
   align-items: center;
   height: 4rem;
   gap: 1rem;
   z-index: 3;
`;

Styled.TopRight = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   z-index: 1;
`;

Styled.Link = styled.a<NavLinkProps>`
   text-decoration: none;
   font-size: 1rem;
   font-weight: ${(props) => (props.active ? "600" : "400")};
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   flex-shrink: 0;
`;

Styled.Image = styled.img`
   width: 100%;
   height: 100%;
   position: absolute;
   inset: 0 auto auto 0;
   object-fit: cover;
   object-position: center;
   opacity: 0.15;
   pointer-events: none;
`;

Styled.Avatar = styled.div<INavbarProps>`
   width: 2.2rem;
   height: 2.2rem;
   border-radius: 50%;
   object-fit: cover;
   background-color: ${(props) =>
      props.isSmall ? colors.brand : colors.background};
   flex-shrink: 0;
   cursor: pointer;
`;

Styled.Content = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 1.1;
   position: absolute;
   top: 8.5rem;
   left: 10rem;
   width: 25rem;
   align-items: start;
   z-index: 2;
   @media (max-width: ${COLLAPSE_WIDTH}px) {
      align-items: center;
      justify-content: center;
      inset: auto auto auto auto;
      width: 100%;
      height: 100%;
      text-align: center;
   }
`;

Styled.IconButton = styled.button<INavbarProps>`
   background-color: transparent;
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.5rem;
   border-radius: 0.2rem;
   border: 1px solid rgba(0, 0, 0, 0);
   transition: border 0.15s ease-in-out;
   :hover {
      border: 1px solid
         ${(props) =>
            props.isSmall ? "rgba(255, 255, 255, 0.15)" : "rgba(0,0,0,0.15)"};
   }
`;

Styled.ContentTitle = styled.p`
   display: flex;
   font-size: 3.5rem;
   font-weight: 700;
   @media (max-width: ${COLLAPSE_WIDTH}px) {
      font-size: 3rem;
   }
   @media (max-width: 500px) {
      font-size: 2.5rem;
   }
`;

Styled.ContentText = styled.p`
   font-size: 1.2rem;
   font-weight: 500;
   @media (max-width: ${COLLAPSE_WIDTH}px) {
      font-size: 1rem;
      width: 18rem;
   }
   @media (max-width: 500px) {
      font-size: 0.85rem;
   }
`;

Styled.ContentButtons = styled.div`
   display: flex;
   gap: 1rem;
   margin-top: 1rem;
`;

Styled.Icon = styled.div<INavbarProps>`
   position: absolute;
   inset: ${(props) =>
      props.collapsed ? "auto -3rem -6rem auto" : "auto -3rem -10rem auto"};
   ${(props) => props.collapsed && "margin: auto 0;"}
   transform: rotate(-25deg);
   // pointer-events: none;
   opacity: 0.18;
   border-radius: 2rem;
   overflow: hidden;
   // background: red;
   padding: 0 !important;
`;

interface IContentButtonProps {
   light?: boolean;
}

Styled.ContentButton = styled.button<IContentButtonProps>`
   padding: 1rem 2rem;
   border-radius: 0.5rem;
   border: none;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   background-color: ${(props) =>
      props.light ? "rgba(245, 245, 245, 0.55)" : "#273449"};
   ${(props) => props.light && "backdrop-filter: blur(4.5px);"}
   color: ${(props) => (props.light ? "#273449" : colors.text)};
   &:hover {
      background-color: ${(props) =>
         props.light
            ? lighten("rgba(245, 245, 245, 0.55)", 20.5)
            : lighten("#273449", 5.5)};
      backdrop-filter: blur(0);
   }
`;

Styled.DrawerBody = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   overflow-y: auto;
   gap: 2rem;
`;

Styled.DrawerNav = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
`;

Styled.DrawerNavItem = styled.a<NavLinkProps>`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 1rem 2rem;
   font-weight: ${(props) => (props.active ? "600" : "400")};
   background: ${(props) => (props.active ? "rgba(255,255,255,0.05)" : "none")};
   cursor: pointer;
   :hover {
      background: ${(props) =>
         props.active ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)"};
   }
`;

export default Styled;
