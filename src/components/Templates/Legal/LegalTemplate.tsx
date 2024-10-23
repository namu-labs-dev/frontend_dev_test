import { LegalFooterModule } from "~/components/Modules/Legal/LegalFooterModule";
import { LegalHeaderModule } from "~/components/Modules/Legal/LegalHeaderModule";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { LegalTermsContentModule } from "~/components/Modules/Legal/LegalTermsContentModule";
import { LegalPrivacyContentModule } from "~/components/Modules/Legal/LegalPrivacyContentModule";

type Props = {
  foo?: string;
  legalHeaderModuleProps: React.ComponentProps<typeof LegalHeaderModule>;
  legalTermscontentModuleProps: React.ComponentProps<
    typeof LegalTermsContentModule
  >;
  legalPrivacycontentModuleProps: React.ComponentProps<
    typeof LegalPrivacyContentModule
  >;
};

export function LegalTemplate(props: Props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <LegalHeaderModule {...props.legalHeaderModuleProps} />

      <Content
        style={{
          overflow: "auto",
          padding: "20px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {props.legalHeaderModuleProps.legal === "tos" && (
          <LegalTermsContentModule {...props.legalTermscontentModuleProps} />
        )}

        {props.legalHeaderModuleProps.legal === "privacy" && (
          <LegalPrivacyContentModule
            {...props.legalPrivacycontentModuleProps}
          />
        )}
      </Content>

      <LegalFooterModule />
    </Layout>
  );
}
