import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { FormTestPageContentModule } from "~/components/Modules/FormTestPage/FormTestPageContentModule";
import { FormTestPageHeaderModule } from "~/components/Modules/FormTestPage/FormTestPageHeaderModule";

type Props = {
  formTestPageHeaderModuleProps: React.ComponentProps<
    typeof FormTestPageHeaderModule
  >;
  formTestPageFormModuleProps: React.ComponentProps<
    typeof FormTestPageContentModule
  >;
};

export const FormTestPageTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", width: 400, backgroundColor: "white" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <FormTestPageHeaderModule {...props.formTestPageHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto", padding: 0 }}>
        <FormTestPageContentModule {...props.formTestPageFormModuleProps} />
      </Content>
    </Layout>
  );
};
