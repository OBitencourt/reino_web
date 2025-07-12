import styled from "styled-components";


export const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1500px) {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: var(--text-color);
    margin: 0 auto;
    font-size: 6rem;
    font-family: var(--font-almarai);
    line-height: 90%;
    background: linear-gradient(to right, #ffffff, #BB8FFA 90% );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
        font-size: 8rem;
        font-weight: 900;
    }

    @media (max-width: 1500px) {
        
        font-size: 5rem;
        text-align: center;
        line-height: 95%;
        

        span {
            font-size: 7rem;
            font-weight: 900;
        }
    }

    @media (max-width: 430px) {
        
        font-size: 3rem;
        text-align: center;
        line-height: 120%;
        width: 90%;
        background: linear-gradient(to bottom, #ffffff, #BB8FFA 90% );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        

        span {
            font-size: 6rem;
            font-weight: 900;
        }
    }
`

export const Subtitle = styled.h2`
    text-align: center;
    font-family: var(--font-manrope);
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--cs);
    margin-top: 42px;

    @media (max-width: 430px) {
        font-size: 1.1rem;
        width: 70%;
        margin-top: 12px;
    }
`

export const Divider = styled.div`
    display: flex;
    align-self: center;
    width: 50%;
    height: 1.5px;
    background: linear-gradient(to right, #090909, #832EFF 50% , #090909 );
    margin-top: 42px;
    margin-bottom: 42px;

    @media (max-width: 430px) {
        margin-top: 24px;
        margin-bottom: 24px;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 56px;


    @media (max-width: 430px) {
        padding: 12px;
        flex-direction: column;
        gap: 32px;
    }
`


export const PrimaryButton = styled.button`
    padding: 24px 54px;
    border-radius: 18px;
    border: 2px solid #A161FF;
    color: #f1f1f1;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cp);
    box-shadow: inset 0px 0px 12px 4px #451C99;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0px 0px 32px 8px #451C99;
    }

    &:active {
        transform: scale(0.97);
    }

    @media (max-width: 430px) {
        padding: 20px 50px;
        width: 100%;
        font-size: 1.3rem;
        border-radius: 3rem / 3rem;
    }
`

export const SecondaryButton = styled.button`
    padding: 24px 48px;
    border-radius: 18px;
    color: var(--cp);
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    border: 2px solid var(--cp);
    
    &:active {
        transform: scale(0.97);
    }
    
    @media (max-width: 430px) {
        padding: 20px 50px;
        width: 100%;
        font-size: 1.3rem;
    }
`

// Bricks



export const FirstBricksBlur = styled.div`
    width: 400px;
    height: 400px;
    background-color: var(--cp);
    border-radius: 100%;
    filter: blur(150px);
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: -1;

    @media (max-width: 430px) {
        bottom: -100px;
        left: -100px;
        width: 200px;
        height: 200px;
        filter: blur(50px);
    }
`

export const SecondBricksBlur = styled.div`
    width: 400px;
    height: 400px;
    background-color: var(--cp);
    border-radius: 100%;
    filter: blur(150px);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;

    @media (max-width: 430px) {
        bottom: -100px;
        right: -100px;
        width: 200px;
        height: 200px;
        filter: blur(50px);
    }
`

// MOBILE ESSENTIALLY
