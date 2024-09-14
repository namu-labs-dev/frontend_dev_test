import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
import HomeProvider from "~/providers/home-provider";
import HomeSettingsModalModule from "~/components/Modules/Home/HomeSettingsModalModule";
import { VoteHeaderModule } from "~/components/Modules/Vote/VoteHeaderModule";
import { VoteContentModule } from "~/components/Modules/Vote/VoteContentModule";

type Props = {
  voteHeaderModuleProps: React.ComponentProps<typeof VoteHeaderModule>;
  voteContentModuleProps: React.ComponentProps<typeof VoteContentModule>;
  //   homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
  //   homeModalModuleProps: React.ComponentProps<typeof HomeSettingsModalModule>;
};

export const VoteTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", background: "#fff" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <VoteHeaderModule {...props.voteHeaderModuleProps} />
      </Header>

      <Content className='overflow-auto'>
        <VoteContentModule {...props.voteContentModuleProps} />
      </Content>
    </Layout>
  );
};
