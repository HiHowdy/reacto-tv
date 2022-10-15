import styled, { keyframes } from "styled-components";
import colors from "../theme/colors";

export let Styled: any = {};

Styled.Wrapper = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   @media (max-width: 500px) {
      height: 18rem;
   }
`;

Styled.Title = styled.h1`
   font-size: 1.5rem;
   font-weight: 700;
   color ${colors.text};

   @media (max-width: 500px) {
      font-size: 1.3rem;
      text-align: center;
   }
`;

Styled.Showcase = styled.div`
   display: grid;
   grid-template-columns: 3rem 1fr 3rem;
   width: 100%;
   height: 100%;
   margin: 0 auto;
   overflow: hidden;
   @media (max-width: 500px) {
      grid-template-columns: 1fr 11rem 1fr;
   }
`;

Styled.ShowcaseSkeleton = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   flex-wrap: nowrap;
   padding: 0 3rem;
`;

Styled.Arrow = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   color: ${colors.text};
   font-size: 1.5rem;

   * {
      flex-shrink: 0;
   }

   :hover {
      background: rgba(0, 0, 0, 0.15);
   }
`;

Styled.ShowcaseItems = styled.div`
   display: flex;
   height: 100%;
   flex-wrap: nowrap;
   gap: 1rem;
   overflow: hidden;
   scrollbar-width: none;
   -ms-overflow-style: none;
   ::-webkit-scrollbar {
      display: none;
   }
   @media (max-width: 500px) {
      gap: 0.5rem;
   }
`;

Styled.ShowcaseItem = styled.div`
   width: 10rem;
   height: 100%;
   background: white;
   border-radius: 0.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-shrink: 0;
   justify-content: center;
   gap: 1rem;
   flex-wrap: nowrap;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   position: relative;
   &:hover {
      transform: scale(1.1);
      z-index: 10;
   }
   @media (max-width: 500px) {
      width: 100%;
   }
`;

Styled.ShowcaseItemImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   background-clip: content-box;
`;

Styled.ShowcaseItemTitle = styled.h2`
   font-size: 1rem;
   font-weight: 600;
   color: #273449;
   position: absolute;
   bottom: 0;
   left: 0;
`;

export default Styled;