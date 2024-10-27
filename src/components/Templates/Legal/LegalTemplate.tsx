import { LegalFooterModule } from "~/components/Modules/Legal/LegalFooterModule";
import { LegalHeaderModule } from "~/components/Modules/Legal/LegalHeaderModule";
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
  legalFooterModuleProps: React.ComponentProps<typeof LegalFooterModule>;
};

export function LegalTemplate(props: Props) {
  return (
    <main style={{ height: "100vh" }}>
      <LegalHeaderModule {...props.legalHeaderModuleProps} />

      <div className='px-6 py-5 lg:px-[200px]'>
        {props.legalHeaderModuleProps.legal === "tos" && (
          <LegalTermsContentModule {...props.legalTermscontentModuleProps} />
        )}

        {props.legalHeaderModuleProps.legal === "privacy" && (
          <LegalPrivacyContentModule
            {...props.legalPrivacycontentModuleProps}
          />
        )}
      </div>

      <LegalFooterModule {...props.legalFooterModuleProps} />
    </main>
  );
}
