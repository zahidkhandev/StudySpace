import React from "react";
import styled from "styled-components";

function ReusableContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ReusableContainer;

const Wrapper = styled.div`
  padding: 40px;
  overflow-y: auto;
  border-radius: 25px;
  height: 100%;
  background-color: ${(props) => props.theme.main};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
`;
