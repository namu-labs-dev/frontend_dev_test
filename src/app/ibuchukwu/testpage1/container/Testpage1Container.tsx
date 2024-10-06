"use client";

import { useEffect, useState } from "react";
import { TestPageOneTemplate } from "~/components/Templates/TestPageOne/TestPageOneTemplate";

export const Testpage1Container = () => {
  interface Message {
    id: number;
    photoUrl: string;
    messageTitle: string;
    messageBody: string;
    receivedTime: string;
    isRead: boolean;
  }

  const [messages, setMessages] = useState<Message[]>([]);

  // Simulate fetching data for messages
  useEffect(() => {
    const fetchedMessages = [
      {
        id: 1,
        photoUrl: "link/to/image",
        messageTitle: "Proxima",
        messageBody: "Message content",
        receivedTime: "08:43 PM",
        isRead: true,
      },
      {
        id: 2,
        photoUrl: "link/to/image",
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
    topToolbarModuleProps: {
      title: "Proxima OS",
      color: "#1F1F1F",
      onClickSettingsIcon: () => console.log("Settings icon clicked"),
    },
    messageListModuleProps: {
      messages,
    },
    bottomNavbarModuleProps: {
      onTabChange: (tab: string) => console.log(`Switched to tab: ${tab}`),
    },
  };

  return <EmptyTemplate {...emptyTemplateProps} />;
};
