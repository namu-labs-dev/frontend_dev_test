import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

type Props = {
  headerModuleProps: React.ComponentProps<typeof TestPage1HeaderModule>;
}

export const TestPage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.headerModuleProps} />
      </Header>

    </Layout>
  );
};
