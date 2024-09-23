import { message } from "antd";
import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const [isClicked, setIsClicked] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const handleWalletClick = (icon: string) => {
    setIsClicked((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const handleHistoryClick = (icon: string) => {
    setIsClicked((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const handleMessageClick = (icon: string) => {
    setIsClicked((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const handleDollarClick = (icon: string) => {
    setIsClicked((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        color: "#1F1F1F",
        titleColor: "white",
        icon: "rectangle",
        iconColor: "#BFBFBF",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
        modalProps: {
          modalProps: {
            isModalOpen: isModalOpen,
            setModalOpen: setIsModalOpen,
            containerClassName: "#2C2D30",
          },
        },
      },
    },
    homeContentModuleProps: {
      title: "Messages",
      custom: true,
    },
    homeFooterModuleProps: {
      icons: true,
      bgColor: "#262626",
      iconColor: "#8C8C8C",
      isClick: isClicked,
      handleWalletClick: handleWalletClick,
      handleDollarClick: handleDollarClick,
      handleMessageClick: handleMessageClick,
      handleHistoryClick: handleHistoryClick,
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
