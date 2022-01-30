import styled from 'styled-components';

export const Container = styled.span`
    display: flex;
    min-height: 90vh;
    background-color: #222222;
    //background-color: red;
`

export const InfoContainer  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    bottom: 0;
    position: relative;
`

export const Text = styled.div`
    width: 26rem;
    color: white;
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const Body = styled.p`
    font-size: 18px;
    font-weight: 200;
    line-height: 27px;
`

export const Image = styled.div`
    position: absolute;
    bottom: 0px;
`

export const Img = styled.img`
   @media screen and (min-width: 320px) and (max-width: 720px){
        width: 20rem;
        height: 20rem;
    }
`

export const Button = styled.div`
    width: 6rem;
    height: 2rem;
    border: 0.5px  solid white;
    border-radius: 3px;
    font-size: 13px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const Share  = styled.h5`
    font-size: 16px;
    font-weight: 500;
    margin-top: 2.5rem;
`