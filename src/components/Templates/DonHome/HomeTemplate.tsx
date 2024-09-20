import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
// import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
import { HomeHeaderModule } from "~/components/Modules/DonHome/HomeHeaderModule";
import { HomeFooterModule } from "~/components/Modules/DonHome/HomeFooterModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
  // homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto", padding: "20px" }}>
        <div>Hello world</div>
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
