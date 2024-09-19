import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";
import { TestPage1FooterModule } from "~/components/Modules/TestPage1/TestPage1FooterModule";
import { TestPage1JumbotronModule } from "~/components/Modules/TestPage1/TestPage1JumbotronModule";
import { TestPage1MessageModule } from "~/components/Modules/TestPage1/TestPage1MessageModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

type Props = {
  headerModuleProps: React.ComponentProps<typeof TestPage1HeaderModule>;
  jumbotronMOduleProps: React.ComponentProps<typeof TestPage1JumbotronModule>;
  messageModuleProps: React.ComponentProps<typeof TestPage1MessageModule>;
  footerModuleProps: React.ComponentProps<typeof TestPage1FooterModule>;
};

export const TestPage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowY: "hidden" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='flex h-full flex-col bg-[#1F1F1F]'>
        <TestPage1JumbotronModule {...props.jumbotronMOduleProps} />
        <TestPage1MessageModule {...props.messageModuleProps} />
      </Content>

      <Footer>
        <TestPage1FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
