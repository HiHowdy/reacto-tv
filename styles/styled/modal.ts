import styled, { keyframes } from "styled-components";
import colors from "../theme/colors";

let Styled: { [key: string]: any } = {};

Styled.Wrapper = styled.div`
   position: fixed;
   inset: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: 0.3s ease-in-out all;
   overflow: hidden;
   padding: 40px 20px 20px;
   z-index: 9999;
`;

Styled.Overlay = styled.div`
   position: fixed;
   inset: 0;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 9996;
`;

Styled.Transition = keyframes`
   0% {
      transform: scale(0);
      opacity: 0;
   }
   100% {
      transform: scale(1);
      opacity: 1;
   }
`;

Styled.Content = styled.div`
   width: 30rem;
   max-height: 40rem;
   min-height: 20rem;
   background-color: ${colors.background};
   animation: ${Styled.Transition} 0.25s ease-in-out;
   display: flex;
   gap: 1.5rem;
   flex-direction: column;
   z-index: 9999;
   padding: 2.5rem;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   position: relative;
   border-radius: 0.5rem;
   @media (max-width: 500px) {
      width: 100%;
   }
`;

Styled.CloseBtn = styled.button`
   outline: 2px solid rgba(255, 255, 255, 0.25);
   width: 25px;
   height: 25px;
   display: flex;
   place-items: center;
   border-radius: 50%;
   &:hover {
      outline: 2px solid ${colors.brand};
   }
`;

Styled.Title = styled.h2`
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
   font-size: 1.5rem;
   font-weight: 600;
   color: ${colors.text};
`;

export default Styled;