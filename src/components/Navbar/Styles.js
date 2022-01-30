import styled from 'styled-components'

export const TopContainer = styled.div`
    width: 100vw;
    height: 4rem;
    padding: 0rem 5rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    border-bottom: 1px solid #f5f5f5;

    
    
`;

export const Img = styled.img`
    width: 10rem;
    height: 8rem;

    @media screen and (min-width: 320px) and (max-width: 720px){
        width: 6rem;
        height: 4rem;
    }

    @media screen and (min-width: 320px) and (max-width: 500px){

        width: 10rem;
        height: 8rem;

        margin: 0 auto;
        
    }
`;

export const NavItems = styled.div`
`;

export const List = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    color: #242120;
    margin-right: 6rem;

    @media screen and (min-width: 320px) and (max-width: 500px){
        display: none;
        
    }
    
`

export const ListItem = styled.li`
    margin: 20px;
    font-size: 13px;
    font-weight: 400;
    @media screen and (min-width: 320px) and (max-width: 720px){
        font-size: 10px;
    }
`

export const SignUp = styled.div`
    width: 5rem;
    height: 2rem;
    background-color: #FF5C00;
    border-radius: 3px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 320px) and (max-width: 720px){
        width: 3rem;
        height: 2rem;
    }
`
export const BottomContainer = styled.div`
    width: 100%;
    height: 3rem;
    padding: 0px 50px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    top: 0;
    display: flex;
    margin: 0 auto;
    justify-content: center;

    @media screen and (min-width: 320px) and (max-width: 500px){
        display: none;
        
    }
    
`

export const ListOne = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    color: #242120;
    width: 100%;
`

