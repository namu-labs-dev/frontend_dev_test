import { HomePageHeaderModule } from "~/components/Modules/HomePage/HomePageHeaderModule";
import { HomePageFooterModule } from "~/components/Modules/HomePage/HomePageFooterModule";
import { HomePageJumbotronModule } from "~/components/Modules/HomePage/HomePageJumbotronModule";
import { HomePageMessageModule } from "~/components/Modules/HomePage/HomePageMessageModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HomePageHeaderModule>;
  jumbotronMOduleProps: React.ComponentProps<typeof HomePageJumbotronModule>;
  messageModuleProps: React.ComponentProps<typeof HomePageMessageModule>;
  footerModuleProps: React.ComponentProps<typeof HomePageFooterModule>;
};

export const HomePageTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowY: "hidden" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomePageHeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='flex h-full flex-col bg-[#1F1F1F]'>
        <HomePageJumbotronModule {...props.jumbotronMOduleProps} />
        <HomePageMessageModule {...props.messageModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomePageFooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
