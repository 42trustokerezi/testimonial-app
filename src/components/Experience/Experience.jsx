import React from 'react';
import { Container, InfoContainer, Text, Title, Body, ImgContainer, Image, Img, Button, Share } from "./Styles"
import ExpImg from "../../assets/experience.svg"

function Experience() {
  return (
    <Container>
        <ImgContainer>
            <Image>
                <Img src={ExpImg}/>
            </Image>
        </ImgContainer>
        <InfoContainer>
            <Text>
                <Title>Tolu's Experience</Title>
                <Button>CUSTOMER</Button>
                <Body>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</Body>
                <Share>SHARE YOUR OWN STORY!</Share>
            </Text>
        </InfoContainer>
      </Container>
  );
}

export default Experience;
