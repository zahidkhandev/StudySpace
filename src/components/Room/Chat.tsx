import { useChannelMessage } from "@onehop/react";
import React, { useState } from "react";
import styled from "styled-components";
import { hop } from "@onehop/client";
import Image from "next/image";

function Chat({ roomId }) {
  const [chatMessages, setChatMessages] = useState<any>([]);
  const channelId = "test";

  useChannelMessage(channelId, "USER_MESSAGE", (message) => {
    setChatMessages((m) => [...m, message]);
  });

  console.log(chatMessages);

  return (
    <Wrapper>
      <Image
        src="/chat.svg"
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
      />
    </Wrapper>
    // <ul>
    //   {chatMessages.map((m) => (
    //     <li key={m.author}>
    //       <b>{m.author}</b>: {m.content}
    //     </li>
    //   ))}
    // </ul>
  );
}

export default Chat;
const Wrapper = styled.div`
  padding: 60px;
  overflow-y: auto;
  border-radius: 25px;
  height: 100%;
  /* background-color: ${(props) => props.theme.main};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column; */
  position: relative;
`;
