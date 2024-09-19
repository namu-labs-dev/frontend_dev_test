"use client";
import { message } from "antd";
import { HomePageTemplate } from "~/components/Templates/HomePage/HomePageTemplate";

const HomePageContainer = () => {
  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const headerLeftIconClicked = () => {
    void message.info("No action");
  };

  const testPage1TemplateProps: React.ComponentProps<typeof HomePageTemplate> =
    {
      headerModuleProps: {
        headerProps: {
          title: "Proxima OS",
          darkTheme: true,
          onClickRightIcon: headerRightIconClicked,
          onClickLeftIcon: headerLeftIconClicked,
          iconName: "customIcon",
        },
      },

      jumbotronMOduleProps: {
        jumbotronContentProps: {
          title: "Messages",
        },
      },

      messageModuleProps: {
        messages: [
          {
            iconName: "ethLogo",
            userName: "ETH",
            time: "08:43 PM",
            message:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem amet ullam nostrum ipsum quae. Officia eaque nihil inventore mollitia.",
            unreadCount: 1,
          },
          {
            iconName: "nvirLogo",
            userName: "Nvir",
            time: "08:30 PM",
            message:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem amet ullam nostrum ipsum quae. Officia eaque nihil inventore mollitia.",
            unreadCount: 0,
          },
        ],
      },

      footerModuleProps: {
        footerProps: {
          darkTheme: true,
        },
      },
    };
  return (
    <>
      <HomePageTemplate {...testPage1TemplateProps} />
    </>
  );
};

export { HomePageContainer };
