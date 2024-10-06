import { message } from "antd";
import { useState } from "react";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import ModalStore from "~/store/ModalStore";

export const HomeContainer = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightSettingIconClicked = () => {
    setIsCustomModalOpen(true);
    console.log("CLicked")
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightSettingIconClicked,
      },
    },
    homeContentModuleProps: {
      image: "/images/mImg.png",
      text: "Proxima",
    },
    homeFooterModuleProps: {
      title: "HomeFooterModule",
      images: [
        "/images/dollar-circle.png",
        "/images/message.png",
        "/images/wallet.png",
        "/images/History.png",
      ],
    },
  };

  const customModalProps = {
    modalProps: {
      isModalOpen: isCustomModalOpen,
      setModalOpen: setIsCustomModalOpen,
    },
    title: "Transaction processing",
    image: "/images/modal Img.png",
    description: "Uploading your transaction to the node. please wait for a moment... This may take up to 2 minutes.",
  };

  return (
    <>
      <HomeTemplate {...homeTemplateProps} />
      {isCustomModalOpen && <PageWithModalContentCustomModal {...customModalProps} />}
    </>
  );
};
