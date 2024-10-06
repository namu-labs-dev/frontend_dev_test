import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { HomeWithModalFooterModule } from "~/components/Modules/Home/HomeWithModalFooterModule";
import { HomeWithModalHeaderModule } from "~/components/Modules/Home/HomeWithModalHeaderModule";
import { HomeWithModalContentModule } from "~/components/Modules/Home/HomeWithModalContentModule";

type Props = {
  homeWithModalHeaderModuleProps: React.ComponentProps<
    typeof HomeWithModalHeaderModule
  >;
  homeWithModalContentModuleProps: React.ComponentProps<
    typeof HomeWithModalContentModule
  >;
  homeWithModalFooterModuleProps: React.ComponentProps<
    typeof HomeWithModalFooterModule
  >;
};

export const HomeWithModalTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeWithModalHeaderModule {...props.homeWithModalHeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "auto",
          display: "flex",
          backgroundColor: "#1F1F1F",
          flexDirection: "column",
        }}
      >
        <HomeWithModalContentModule
          {...props.homeWithModalContentModuleProps}
        />
      </Content>

      <HomeWithModalFooterModule {...props.homeWithModalFooterModuleProps} />
    </Layout>
  );
};
