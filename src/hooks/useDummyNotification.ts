import { useMemo } from "react";

type Notification = {
  name: string;
  description: string;
  time: string;
};

const useDummyNotificationData = () => {
  const notifications: Notification[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => {
      return {
        name: `Notification ${index + 1}`,
        description: `This is the description for Notification ${index + 1}.`,
        time: new Date(Date.now() - index * 1000 * 60 * 5).toLocaleTimeString(), // Time, 5 minutes apart
      };
    });
  }, []);

  return notifications;
};

export default useDummyNotificationData;
