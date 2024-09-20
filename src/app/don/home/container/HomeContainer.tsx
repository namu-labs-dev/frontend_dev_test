import { message } from "antd";
import React from "react";
import { HomeTemplate } from "~/components/Templates/ProximaHome/HomeTemplate";
import EthImage from "public/images/eth.png";
import NvirImage from "public/images/nvir.png";

export function HomeContainer() {
  function headerLeftIconClicked() {
    void message.info("can't go back");
  }

  function headerRightIconClicked() {
    void message.info("can't go Settings");
  }

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },

    homeContentModuleProps: {
      messages: [
        {
          imgSrc: EthImage,
          message:
            "User: namulabs is fantasic company something something something.",
          timeStamp: "08:43 PM",
          userName: "ETH",
          unreadCount: "N",
        },
        {
          imgSrc: NvirImage,
          message:
            "User: namulabs is fantasic company something something something.",
          timeStamp: "08:42 AM",
          userName: "Nvir",
        },
      ],
    },
    homeContentDescriptionModuleProps: {
      title: "Messages",
    },
    homeFooterModuleProps: {
      title: "Proxima Footer",
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
}
