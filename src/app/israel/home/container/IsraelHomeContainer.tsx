import React, { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { IsraelHomeTemplate } from "~/components/Templates/Home/IsraelHomeTemplate";

export const IsraelHomeContainer = () => {
  const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
  const router = useRouter();

  const headerLeftIconClicked = () => {
    void router.push("israel/vote");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const homeTemplateProps: React.ComponentProps<typeof IsraelHomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },
    homeContentModuleProps: { onClick: setShowCustomModal },
    homeFooterModuleProps: { title: "HomeFooterModule" },
    transactionModalProps: {
      isModalOpen: showCustomModal,
      setIsModalOpen: setShowCustomModal,
    },
  };

  return <IsraelHomeTemplate {...homeTemplateProps} />;
};
