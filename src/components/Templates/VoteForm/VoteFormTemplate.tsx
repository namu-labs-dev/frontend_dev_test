import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { VoteFormBanner } from "~/components/Components/VoteFormBanner/VoteFormBanner";
import { VoteFormFormModule } from "~/components/Modules/VoteForm/VoteFormFormModule";
import { VoteFormHeaderModule } from "~/components/Modules/VoteForm/VoteFormHeaderModule";

type Props = {
  voteFormHeaderModuleProps: React.ComponentProps<typeof VoteFormHeaderModule>;
  voteFormFormModuleProps: React.ComponentProps<typeof VoteFormFormModule>;
};

export const VoteFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <Header
        style={{ padding: 16, height: 50, backgroundColor: "transparent" }}
      >
        <VoteFormHeaderModule {...props.voteFormHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <VoteFormBanner />
        <VoteFormFormModule {...props.voteFormFormModuleProps} />
      </Content>
    </Layout>
  );
};
