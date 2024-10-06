"use client";

import { useEffect, useState } from "react";

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
  return <div>Testpage1Container</div>;
};
