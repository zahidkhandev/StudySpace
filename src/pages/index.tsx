import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../components/Reusable/Layout";
import ReusableButton from "../components/Reusable/ReusableButton";
import ReusableContainer from "../components/Reusable/ReusableContainer";

const Home: NextPage = () => {
  return (
    <Layout>
      <ReusableContainer>
        <ReusableButton
          goto="/dashboard"
          title={"Click here to navigate to dashboard"}
        />
      </ReusableContainer>
      ;
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 100%;
  width: 100%;
`;
