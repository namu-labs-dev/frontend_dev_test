import { useRouter } from "next/navigation";
import { useState } from "react";
import VoteFormTemplate from "~/components/Templates/VoteForm/VoteFormTemplate";

export const VoteFormContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const voteFormTemplateProps: React.ComponentProps<typeof VoteFormTemplate> = {
    formHeaderModuleProps: {
      title: "Vote",
    },
    formContentModuleProps: {
      formCategory: {
        name: "category",
        label: "Category",
        category: [
          { value: "birthday AD", text: "Birthday AD" },
          { value: "announcement", text: "Announcement" },
          { value: "event", text: "Event" },
        ],
      },
      formTitle: {
        label: "Vote Title",
        name: "title",
        placeholder: "Title",
      },
      formUplaod: {
        label: "Image",
        name: "image",
        icon: "camera",
      },
      formDescription: {
        label: "Description",
        name: "description",
        placeholder: "Please write down a description of the event",
      },
      formStartDate: {
        label: "Start",
        name: "start",
      },
      formSubmit: {
        submit: "Create Vote",
      },
      setFormData,
    },
  };

  return <VoteFormTemplate {...voteFormTemplateProps} />;
};
