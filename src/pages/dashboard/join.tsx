import React from "react";
import styled from "styled-components";
import Layout from "../../components/Reusable/Layout";
import ReusableContainer from "../../components/Reusable/ReusableContainer";
import ReusableRoomCard from "../../components/Reusable/ReusableRoomCard";
import ReusableSearch from "../../components/Reusable/ReusableSearch";
import { device } from "../../utils/responsiveness";

const content = [
  {
    title: "Studying some math",
    desc: "Studying single variable calculus, hop in to study together",
    placeholder: true,
  },
  {
    title: "C and C++",
    desc: "Starting with the basics of C and C++, hop in to study together.",
    placeholder: true,
  },
  {
    title: "Javascript",
    desc: "Starting with the basics of javascript, hop in to study together.",
    placeholder: true,
  },

  {
    title: "Algebra",
    desc: "Studying some algebra, hop in.",
    placeholder: true,
  },
  {
    title: "Javascript",
    desc: "Starting with the basics of javascript, hop in to study together.",
    placeholder: true,
  },

  {
    title: "Algebra",
    desc: "Studying some algebra, hop in.",
    placeholder: true,
  },
  {
    title: "Javascript",
    desc: "Starting with the basics of javascript, hop in to study together.",
    placeholder: true,
  },

  {
    title: "Algebra",
    desc: "Studying some algebra, hop in.",
    placeholder: true,
  },
];

function JoinRoom() {
  return (
    <Layout>
      <ReusableContainer>
        <ReusableSearch />
        <Container>
          <Text>Top Picks for you</Text>
        </Container>
        <Grid>
          {content.map((e) => {
            return (
              <ReusableRoomCard
                key={e.title}
                title={e.title}
                placeholder={e.placeholder}
                desc={e.desc}
              />
            );
          })}
        </Grid>
      </ReusableContainer>
    </Layout>
  );
}

export default JoinRoom;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
  margin-top: 40px;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Text = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
