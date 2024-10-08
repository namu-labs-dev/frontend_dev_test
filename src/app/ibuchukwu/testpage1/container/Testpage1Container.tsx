"use client";

import { useEffect, useState } from "react";
import { TestPageOneMessageComponent } from "~/components/Components/TestPageOneContentComponent/TestPageOneMessageComponent";
import { TestPageOneTemplate } from "~/components/Templates/TestPageOne/TestPageOneTemplate";

export const Testpage1Container = () => {
  const [messages, setMessages] = useState<
    React.ComponentProps<typeof TestPageOneMessageComponent>["messages"]
  >([]);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [toolbarColor, setToolbarColor] = useState("#1F1F1F");

  useEffect(() => {
    setToolbarColor(isCustomModalOpen ? "#000000" : "#1F1F1F");
  }, [isCustomModalOpen]);

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

  const TestPageOneTemplateProps: React.ComponentProps<
    typeof TestPageOneTemplate
  > = {
    TestPageOneHeaderProps: {
      headerProps: {
        title: "Proxima OS",
        color: toolbarColor,
        onClickLeftIcon: () => {
          console.log("Left icon clicked");
        },
        onClickRightIcon: () => {
          setIsCustomModalOpen(true);
          setToolbarColor("#000000");
        },
      },
    },
    TestPageOneContentProps: {
      messages,
      modalProps: {
        modalProps: {
          isModalOpen: isCustomModalOpen,
          setModalOpen: setIsCustomModalOpen,
        },
        title: "Transaction Processing",
        description:
          "Uploading your transaction to the node. please wait for a moment... \nThis may take up to 2 minutes.",
        iconUrl: "/assets/block.png",
      },
    },
    TestPageOneFooterProps: {
      footerProps: {
        onTabChange: () => console.log(`Tab clicked.`),
      },
    },
  };

  return <TestPageOneTemplate {...TestPageOneTemplateProps} />;
};
