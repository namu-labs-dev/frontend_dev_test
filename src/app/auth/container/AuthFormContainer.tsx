import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthTemplate } from "~/components/Templates/Auth/AuthTemplate";

export const AuthFormContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});

  const authTemplateProps: React.ComponentProps<typeof AuthTemplate> = {
    authFormModuleProps: {
      setFormData,
    },
    authHeaderModuleProps: {
      title: "Sign Up",
      onClickIcon: undefined,
      navigationProps: undefined,
    },
  };

  return <AuthTemplate {...authTemplateProps} />;
};
