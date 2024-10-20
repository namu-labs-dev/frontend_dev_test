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


  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeModuleProps: {
      foo: "bar",
    },
  };


  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeModuleProps: {
      foo: "bar",
    },
  };


  return <HomeTemplate {...homeTemplateProps} />;

};
