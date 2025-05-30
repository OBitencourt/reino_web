import styled from "styled-components";

export const Title = styled.h2`
    color: var(--text-color);
    text-align: center;
    font-size: 42px;
    font-weight: 500;
    padding-top: 200px;
    z-index: 1;
    margin-bottom: 64px;
`

export const Subtitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
`

export const CardOne = styled.div`
    width: 28%;
    text-align: start;
    background-color: var(--card);
    border: 2.5px solid var(--border);
    border-radius: 18px;
    padding: 28px 44px;
    display: flex;
    flex-direction: column;


    h3 {
        text-align: center;
        margin-bottom: 28px;
        margin-top: 20px;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 42px;
    }
`
export const CardTwo = styled.div`
    margin-bottom: 40px;
    background-color: var(--card);
    border: 2.5px solid var(--border);
    border-radius: 18px;
    padding: 28px 44px;
    display: flex;
    width: 95%;

    h3 {
        margin-bottom: 28px;
        margin-top: 20px;
        font-weight: 600;
    }

    li {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    p {
        font-size: 1.2rem;
    }
`
export const CardThree = styled.div`
    margin-right: 40px;
    background-color: var(--card);
    border: 2.5px solid var(--border);
    border-radius: 18px;
    padding: 28px 44px;
    width: 45%;

    h3 {
        margin-bottom: 28px;
        margin-top: 20px;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
    }

    span {
        margin-left: 8px;
        font-size: 1.9rem;
    }

`
export const CardFour = styled.div`
    background-color: var(--card);
    border-radius: 18px;
    border: 2.5px solid var(--border);
    padding: 28px 44px;
    width: 45%;

    h3 {
        margin-bottom: 28px;
        margin-top: 20px;
        font-weight: 600;
    }

    p {
        font-size: 1.8rem;
        color: var(--text-color);
        font-family: var(--font-dm-sans);
        font-weight: 200;
        font-style: italic;
    }

    span {
        font-weight: bold;
        color: var(--cs);
    }
`