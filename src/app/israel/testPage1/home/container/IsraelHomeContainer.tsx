import React, { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { IsraelHomeTemplate } from "~/components/Templates/Home/IsraelHomeTemplate";
import * as svgs from "public/svgs";
import { getFooterTabs } from "~/components/Modules/IsraelHome/tabs";

export const IsraelHomeContainer = () => {
  const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
  const [activeTabId, setActiveTabId] = useState<string>("dollar");
  const router = useRouter();

  const headerLeftIconClicked = () => {
    void router.push("/israel/testPage2/vote");
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
        backgroundColor: "#1F1F1F",
        textColor: "#ffff",
      },
    },
    homeContentModuleProps: {
      onClick: setShowCustomModal,
      tabs: footerTabs,
      activeTabId,
      setActiveTabId,
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
