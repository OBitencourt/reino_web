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
    background: linear-gradient(to bottom, #ffffff 70%, #BB8FFA  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 430px) {
        font-size: 32px;
    }
`

// WRAPPERS

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
    }
`

export const CardWrapper = styled.div`
    background: linear-gradient(to bottom, #bbbbbb, #832EFF, #bbbbbb);
    padding: 2px; /* espessura da borda */
    border-radius: 20px;
    width: 30%;
    box-sizing: border-box;
    
    @media (max-width: 430px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 32px;

        
    }
`

export const CircleWrapper = styled.div`
    background: linear-gradient(to bottom, #676767, #FFFFFF, #676767);
    padding: 2px; /* espessura da borda */
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 28px;
`

export const ChipWrapper = styled.div`
    background: linear-gradient(to bottom, #676767, #FFFFFF, #676767);
    padding: 1.5px; /* espessura da borda */
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 28px;
    width: 100%;
`

export const ImageWrapper = styled.div`

    img {
        height: auto;
    }
    
    @media (max-width: 430px) {
        

        img {
            width: 100%;
            height: 2500px;
            position: absolute;
        }
    }

`

// ELEMENTS
export const Card = styled.div`
    width: 100%;
    height: 700px;
    background-color: var(--card);
    border-radius: 18px;
    box-shadow: inset 0px 0px 82px var(--cs);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 104px;

    @media (max-width: 430px) {
        width: 100%;
        padding: 32px 36px 44px;
        height: auto;
    }
`

export const Circle = styled.div`
    background-color: var(--background);
    padding: 24px;
    border-radius: 50px;

    @media (max-width: 430px) {
        img {
            width: 40px;
            height: auto;
        }
    }
`

export const Chip = styled.div`
    color: #FFFFFF;
    font-size: 1.4rem;
    background-color: var(--background);
    color: #ffffff;
    border-radius: 50px;
    padding: 12px 24px;
    text-align: center;

    @media (max-width: 430px) {
        width: 100%;
        font-size: 1.2rem;
    }
`

export const Info = styled.p`
    color: #CCCCCC;
    font-size: 1.3rem;
    
    @media (max-width: 430px) {
        width: 100%;
        font-size: 1.2rem;
        color: #f1f1f1;
    }
`