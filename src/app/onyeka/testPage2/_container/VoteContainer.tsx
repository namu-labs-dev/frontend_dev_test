"use client";
import React, { useState } from "react";
import { VoteTemplate } from "~/components/Templates/Vote/VoteTemplate";

const VoteContainer = () => {
  const [formData, setFormData] = useState<any>({});
  const voteTemplateProps: React.ComponentProps<typeof VoteTemplate> = {
    voteHeaderModuleProps: {
      headerProps: {
        title: "Vote",
        style: {
          text: "text-black font-bold text-[1.169rem] leading[1.648rem] text-black/85",
          container: "bg-white",
        },
      },
    },
    voteContentModuleProps: {
      bannerProps: {},
      voteFormProps: {
        setFormData,
      },
    },
  };
  return <VoteTemplate {...voteTemplateProps} />;
};

export default VoteContainer;
