import Image from "next/image";
import React from "react";
import styled from "styled-components";

function ReusableSearch() {
  return (
    <Wrapper>
      <IconContainer>
        <Image
          src="/icons/search.svg"
          alt="Picture of the author"
          objectFit="contain"
          layout="fill"
        />
      </IconContainer>
      <InputField type="text" placeholder="Type your interests here..." />
      <span>Search</span>
    </Wrapper>
  );
}

export default ReusableSearch;

const Wrapper = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const InputField = styled.input`
  width: 100%;
  font-size: 20px;
  background: transparent;
  outline: none;
  border: none;
  color: #fcfcfc;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fcfcfc;
    opacity: 0.5; /* Firefox */
  }
`;

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
`;
