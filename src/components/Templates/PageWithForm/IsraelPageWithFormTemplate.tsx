import { PageWithFormHeaderModule } from "~/components/Modules/PageWithForm/PageWithFormHeaderModule";
import { PageWithFormFormModule } from "~/components/Modules/PageWithForm/PageWithFormFormModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { IsraelPageWithFormHeaderModule } from "~/components/Modules/PageWithForm/IsraelPageWithFormHeaderModule";
import { VoteInfo } from "~/components/Modules/VoteInfo/VoteInfo";
import { VoteFormModule } from "~/components/Modules/PageWithForm/VoteFormModule";

type Props = {
  pageWithFormHeaderModuleProps: React.ComponentProps<
    typeof IsraelPageWithFormHeaderModule
  >;
  pageWithFormFormModuleProps: React.ComponentProps<
    typeof PageWithFormFormModule
  >;
};

export const IsraelPageWithFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <IsraelPageWithFormHeaderModule
          {...props.pageWithFormHeaderModuleProps}
        />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <VoteInfo />
        <VoteFormModule {...props.pageWithFormFormModuleProps} />
      </Content>
    </Layout>
  );
};
