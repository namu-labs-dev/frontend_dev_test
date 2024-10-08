import React from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import VoteFormContentModule from "~/components/Modules/VoteForm/VoteFormContentModule";
import VoteFormHeaderModule from "~/components/Modules/VoteForm/VoteFormHeaderModule";

type Props = {
  formHeaderModuleProps: React.ComponentProps<typeof VoteFormHeaderModule>;
  formContentModuleProps: React.ComponentProps<typeof VoteFormContentModule>;
};

const VoteFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <VoteFormHeaderModule {...props.formHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <VoteFormContentModule {...props.formContentModuleProps} />
      </Content>
    </Layout>
  );
};

export default VoteFormTemplate;
