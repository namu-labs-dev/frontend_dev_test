"use client";

import { useState } from "react";
import { FormTestPageTemplate } from "~/components/Templates/FormTestPage/FormTestPageTemplate";

export const TestPageTwoContainer = () => {
  const [formData, setFormData] = useState<any>({});

  const formTestPageTemplateProps: React.ComponentProps<
    typeof FormTestPageTemplate
  > = {
    formTestPageHeaderModuleProps: {
      title: "Vote",
    },
    formTestPageFormModuleProps: {
      setFormData,
    },
  };
  return <FormTestPageTemplate {...formTestPageTemplateProps} />;
};
