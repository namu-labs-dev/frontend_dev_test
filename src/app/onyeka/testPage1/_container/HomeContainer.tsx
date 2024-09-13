import { message } from "antd";
import React, { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { useHomeContext } from "~/providers/home-provider";
import ModalStore from "~/store/ModalStore";

type Props = {};

const HomeContainer = (props: Props) => {
  const { setActiveItem } = useHomeContext();
  const [isSettingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    // void message.info("can't go Settings");
    console.log("I WAS CLICKED");
    setSettingsModalOpen(true);
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
        leftIcon: "leftHome",
      },
    },
    homeContentModuleProps: {
      // sampleLinks: [
      //   "/sample/empty",
      //   "/sample/pageWithModal",
      //   "/sample/pageWithDrawer",
      //   "/sample/pageWithToast",
      //   "/sample/pageWithForm",
      // ],
      username: "Proxima",
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
    homeModalModuleProps: {
      modalProps: {
        modalProps: {
          isModalOpen: isSettingsModalOpen,
          setModalOpen: setSettingsModalOpen,
        },
        transactionStatus: "processing",
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

export default HomeContainer;
