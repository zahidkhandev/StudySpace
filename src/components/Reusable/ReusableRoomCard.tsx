import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function ReusableRoomCard({ title, desc, placeholder }) {
  return (
    <Link href={"/room/test"}>
      <Wrapper>
        {placeholder == true ? (
          <span
            style={{
              textAlign: "end",
              position: "absolute",
              top: "30px",
              right: "20px",
            }}
          >
            This placeholder room wont work
          </span>
        ) : null}

        <Live>
          <IconContainer>
            <Image
              src="/icons/circle.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </IconContainer>
          <span>LIVE</span>
        </Live>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Wrapper>
    </Link>
  );
}

export default ReusableRoomCard;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.third};
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 25px;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;

  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  height: 13px;
  width: 13px;
  position: relative;
`;

const Live = styled.div`
  background-color: ${(props) => props.theme.fourth};
  width: 20%;
  max-width: 100px;
  padding: 5px 10px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  border-radius: 25px;
  font-weight: 500;

  .dot {
    font-size: 30px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
`;
