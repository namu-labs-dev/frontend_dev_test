import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeHeaderModule } from "~/components/Modules/ProximaHome/HomeHeaderModule";
import { HomeFooterModule } from "~/components/Modules/ProximaHome/HomeFooterModule";
import { HomeContentModule } from "~/components/Modules/ProximaHome/HomeContentModule";
import { HomeContentDescriptionModule } from "~/components/Modules/ProximaHome/HomeContentDescription";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeContentDescriptionModuleProps: React.ComponentProps<
    typeof HomeContentDescriptionModule
  >;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#1F1F1F",
        }}
      >
        <HomeContentDescriptionModule
          {...props.homeContentDescriptionModuleProps}
        />
        <HomeContentModule {...props.homeContentModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
