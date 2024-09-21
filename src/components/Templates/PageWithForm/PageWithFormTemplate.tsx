import { PageWithFormHeaderModule } from "~/components/Modules/PageWithForm/PageWithFormHeaderModule";
import { PageWithFormFormModule } from "~/components/Modules/PageWithForm/PageWithFormFormModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TestPageWithFormFormModule } from "~/components/Modules/PageWithForm/TestPageWithFormModule";

type Props = {
  pageWithFormHeaderModuleProps: React.ComponentProps<
    typeof PageWithFormHeaderModule
  >;
  pageWithFormFormModuleProps?: React.ComponentProps<
    typeof PageWithFormFormModule
  >;
  //added props for the vote form implementation
  testPageWithFormFormModuleProps?: React.ComponentProps<
    typeof TestPageWithFormFormModule
  >;
};

export const PageWithFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithFormHeaderModule {...props.pageWithFormHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        {!props.testPageWithFormFormModuleProps?.custom ? (
          <PageWithFormFormModule {...props.pageWithFormFormModuleProps} />
        ) : (
          <TestPageWithFormFormModule
            {...props.testPageWithFormFormModuleProps}
          />
        )}
      </Content>
    </Layout>
  );
};
