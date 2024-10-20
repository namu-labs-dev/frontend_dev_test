import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeEndingSoonCarouselModule } from "~/components/Modules/Home/HomeEndingSoonCarouselModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeEndingSoonModuleprops: React.ComponentProps<
    typeof HomeEndingSoonCarouselModule
  >;
};

export function HomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      {/* <HomeHeaderModule {...props.homeHeaderModuleProps} /> */}

      <Content>
        <HomeEndingSoonCarouselModule {...props.homeEndingSoonModuleprops} />;
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
}
