import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import { AuthFooterModule } from "~/components/Modules/Auth/AuthFooterModule";
import AuthForm from "~/components/Modules/Auth/AuthForm";
import { AuthHeaderModule } from "~/components/Modules/Auth/AuthHeaderModule";

type Props = {
  foo?: string;
  authHeaderModuleProps: React.ComponentProps<typeof AuthHeaderModule>;
  authFormModuleProps: React.ComponentProps<typeof AuthForm>;
};

export function AuthTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      <Content>
        <AuthForm {...props.authFormModuleProps} />
      </Content>

      <AuthFooterModule />
    </Layout>
  );
}
