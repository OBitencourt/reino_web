import styled from "styled-components";


export const Title = styled.h1`
    color: var(--text-color);
    margin: 0 auto;
    font-size: 8rem;
    font-family: var(--font-almarai);
    line-height: 90%;
    background: linear-gradient(to right, #ffffff, #BB8FFA 90% );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
        font-size: 10rem;
        font-weight: 900;
    }
`

export const Subtitle = styled.h2`
    font-family: var(--font-manrope);
    font-size: 2rem;
    font-weight: 500;
    color: var(--cs);
    margin-top: 42px;
`

export const Divider = styled.div`
    width: 70%;
    height: 1.5px;
    background: linear-gradient(to right, #090909, #832EFF 50% , #090909 );
    margin-top: 42px;
    margin-bottom: 42px;
`

export const PrimaryButton = styled.button`
    padding: 20px 50px;
    border-radius: 32px;
    border: 2.5px solid var(--cs);
    color: var(--cs);
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: var(--cp);
    box-shadow: inset 0px 0px 20px var(--cs);
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0px 0px 36px var(--cs);

    }
`

export const SecondaryButton = styled.button`
    border-radius: 32px;
    color: #CCCCCC;
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);

    }
`

