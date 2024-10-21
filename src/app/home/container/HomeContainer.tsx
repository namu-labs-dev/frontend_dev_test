import { message } from "antd";

import React from "react";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  const handleCancelPurchase = () => {
    return null;
  };
  const handleUsers = () => {
    return null;
  };

  //All props would be adjusted based on the code-convention when building modules

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        creators: creators,
        notifications: notifications,
      },
    },
    homeModuleProps: {
      foo: "bar",
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
