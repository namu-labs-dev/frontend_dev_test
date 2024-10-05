import { PageWithVoteFormHeaderModule } from "~/components/Modules/PageWithVoteForm/PageWithVoteFormHeaderModule";
import { PageWithVoteFormFormModule } from "~/components/Modules/PageWithVoteForm/PageWithVoteFormFormModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

type Props = {
  pageWithVoteFormHeaderModuleProps: React.ComponentProps<
    typeof PageWithVoteFormHeaderModule
  >;
  pageWithVoteFormFormModuleProps: React.ComponentProps<
    typeof PageWithFormFormModule
  >;
};

export const PageWithVoteFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", background: "#FFFFFF" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithVoteFormHeaderModule {...props.pageWithVoteFormHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <PageWithVoteFormFormModule {...props.pageWithVoteFormFormModuleProps} />
      </Content>
    </Layout>
  );
};
