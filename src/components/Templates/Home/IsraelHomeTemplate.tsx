import { IsraelHomeHeaderModule } from "~/components/Modules/IsraelHome/IsraelHomeHeaderModule";
import { IsraelHomeContentModule } from "~/components/Modules/IsraelHome/IsraelHomeContentModule";
import { IsraelHomeFooterModule } from "~/components/Modules/IsraelHome/IsraelHomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof IsraelHomeHeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof IsraelHomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof IsraelHomeFooterModule>;
};

export const IsraelHomeTemplate = (props: Props) => {
  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Header style={{ padding: 0, height: 50 }}>
        <IsraelHomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ flexGrow: 1, overflow: "auto" }}>
        <IsraelHomeContentModule {...props.homeContentModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <IsraelHomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
