import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import { HomeEndingSoonCarouselModule } from "~/components/Modules/Home/HomeEndingSoonCarouselModule";

type Props = {
  homeEndingSoonModuleprops: React.ComponentProps<
    typeof HomeEndingSoonCarouselModule
  >;
};

export function HomeEndingSoonCarouselTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      <Content>
        <HomeEndingSoonCarouselModule {...props.homeEndingSoonModuleprops} />;
      </Content>
    </Layout>
  );
}
