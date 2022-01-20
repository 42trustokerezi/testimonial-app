import React from 'react';
import { InfoContainer, ImgContainer, Text, Title, Body, Container, Image, Img,} from "./Styles"
import HeroImg from "../../assets/Testimonial.png"

function Hero() {
  return (
      <Container>
        <InfoContainer>
            <Text>
                <Title>Amazing Experiences from Our Wonderful Customers</Title>
                <Body>Here is what customers and vendors are saying about us, you can share your stories with us too.</Body>
            </Text>
        </InfoContainer>
        <ImgContainer>
            <Image>
                <Img src={HeroImg}/>
            </Image>
        </ImgContainer>
      </Container>
  );
}

export default Hero;
