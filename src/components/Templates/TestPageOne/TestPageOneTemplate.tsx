import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { TestPageOneContentModule } from "~/components/Modules/TestPageOne/TestPageOneContentModule";
import { TestPageOneFooterModule } from "~/components/Modules/TestPageOne/TestPageOneFooterModule";
import { TestPageOneHeaderModule } from "~/components/Modules/TestPageOne/TestPageOneHeaderModule";

type Props = {
  TestPageOneHeaderProps: React.ComponentProps<typeof TestPageOneHeaderModule>;
  TestPageOneContentProps: React.ComponentProps<
    typeof TestPageOneContentModule
  >;
  TestPageOneFooterProps: React.ComponentProps<typeof TestPageOneFooterModule>;
};

export const TestPageOneTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPageOneHeaderModule {...props.TestPageOneHeaderProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <TestPageOneContentModule {...props.TestPageOneContentProps} />
      </Content>
      <Footer
        style={{
          padding: 0,
          height: 60,
        }}
      >
        <TestPageOneFooterModule {...props.TestPageOneFooterProps} />
      </Footer>
    </Layout>
  );
};
