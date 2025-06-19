import styled from "styled-components";

export const Box = styled.div<{ open: boolean }>`
    width: 500px;
    background-color: #1E1E1E;
    height: 84px;
    border: 1px solid gray;
    position: absolute;
    bottom: 5%;
    right: -15%;
    text-align: center;
    border-radius: 8px;
    padding: 12px;
    opacity: ${({open}) => (open ? '100%' : '0%')};
    transition: all 300ms ease-in-out;

    h6 {
        font-size: 1.4rem;
        font-weight: 600;
        
    }

    span {
        color: var(--dark-text);
        font-weight: 600;
        font-size: 1.2rem;
    }
`