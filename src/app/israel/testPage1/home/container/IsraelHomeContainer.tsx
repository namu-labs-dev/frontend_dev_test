import React, { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { IsraelHomeTemplate } from "~/components/Templates/Home/IsraelHomeTemplate";
import * as svgs from "public/svgs";
import { Messages } from "~/components/Tabs/Messages";

export const IsraelHomeContainer = () => {
  const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
  const [activeTabId, setActiveTabId] = useState<string>("home");
  const router = useRouter();

  const headerLeftIconClicked = () => {
    void router.push("israel/vote");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const footerTabs = [
    {
      id: "dollar",
      iconName: "dollar" as keyof typeof svgs,
      content: <Messages />,
    },
    {
      id: "message",
      iconName: "message" as keyof typeof svgs,
      content: <div>Messages Content</div>,
    },
    {
      id: "wallet",
      iconName: "wallet" as keyof typeof svgs,
      content: <div>Profile Content</div>,
    },
    {
      id: "history",
      iconName: "history" as keyof typeof svgs,
      content: <div>Profile Content</div>,
    },
  ];

  const homeTemplateProps: React.ComponentProps<typeof IsraelHomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },
    homeContentModuleProps: {
      onClick: setShowCustomModal,
      tabs: footerTabs,
      activeTabId,
      setActiveTabId,
      // defaultActiveTab: defaultActiveTab,
    },
    homeFooterModuleProps: {
      tabs: footerTabs,
      activeTabId,
      setActiveTabId,
    },
    // transactionModalProps: {
    //   isModalOpen: showCustomModal,
    //   setIsModalOpen: setShowCustomModal,
    // },
  };

  return <IsraelHomeTemplate {...homeTemplateProps} />;
};
