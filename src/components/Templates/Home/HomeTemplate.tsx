import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeEndingSoonCarouselModule } from "~/components/Modules/Home/HomeEndingSoonCarouselModule";
import HomeRecommendedModule from "~/components/Modules/Home/HomeRecommendedModule";
import HomeNewQuestModule from "~/components/Modules/Home/HomeNewQuestModule";
import HomePromotedQuestModule from "~/components/Modules/Home/HomePromotedQuestModule";
import HomeQuestBannersModule from "~/components/Modules/Home/HomeQuestBannersModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeEndingSoonModuleprops: React.ComponentProps<
    typeof HomeEndingSoonCarouselModule
  >;
  homeRecommendedModuleprops: React.ComponentProps<
    typeof HomeRecommendedModule
  >;
  homeNewQuestModuleProps: React.ComponentProps<typeof HomeNewQuestModule>;
  homePromotedQuestModuleProps: React.ComponentProps<
    typeof HomePromotedQuestModule
  >;
  homeQuestBannerModuleProps: React.ComponentProps<
    typeof HomeQuestBannersModule
  >;
};

export function HomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      {/* <HomeHeaderModule {...props.homeHeaderModuleProps} /> */}

      <Content>
        <HomeEndingSoonCarouselModule {...props.homeEndingSoonModuleprops} />;
        <HomeRecommendedModule {...props.homeRecommendedModuleprops} />
        <HomeNewQuestModule {...props.homeNewQuestModuleProps} />
        <HomePromotedQuestModule {...props.homePromotedQuestModuleProps} />
        <HomeQuestBannersModule {...props.homeQuestBannerModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
}
