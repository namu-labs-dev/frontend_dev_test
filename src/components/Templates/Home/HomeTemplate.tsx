import { HomeModule } from "~/components/Modules/Home/HomeModule";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  homeModuleProps: React.ComponentProps<typeof HomeModule>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
};

export function HomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      <HomeHeaderModule {...props.homeHeaderModuleProps} />

      <Content style={{ overflow: "auto", padding: "20px" }}>
        <HomeModule {...props.homeModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
}
