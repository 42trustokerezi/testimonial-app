import styled from "styled-components"

export const Container = styled.span`
    display: flex;
    height: 90vh;
    overflow: hidden;
    //background-color: red;

    @media screen and (min-width: 320px) and (max-width: 720px){
        //overflow: hidden;
        flex-direction: column;
    }
   

   
`

export const InfoContainer  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 320px)and (max-width: 720px) {
       
    }
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    bottom: 0;
    //position: relative;

    @media screen and (min-width: 320px) and (max-width: 720px){
        
        margin-top: 8rem;
        justify-content: center;
    }
`



export const Text = styled.div`
    width: 26rem;
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;

    @media screen and (max-width: 320px)and (max-width: 720px) {
        font-size: 40px;
    }
`;

export const Body = styled.p`
    font-weight: 200;
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