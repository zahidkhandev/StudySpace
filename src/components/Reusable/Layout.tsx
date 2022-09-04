import React from "react";
import styled from "styled-components";
import ReusableSideBar from "./ReusableSideBar";
import ReusableTopBar from "./ReusableTopBar";

function Layout({ children }) {
  return (
    <Wrapper>
      <Conatiner>
        <ReusableSideBar />
        <Content>
          <ReusableTopBar />

          {children}
        </Content>
      </Conatiner>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Conatiner = styled.div`
  display: flex;
  gap: 40px;
  background-color: ${(props) => props.theme.main};
  height: 100%;
  padding: 0 20px;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  height: 90%;
  margin: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;
