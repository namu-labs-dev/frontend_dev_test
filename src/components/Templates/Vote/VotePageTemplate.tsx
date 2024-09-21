import { VotePageHeaderModule } from "~/components/Modules/Vote/VotePageHeaderModule";
import { VotePageFormModule } from "~/components/Modules/Vote/VotePageFormModule";
import { VotePageBannerModule } from "~/components/Modules/Vote/VotePageBannerModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

type Props = {
  votePageHeaderModuleProps: React.ComponentProps<typeof VotePageHeaderModule>;
  votePageFormFormModuleProps: React.ComponentProps<typeof VotePageFormModule>;
};

export const VotePageTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowY: "hidden" }}>
      <Header style={{ padding: 0 }}>
        <VotePageHeaderModule {...props.votePageHeaderModuleProps} />
      </Header>

      <Content className='flex h-full flex-col'>
        <VotePageBannerModule />
        <VotePageFormModule {...props.votePageFormFormModuleProps} />
      </Content>
    </Layout>
  );
};
