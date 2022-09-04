import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/Reusable/Layout";
import ReusableContainer from "../../components/Reusable/ReusableContainer";
import Chat from "../../components/Room/Chat";

const ws = "http://localhost:8080";

function Room({ slug }) {
  const roomId = slug;
  return (
    <Layout>
      <ReusableContainer>
        <Wrapper>
          <VideoStream>{slug}</VideoStream>
          <Chat roomId={roomId} />
        </Wrapper>
      </ReusableContainer>
    </Layout>
  );
}

export default Room;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  return {
    props: {
      slug: slug || null,
    },
  };
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 60%;
`;

const VideoStream = styled.div``;
