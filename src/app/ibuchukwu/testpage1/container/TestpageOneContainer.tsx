"use client";

import { useEffect, useState } from "react";
import { TestPageOneTemplate } from "~/components/Templates/TestPageOne/TestPageOneTemplate";

export interface Message {
  id: number;
  photoUrl: string;
  messageTitle: string;
  messageBody: string;
  receivedTime: string;
  isRead: boolean;
}

export const TestpageOneContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Simulate fetching data for messages
  useEffect(() => {
    const fetchedMessages = [
      {
        id: 1,
        photoUrl: "/assets/ethereum.pmg",
        messageTitle: "Proxima",
        messageBody: "Message content",
        receivedTime: "08:43 PM",
        isRead: true,
      },
      {
        id: 2,
        photoUrl: "/assets/nvir.webp",
        messageTitle: "Nvir",
        messageBody: "Message content",
        receivedTime: "08:42 AM",
        isRead: false,
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
        color: "#1F1F1F",
        onClickLeftIcon: () => {
          console.log("Left icon clicked");
        },
        onClickRightIcon: () => console.log("Right icon clicked"),
      },
    },
    TestPageOneContentProps: {
      messages,
    },
    TestPageOneFooterProps: {
      footerProps: {
        onTabChange: () => console.log(`Tab changed`),
      },
    },
  };

  return <TestPageOneTemplate {...TestPageOneTemplateProps} />;
};
