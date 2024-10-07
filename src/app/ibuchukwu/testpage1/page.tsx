"use client";
import { useEffect, useState } from "react";
import { Testpage1Container } from "./container/Testpage1Container";
import { TestPageOneMessageComponent } from "~/components/Components/TestPageOneContentComponent/TestPageOneMessageComponent";

const TestPage1 = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [messages, setMessages] = useState<
    React.ComponentProps<typeof TestPageOneMessageComponent>["messages"]
  >([]);
  const [toolbarColor, setToolbarColor] = useState("#1F1F1F");

  // Simulate fetching data for messages in the useEffect hook
  useEffect(() => {
    const fetchedMessages = [
      {
        id: 1,
        photoUrl: "/assets/ethereum.png",
        messageTitle: "ETH",
        messageBody: "User: namulabs is fantasic company...",
        receivedTime: "08:43 PM",
        isRead: false,
      },
      {
        id: 2,
        photoUrl: "/assets/nvir.webp",
        messageTitle: "Nvir",
        messageBody: "User: namulabs is fantasic company...",
        receivedTime: "08:42 AM",
        isRead: true,
      },
    ];
    setMessages(fetchedMessages);
  }, []);

  useEffect(() => {
    setToolbarColor(isCustomModalOpen ? "#000000" : "#1F1F1F");
  }, [isCustomModalOpen]);

  const onClickLeftIcon = () => {
    console.log("Left icon clicked");
  };
  const onClickRightIcon = () => {
    setIsCustomModalOpen(true);
    setToolbarColor("#000000");
  };

  return (
    <Testpage1Container
      messages={messages}
      onClickLeftIcon={onClickLeftIcon}
      onClickRightIcon={onClickRightIcon}
      setIsCustomModalOpen={setIsCustomModalOpen}
      isCustomModalOpen={isCustomModalOpen}
      toolbarColor={toolbarColor}
    />
  );
};

export default TestPage1;
