import React, { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { IsraelHomeTemplate } from "~/components/Templates/Home/IsraelHomeTemplate";
import * as svgs from "public/svgs";
import { Messages } from "~/components/Tabs/Messages";
import { Transactions } from "~/components/Tabs/Transactions";
import { Wallet } from "~/components/Tabs/Wallet";
import { History } from "~/components/Tabs/History";
import { getFooterTabs } from "~/components/Modules/IsraelHome/tabs";

export const IsraelHomeContainer = () => {
  const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
  const [activeTabId, setActiveTabId] = useState<string>("dollar");
  const router = useRouter();

  const headerLeftIconClicked = () => {
    void router.push("israel/vote");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const footerTabs = getFooterTabs(setShowCustomModal);

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
    transactionModalProps: {
      isModalOpen: showCustomModal,
      setModalOpen: setShowCustomModal,
    },
  };

  return <IsraelHomeTemplate {...homeTemplateProps} />;
};
