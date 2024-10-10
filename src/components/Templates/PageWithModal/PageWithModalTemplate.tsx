import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { PageWithModalHeaderModule } from "~/components/Modules/PageWithModal/PageWithModalHeaderModule";
import { PageWithModalContentModule } from "~/components/Modules/PageWithModal/PageWithModalContentModule";
import { PageWithModalDescriptionModule } from "~/components/Modules/PageWithModalDescription/PageWithModalDescriptionModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import HomeMessageCardModule from "~/components/Modules/Home/HomeMessageCardModule";
import { HomeLogoModule } from "~/components/Modules/Home/HomeLogoModule";

type Props = {
  pageWithModalHeaderModuleProps: React.ComponentProps<
    typeof PageWithModalHeaderModule
  >;
  pageWithModalContentModuleProps: React.ComponentProps<
    typeof PageWithModalContentModule
  >;
  pageInfoProps: React.ComponentProps<typeof HomeLogoModule>;
};

export const PageWithModalTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithModalHeaderModule {...props.pageWithModalHeaderModuleProps} />
      </Header>
      <Content
        style={{
          backgroundColor: "#1F1F1F",
          overflow: "auto",
          padding: "20px",
        }}
      >
        <HomeLogoModule {...props.pageInfoProps} />
      </Content>
      <Content
        style={{
          overflow: "auto",
          padding: "20px",
          gap: "20px",
          display: "flex",
          backgroundColor: "#1F1F1F",
          flexDirection: "column",
        }}
      >
        <PageWithModalContentModule
          {...props.pageWithModalContentModuleProps}
        />
      </Content>

      <Content
        style={{
          backgroundColor: "#1F1F1F",
          overflow: "auto",
        }}
      >
        <HomeMessageCardModule size='' />
      </Content>
      <HomeFooterModule title='' />
    </Layout>
  );
};
