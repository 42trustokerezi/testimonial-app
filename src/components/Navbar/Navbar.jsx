import React from 'react';
import {TopContainer, Img, List, ListItem, SignUp, BottomContainer, ListOne} from './Styles'

import Logo from '../../assets/logo2.svg'

function Navbar() {
  return (
      <>
        <TopContainer>
            <Img src={Logo}/>
            <List>
                <ListItem>ABOUT US</ListItem>
                <ListItem>STORIES</ListItem>
                <ListItem>CONTACT</ListItem>
                <ListItem>LOGIN</ListItem>
                <ListItem>
                    <SignUp>SIGN UP</SignUp>
                </ListItem>
            </List>
        </TopContainer>

        <BottomContainer>
            <ListOne>
                <ListItem>MARKETPLACE</ListItem>
                <ListItem>WHOLESALE CENTER</ListItem>
                <ListItem>SELLER CENTER</ListItem>
                <ListItem>SERVICES</ListItem>
                <ListItem>INTERNSHIPS</ListItem>
                <ListItem>EVENTS</ListItem>
            </ListOne>
        </BottomContainer>
    </>
  )
}

export default Navbar;
