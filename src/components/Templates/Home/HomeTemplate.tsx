import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
import HomeProvider from "~/providers/home-provider";
import HomeSettingsModalModule from "~/components/Modules/Home/HomeSettingsModalModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
  homeModalModuleProps: React.ComponentProps<typeof HomeSettingsModalModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <HomeProvider>
      <Layout style={{ height: "100%" }}>
        <Header style={{ padding: 0, height: 50 }}>
          <HomeHeaderModule {...props.homeHeaderModuleProps} />
        </Header>

        <Content
          style={{
            // overflow: "none",
            backgroundColor: "#1f1f1f",
          }}
          className='overflow-hidden'
        >
          <HomeContentModule {...props.homeContentModuleProps} />
          <HomeDescriptionModule />
          <HomeSettingsModalModule {...props.homeModalModuleProps} />
        </Content>

        <Footer style={{ padding: 0, minHeight: 50 }}>
          <HomeFooterModule {...props.homeFooterModuleProps} />
        </Footer>
      </Layout>
    </HomeProvider>
  );
};
