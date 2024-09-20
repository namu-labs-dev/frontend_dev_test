import { message } from "antd";
import React from "react";
import { HomeTemplate } from "~/components/Templates/DonHome/HomeTemplate";

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

    //   homeContentModuleProps: {},
    homeFooterModuleProps: {
      title: "Proxima Footer",
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
}
