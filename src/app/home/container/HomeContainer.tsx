import { message } from "antd";

import React from "react";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import avatar from "../../../../public/pngs/avatar.png";
import fanquest from "../../../../public/pngs/fanquest_logo.png";
import nft from "../../../../public/pngs/NFTImage.png";
import heroImage1 from "../../../../public/pngs/heroImage1.png";

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

  const heroImages = [heroImage1, nft, fanquest];

  //All props would be adjusted based on the code-convention when building modules

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        creators: [],
        notifications: [],
      },
    },
    homeHeroModuleProps: {
      heroProps: {
        images: heroImages,
      },
    },
    homeModuleProps: {
      foo: "bar",
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
