import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { device } from "../../utils/responsiveness";

function ReusableButton({ title, goto }) {
  const test = goto;
  return (
    <Link href={test}>
      <Wrapper>{title}</Wrapper>
    </Link>
  );
}

export default ReusableButton;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.second};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.text};
  padding: 10px 30px;
  font-weight: 400;
  font-size: 15px;
  border-radius: 25px;
  transition: ${(props) => props.theme.transition};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media ${device.tablet} {
    font-size: 12px;
    padding: 10px 15px;
  }
`;
