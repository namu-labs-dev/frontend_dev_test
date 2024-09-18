import { PageWithToastHeaderModule } from "~/components/Modules/PageWithToast/PageWithToastHeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  pageWithToastHeaderModuleProps: React.ComponentProps<
    typeof PageWithToastHeaderModule
  >;
};

export const PageWithToastTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithToastHeaderModule {...props.pageWithToastHeaderModuleProps} />
      </Header>
    </Layout>
  );
};
