import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeLogoModule } from "~/components/Modules/Home/HomeLogoModule";
import HomeMessageCardModule from "~/components/Modules/Home/HomeMessageCardModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeLogoModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>
      <Content
        style={{
          backgroundColor: "#1F1F1F",
          overflow: "auto",
          padding: "20px",
        }}
      >
        <HomeLogoModule {...props.homeContentModuleProps} />
      </Content>
      <Content
        style={{
          backgroundColor: "#1F1F1F",
          overflow: "auto",
        }}
      >
        <HomeMessageCardModule size='' />
        {/* <HomeDescriptionModule /> */}
      </Content>
      <HomeFooterModule />
    </Layout>
  );
};
