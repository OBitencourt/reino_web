import styled from "styled-components";

export const Title = styled.h2`
    color: var(--text-color);
    text-align: center;
    font-size: 42px;
    font-weight: 500;
    padding-top: 200px;
    z-index: 1;
    margin-bottom: 64px;
    background-clip: text;
    background: linear-gradient(to bottom, #ffffff 80%, #BB8FFA  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    background-clip: text;
    background: linear-gradient(to bottom, #ffffff 20%, #BB8FFA  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const CardWrapper = styled.div`
    background: linear-gradient(to bottom, #676767, #BB8FFA);
    padding: 2.5px; /* espessura da borda */
    border-radius: 20px;
    box-sizing: border-box;
`


export const CardOne = styled.div`
    text-align: start;
    background-color: var(--card);
    border-radius: 18px;
    padding: 28px 44px;
    display: flex;
    flex-direction: column;
    min-height: 810px;


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

    span {
        font-weight: bold;
        color: var(--cs);
    }
`
export const CardTwo = styled.div`
    background-color: var(--card);
    border-radius: 18px;
    padding: 28px 44px;
    display: flex;

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
    background-color: var(--card);
    border-radius: 18px;
    padding: 28px 44px;

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
    padding: 28px 44px;
    min-height: 415px;

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
        background-clip: text;
        background: linear-gradient(to bottom, #f1f1f1 20%, #999999  );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span {
        -webkit-text-fill-color: #BB8FFA !important;
        background: none !important;
        -webkit-background-clip: border-box !important;
        font-weight: bold;
        background-clip: text;
    }
`