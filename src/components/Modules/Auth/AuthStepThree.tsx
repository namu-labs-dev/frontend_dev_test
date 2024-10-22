import { Form } from "antd";
import { AuthTitle } from "./AuthTitle";

type AuthStepThreeProps = {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
};

export const AuthStepThree = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
}: AuthStepThreeProps) => {
  const onFinish = (values: any) => {
    updateFormData(values); // Update formData with step 2 data
    nextStep(); // Go to next step (or success page)
  };

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      initialValues={formData}
      className='flex min-h-screen max-w-[600] flex-col items-center justify-center bg-[#FAFAFA] px-5 py-5'
    >
      <AuthTitle />
    </Form>
  );
};
