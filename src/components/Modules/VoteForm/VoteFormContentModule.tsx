import { Form, message } from "antd";
import { useState } from "react";
import moment from "moment";
import { FormContainer } from "~/components/Atoms/FormContainer/FormContainer";
import VoteFormCategory from "~/components/Components/VoteFormContent/VoteFormCategory";
import { VoteFormTitle } from "~/components/Components/VoteFormContent/VoteFormTitle";
import VoteFormUpload from "~/components/Components/VoteFormContent/VoteFormUpload";
import VoteFormDescription from "~/components/Components/VoteFormContent/VoteFormDescription";
import VoteFormDate from "~/components/Components/VoteFormContent/VoteFormDate";
import VoteFormSubmit from "~/components/Components/VoteFormContent/VoteFormSubmit";
import VoteFormAlert from "~/components/Components/VoteFormContent/VoteFormAlert";

type Props = {
  setFormData: (data: any) => void;
  formCategory: React.ComponentProps<typeof VoteFormCategory>;
  formTitle: React.ComponentProps<typeof VoteFormTitle>;
  formUplaod: React.ComponentProps<typeof VoteFormUpload>;
  formDescription: React.ComponentProps<typeof VoteFormDescription>;
  formStartDate: React.ComponentProps<typeof VoteFormDate>;
  formSubmit: React.ComponentProps<typeof VoteFormSubmit>;
};
type finishProps = {
  category?: string;
  title?: string;
  image?: string;
  description?: string;
  date?: string;
};
const VoteFormContentModule = (props: Props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: finishProps) => {
    setLoading(true);
    console.log("Form Values:", values);
    // Simulate API call
    setTimeout(() => {
      void message.success("Vote created successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <FormContainer>
      <VoteFormAlert />
      <Form
        layout='vertical'
        onFinish={onFinish}
        form={form}
        style={{
          // maxHeight: "80%",
          maxWidth: "80%",
          margin: "auto",
        }}
        initialValues={{
          start: moment("2024-09-06"),
          category: "Birthday AD",
        }}
      >
        <VoteFormCategory {...props.formCategory} />
        <VoteFormTitle {...props.formTitle} />
        <VoteFormUpload {...props.formUplaod} />
        <VoteFormDescription {...props.formDescription} />
        <VoteFormDate {...props.formStartDate} />
        <VoteFormSubmit {...props.formSubmit} />
      </Form>
    </FormContainer>
  );
};

export default VoteFormContentModule;
