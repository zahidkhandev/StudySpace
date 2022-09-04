import React from "react";
import styled from "styled-components";
import Image from "next/image";

function ReusableTopBar() {
  return (
    <Wrapper>
      <IconContainer>
        <Image
          src="/icons/notifications.svg"
          alt="Picture of the author"
          objectFit="contain"
          layout="fill"
        />
      </IconContainer>
      <ImageContainer>
        <Image
          src="/icons/user.svg"
          alt="Picture of the author"
          objectFit="cover"
          layout="fill"
        />
      </ImageContainer>
    </Wrapper>
  );
}

export default ReusableTopBar;

const Wrapper = styled.div`
  border-radius: 25px;
  align-self: flex-end;
  margin-bottom: 10px;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  background-color: ${(props) => props.theme.second};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const IconContainer = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
