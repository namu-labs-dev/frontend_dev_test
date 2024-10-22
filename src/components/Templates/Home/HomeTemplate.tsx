import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeHeroModule } from "~/components/Modules/Home/HomeHeroModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeEndingSoonCarouselModule } from "~/components/Modules/Home/HomeEndingSoonCarouselModule";
import { HomePopularCreatorModule } from "~/components/Modules/Home/HomePopularCreatorModule";
import HomeRecommendedModule from "~/components/Modules/Home/HomeRecommendedModule";
import HomeNewQuestModule from "~/components/Modules/Home/HomeNewQuestModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeHeroModuleProps: React.ComponentProps<typeof HomeHeroModule>;
  homePopularCreatorModuleProps: React.ComponentProps<
    typeof HomePopularCreatorModule
  >;
  homeEndingSoonModuleprops: React.ComponentProps<
    typeof HomeEndingSoonCarouselModule
  >;
  homeRecommendedModuleprops: React.ComponentProps<
    typeof HomeRecommendedModule
  >;
  homeNewQuestModuleProps: React.ComponentProps<typeof HomeNewQuestModule>;
};

export function HomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      <HomeHeaderModule {...props.homeHeaderModuleProps} />

      <Content>
        <HomeHeroModule {...props.homeHeroModuleProps} />
        <HomePopularCreatorModule {...props.homePopularCreatorModuleProps} />
        <HomeEndingSoonCarouselModule {...props.homeEndingSoonModuleprops} />;
        <HomeRecommendedModule {...props.homeRecommendedModuleprops} />
        <HomeNewQuestModule {...props.homeNewQuestModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
}
