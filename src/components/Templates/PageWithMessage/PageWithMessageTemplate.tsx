import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MessagePageModule } from "~/components/Modules/PageWithMessage/MessagePageModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  messagePageModuleProps: React.ComponentProps<typeof MessagePageModule>
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
};

export const PageWithMessageTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto", padding: "20px", background: "#1F1F1F", color: "#FFFFFF" }}>
        <MessagePageModule {...props.messagePageModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};