import { useState } from "react"
import { PageWithVoteFormTemplate } from "~/components/Templates/PageWithVoteForm/PageWithVoteFormTemplate";

export const PageWithVoteFormContainer = () => {
 
  const [voteFormData, setVoteFormData] = useState<any>([]);
  
  const votePageWithFormTemplateProps: React.ComponentProps<typeof PageWithVoteFormTemplate> = {
    pageWithVoteFormHeaderModuleProps: {
      title: "Vote",
      bg: "#FFFFFF",
      fontWeight: "font-bold", //The font weight should be written in tailwind code.
      fontSize: "text-xl"
    },
    pageWithVoteFormFormModuleProps: {
      setVoteFormData,
    },
  }
  
  return <PageWithVoteFormTemplate {...votePageWithFormTemplateProps} />;
}