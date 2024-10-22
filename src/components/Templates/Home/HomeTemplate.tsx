import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeHeroModule } from "~/components/Modules/Home/HomeHeroModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeEndingSoonCarouselModule } from "~/components/Modules/Home/HomeEndingSoonCarouselModule";
import { HomePopularCreatorModule } from "~/components/Modules/Home/HomePopularCreatorModule";
import HomeRecommendedModule from "~/components/Modules/Home/HomeRecommendedModule";
import HomeNewQuestModule from "~/components/Modules/Home/HomeNewQuestModule";
import HomePromotedQuestModule from "~/components/Modules/Home/HomePromotedQuestModule";
import HomeQuestBannersModule from "~/components/Modules/Home/HomeQuestBannersModule";
import HomeFooterModule from "~/components/Modules/Home/HomeFooterModule";
import HomePartnersModule from "~/components/Modules/Home/HomePartnersModule";
import React from "react";

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
  homePromotedQuestModuleProps: React.ComponentProps<
    typeof HomePromotedQuestModule
  >;
  homeQuestBannerModuleProps: React.ComponentProps<
    typeof HomeQuestBannersModule
  >;
  homePartnersModuleProps: React.ComponentProps<typeof HomePartnersModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
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
        <HomePromotedQuestModule {...props.homePromotedQuestModuleProps} />
        <HomeQuestBannersModule {...props.homeQuestBannerModuleProps} />
      </Content>
      <HomePartnersModule {...props.homePartnersModuleProps} />
      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
}
