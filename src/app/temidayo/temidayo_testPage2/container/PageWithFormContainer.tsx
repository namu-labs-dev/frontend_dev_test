import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageWithFormTemplate } from "~/components/Templates/PageWithForm/PageWithFormTemplate";

export const PageWithFormContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});

  const pagewithformTemplateProps: React.ComponentProps<
    typeof PageWithFormTemplate
  > = {
    pageWithFormHeaderModuleProps: {
      title: "Vote",
      weight: "font-bold",
      color: "#FFFFFF",
      //   onClickLeftIcon: () => router.back(),
    },
    testPageWithFormFormModuleProps: {
      setFormData,
      custom: true,
    },
  };

  return <PageWithFormTemplate {...pagewithformTemplateProps} />;
};
