import { message } from "antd";
import React, { useState } from "react";
import { HomeTemplate } from "~/components/Templates/ProximaHome/HomeTemplate";
import EthImage from "public/images/eth.png";
import NvirImage from "public/images/nvir.png";

export function HomeContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function headerLeftIconClicked() {
    void message.info("can't go back");
  }

  function headerRightIconClicked() {
    setIsModalOpen(true);
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
      modalProps: {
        modalProps: {
          isModalOpen,
          setModalOpen: setIsModalOpen,
        },
        title: "Transaction processing",
        description:
          "Uploading your transaction to the node. please wait for a moment... This may take up to 2 minutes.",
      },
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
