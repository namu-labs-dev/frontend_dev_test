import React from "react";
import { VoteFormTemplate } from "~/components/Templates/VoteForm/VoteFormTemplate";

export const VoteContainer = () => {
  const voteFormTemplateprops: React.ComponentProps<typeof VoteFormTemplate> = {
    voteFormHeaderModuleProps: {
      title: "Vote",
    },

    voteFormFormModuleProps: {
      setFormData: () => void 0,
    },
  };

  return <VoteFormTemplate {...voteFormTemplateprops} />;
};
