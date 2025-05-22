import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0px 300px;
`

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    width: 20%;
    gap: 54px;

`

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-text);
    transition: all 200ms ease-in-out;
    font-family: var(--font-dm-sans);
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;


    &:hover {
        color: #CCCCCC;

    }
`

export const SpecialButton = styled.button`
    padding: 16px 46px;
    border: 2px solid #CCCCCC;
    font-family: var(--font-dm-sans);
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 32px;
    color: #CCCCCC;
`