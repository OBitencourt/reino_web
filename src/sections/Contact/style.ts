
import styled from "styled-components";

export const ImageWrapper = styled.div`

    @media (max-width: 430px) {
        img {
            position: absolute;
            transform: translateY(160%);
        }
        
    }
`

export const ContactDiv = styled.div`
    background-color:rgba(15, 15, 15, 0.45);
    border: 1.5px solid var(--border);
    border-radius: 16px;
    padding: 42px 46px;
    width: 45%;
    backdrop-filter: blur( 32px );
    -webkit-backdrop-filter: blur( 32px );
    margin-bottom: 32px;

    @media (max-width: 430px) {
        width: 90%;
        padding: 38px 32px;
        margin-bottom: 28px;
    }
`

export const Title = styled.h2`
    color: var(--text-color);
    text-align: center;
    font-size: 42px;
    font-weight: 500;
    z-index: 1;
    margin-bottom: 64px;
    background-clip: text;
    background: linear-gradient(to bottom, #ffffff 30%, #BB8FFA  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 430px) {
        margin-bottom: 32px;
        font-size: 32px;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 16px;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    font-size: 1.2rem;
    margin-bottom: 20px;
    background-color:rgba(51, 51, 51, 0.5);
    color: #FFFFFF;
    outline: none;
    
    &::placeholder {
        color: #ffffff;
    }
`


export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 16px;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    height: 300px;
    resize: none;
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #FFFFFF;
    outline: none;
    background-color:rgba(51, 51, 51, 0.5);
    border-radius: 12px;

    &::placeholder {
        color: #ffffff;
    }
`

export const StyledButton = styled.button`
    padding: 12px 40px;
    border-radius: 12px;
    border: 2.5px solid var(--cs);
    color: var(--cs);
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    gap: 12px;
    background-color: var(--cp);
    box-shadow: inset 0px 0px 20px var(--cs);
    transition: all 200ms ease-in-out;
    cursor: pointer;


    &:hover {
        box-shadow: inset 0px 0px 36px var(--cs);

    }
`

export const ChipsWrappers = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 430px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`

export const Chip = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border: 1.5px solid var(--border);
    background-color: transparent;
    border-radius: 50px;
    padding: 12px 32px;

    p {
        color: var(--text-color);
        font-size: 1.2rem;
    }

    @media (max-width: 430px) {
        width: 100%;
    }
`