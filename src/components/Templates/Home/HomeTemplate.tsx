import { HomeModule } from "~/components/Modules/Home/HomeModule";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeHeroModule } from "~/components/Modules/Home/HomeHeroModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  homeModuleProps: React.ComponentProps<typeof HomeModule>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeHeroModuleProps: React.ComponentProps<typeof HomeHeroModule>;
};

export function HomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%", background: "none" }}>
      <HomeHeaderModule {...props.homeHeaderModuleProps} />

      <Content style={{ overflow: "auto" }}>
        <HomeHeroModule {...props.homeHeroModuleProps} />
        <HomeModule {...props.homeModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
}
