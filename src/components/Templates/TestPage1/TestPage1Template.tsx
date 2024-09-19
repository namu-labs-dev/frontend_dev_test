import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";
import { TestingPage1FooterModule } from "~/components/Modules/TestPage1/TestPage1FooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

type Props = {
  headerModuleProps: React.ComponentProps<typeof TestPage1HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof TestingPage1FooterModule>
}

export const TestPage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.headerModuleProps} />
      </Header>


      <Footer>
        <TestingPage1FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
