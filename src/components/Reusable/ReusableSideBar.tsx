import React from "react";
import styled from "styled-components";
import Image from "next/image";

function ReusableSideBar() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image
            src="/icons/logo.svg"
            alt="Picture of the author"
            objectFit="contain"
            layout="fill"
          />
        </ImageContainer>

        <MenuContainer>
          <IconContainer>
            <Image
              src="/icons/home.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </IconContainer>
          <IconContainer>
            <Image
              src="/icons/friends.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </IconContainer>
          <IconContainer>
            <Image
              src="/icons/communities.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </IconContainer>
          <IconContainer>
            <Image
              src="/icons/settings.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </IconContainer>
        </MenuContainer>
      </Container>
    </Wrapper>
  );
}

export default ReusableSideBar;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.second};
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 90%;
  width: 20%;
  max-width: 70px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65%;
`;

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
