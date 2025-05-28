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

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Card = styled.div`
    width: 30%;
    height: 700px;
    background-color: var(--card);
    border-radius: 18px;
    border: 2.5px solid var(--border);
    box-shadow: inset 0px 0px 82px var(--cs);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 104px;
`

export const Circle = styled.div`
    background-color: var(--background);
    padding: 24px;
    border-radius: 50px;
    border: 3px solid var(--border);
    margin-bottom: 28px;

`

export const Chip = styled.div`
    color: #FFFFFF;
    font-size: 1.4rem;
    background-color: var(--background);
    color: #ffffff;
    border: 3px solid var(--border);
    border-radius: 50px;
    width: 100%;
    padding: 12px 24px;
    text-align: center;
    margin-bottom: 28px;
`

export const Info = styled.p`
    color: #CCCCCC;
    font-size: 1.3rem;


`