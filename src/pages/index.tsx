import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Home: NextPage = () => {
  return <Wrapper>HEIHEIHEI</Wrapper>;
};

export default Home;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 100%;
  width: 100%;
`;
