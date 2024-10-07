"use client";

import { TestPageOneMessageComponent } from "~/components/Components/TestPageOneContentComponent/TestPageOneMessageComponent";
import { TestPageOneTemplate } from "~/components/Templates/TestPageOne/TestPageOneTemplate";

type Props = {
  messages: React.ComponentProps<
    typeof TestPageOneMessageComponent
  >["messages"];
  onClickRightIcon: () => void;
  onClickLeftIcon: () => void;
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCustomModalOpen: boolean;
  toolbarColor: string;
};

export const Testpage1Container = (props: Props) => {
  const TestPageOneTemplateProps: React.ComponentProps<
    typeof TestPageOneTemplate
  > = {
    TestPageOneHeaderProps: {
      headerProps: {
        title: "Proxima OS",
        color: props.toolbarColor,
        onClickLeftIcon: props.onClickLeftIcon,
        onClickRightIcon: props.onClickRightIcon,
      },
    },
    TestPageOneContentProps: {
      messages: props.messages,
      modalProps: {
        modalProps: {
          isModalOpen: props.isCustomModalOpen,
          setModalOpen: props.setIsCustomModalOpen,
        },
        title: "Transaction Processing",
        description:
          "Uploading your transaction to the node. please wait for a moment... \nThis may take up to 2 minutes.",
        iconUrl: "/assets/block.png",
      },
    },
    TestPageOneFooterProps: {
      footerProps: {
        onTabChange: () => console.log(`Tab clicked.`),
      },
    },
  };

  return <TestPageOneTemplate {...TestPageOneTemplateProps} />;
};
