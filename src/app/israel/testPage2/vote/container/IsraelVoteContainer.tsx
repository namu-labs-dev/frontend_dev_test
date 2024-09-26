import { useRouter } from "next/navigation";
import { useState } from "react";
import { IsraelPageWithFormTemplate } from "~/components/Templates/PageWithForm/IsraelPageWithFormTemplate";

export const IsraelVoteContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});

  const pagewithformTemplateProps: React.ComponentProps<
    typeof IsraelPageWithFormTemplate
  > = {
    pageWithFormHeaderModuleProps: {
      title: "Vote",
      backgroundColor: "#FFFFFF",
      textColor: "#000000D9",
    },
    pageWithFormFormModuleProps: {
      setFormData,
    },
  };

  return <IsraelPageWithFormTemplate {...pagewithformTemplateProps} />;
};
