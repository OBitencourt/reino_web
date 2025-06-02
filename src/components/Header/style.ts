import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 300px;

  @media (max-width: 1500px) {
    padding: 0;
    width: 90%;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 20%;
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
  font-size: 1.3rem;
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
  padding: 14px 44px;
  border-radius: 30px;
  font-family: var(--font-dm-sans);
  font-size: 1.2rem;
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
  padding: 8px;
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
    padding: 12px;

  }
`