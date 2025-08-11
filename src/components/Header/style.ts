import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 50px 300px;
  width: 100%;

  @media (max-width: 1500px) {
    padding: 16px;
    width: 90%;
    margin-bottom: 116px;

    img {
      width: 50px;
      height: auto;
    }
  }

  @media (max-width: 430px) {
    width: 90%;
    margin-top: 16px;
    margin-bottom: 0;

    img {
      width: 50px;
      height: auto;
    }
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 50%;
  gap: 54px;


  @media (max-width: 1500px) {
    display: none;
  }
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-text);
  transition: all 200ms ease-in-out;
  font-family: var(--font-dm-sans);
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;


  &:hover {
    color: #CCCCCC;

  }
`

export const GradientButtonWrapper = styled.div`
  background: linear-gradient(to right, #CCCCCC, #832EFF, #CCCCCC);
  padding: 2px; /* Espessura da borda */
  border-radius: 32px;
  display: inline-block;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const SpecialButton = styled.button`
  background: #121212; /* Cor interna do botão */
  color: #CCCCCC;
  border: none;
  padding: 12px 40px;
  border-radius: 30px;
  font-family: var(--font-dm-sans);
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const IconButton = styled.button`
  padding: 2px 10px;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color:rgba(153, 153, 153, 0.27);

  }
  @media (max-width: 1500px) {
    display: none;
  }
`


// MOBILE

export const MenuButton = styled.button`

  display: none;
  background-color: transparent;
  border: 1.5px solid #CCCCCC;
  transition: all 200ms ease-in-out;
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 1500px) {
    display: block;
    padding: 8px;

    img {
      width: 35px;
      height: auto;
    }
  }
`

interface MenuMobileProps {
  $isOpen: boolean;
}

export const MenuMobile = styled.div.attrs(() => ({}))<MenuMobileProps>`
  width: 84%;
  height: 630px;
  border-radius: 20px;
  padding: 48px;
  position: absolute;
  top: 20px;
  left: 8%;
  background-color: #0f0f0f;
  z-index: 1;

  box-shadow:
    0px 0px 0px rgba(3, 7, 18, 0.01),
    0px 0px 0px rgba(3, 7, 18, 0.02),
    0px 0px 0px rgba(3, 7, 18, 0.02),
    0px 0px 0px rgba(3, 7, 18, 0.03),
    0px 0px 1px rgba(3, 7, 18, 0.04),
    0px 0px 1px rgba(3, 7, 18, 0.05),
    0px 0px 1px rgba(3, 7, 18, 0.06),
    0px 0px 2px rgba(3, 7, 18, 0.06),
    0px 0px 2px rgba(3, 7, 18, 0.07),
    0px 0px 3px rgba(3, 7, 18, 0.08);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.9)')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: all 0.3s ease-in-out;

  animation: ${({ $isOpen }) => ($isOpen ? 'enter 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)' : 'none')};

  @keyframes enter {
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const MenuNavButton = styled.button`
  width: 100%;
  padding: 16px;
  color: var(--text-color);
  transition: all 200ms ease-in-out;
  background-color: transparent;
  border-radius: 12px;


  &:active {
    filter: opacity(0.5);
    background-color: #bbbbbb47;
  }
  



`
