import { Layout } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import { PageWithModalHeaderModule } from "~/components/Modules/PageWithModal/PageWithModalHeaderModule";
import { EmptyFooterModule } from "~/components/Modules/Empty/EmptyFooterModule";
import { PageWithModalContentModule } from "~/components/Modules/PageWithModal/PageWithModalContentModule";
import { PageWithModalDescriptionModule } from "~/components/Modules/PageWithModalDescription/PageWithModalDescriptionModule";

type Props = {
  pageWithModalHeaderModuleProps: React.ComponentProps<
    typeof PageWithModalHeaderModule
  >;
  pageWithModalContentModuleProps: React.ComponentProps<
    typeof PageWithModalContentModule
  >;
  emptyFooterModuleProps: React.ComponentProps<typeof EmptyFooterModule>;
};

export const PageWithModalTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "#1F1F1F" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithModalHeaderModule {...props.pageWithModalHeaderModuleProps} />
      </Header>

      <Content
        style={{
          padding: "0",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <PageWithModalDescriptionModule />
        <PageWithModalContentModule
          {...props.pageWithModalContentModuleProps}
        />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <EmptyFooterModule {...props.emptyFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
