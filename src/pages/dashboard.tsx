import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Reusable/Layout";
import ReusableButton from "../components/Reusable/ReusableButton";
import ReusableContainer from "../components/Reusable/ReusableContainer";
import ReusableSideBar from "../components/Reusable/ReusableSideBar";
import { device } from "../utils/responsiveness";

function Dashboard() {
  return (
    <Layout>
      <MainContainer>
        <Container>
          <ImageContainer>
            <Image
              src="/icons/joinroom.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </ImageContainer>
          <ReusableButton title={"Join a room"} goto="/dashboard/join" />
        </Container>
        <Container>
          <ImageContainer>
            <Image
              src="/icons/createroom.svg"
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
            />
          </ImageContainer>
          <ReusableButton title={"Create a room"} goto="/" />
        </Container>
      </MainContainer>
    </Layout>
  );
}

export default Dashboard;

const Container = styled.div`
  padding: 40px 40px;
  border-radius: 25px;
  height: 50%;
  width: 25%;
  background-color: ${(props) => props.theme.main};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  @media ${device.tablet} {
    padding: 20px 20px;
    width: 80%;
  }
`;

const MainContainer = styled.div`
  overflow-y: auto;
  border-radius: 25px;
  gap: 20px;
  height: 100%;
  background-color: ${(props) => props.theme.main};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media ${device.tablet} {
    padding: 70px 10% 10%;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
`;
