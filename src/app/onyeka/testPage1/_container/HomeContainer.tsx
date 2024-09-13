import { message } from "antd";
import React from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { useHomeContext } from "~/providers/home-provider";

type Props = {};

const HomeContainer = (props: Props) => {
  const { setActiveItem } = useHomeContext();
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
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
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

export default HomeContainer;
