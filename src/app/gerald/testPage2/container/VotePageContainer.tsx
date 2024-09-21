"use client";
import { useState } from "react";
import { VotePageTemplate } from "~/components/Templates/Vote/VotePageTemplate";

export const VotePageContainer = () => {
  const [formData, setFormData] = useState<any>({});
  const voteTemplateProps: React.ComponentProps<typeof VotePageTemplate> = {
    votePageHeaderModuleProps: {
      headerProps: {
        title: "Vote",
        secondaryTheme: true,
      },
    },
    votePageFormFormModuleProps: {
      setFormData,
    },
  };
  return <VotePageTemplate {...voteTemplateProps} />;
};
