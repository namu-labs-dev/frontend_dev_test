import React from "react";
import MessageItem from "./MessageItem";

const MessageList: React.FC = () => {
  const messages = [
    {
      id: 1,
      name: "ETH",
      message: "User: namulabs is fantasic company...",
      time: "08:43 PM",
      icon: "Ellipse1",
    },
    {
      id: 2,
      name: "Nvir",
      message: "User: namulabs is fantasic company...",
      time: "08:42 AM",
      icon: "NV",
    },
  ];

  return (
    <div className='flex-1 overflow-y-auto rounded-t-3xl bg-[#2C2C2E]'>
      {messages.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MessageList;
