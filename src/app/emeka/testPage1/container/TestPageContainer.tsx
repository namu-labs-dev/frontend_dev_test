import { useRouter } from "next/navigation";
import { useState } from "react";
import { message } from "antd";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";
import ModalStore from "~/store/ModalStore";

export const PageWithModalContainer = () => {
  const router = useRouter();
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(true);

  const headerRightIconClicked = () => {
    void message.info("can't go to Settings");
  };
  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof PageWithModalTemplate
  > = {
    pageWithModalHeaderModuleProps: {
      title: "Proxima OS",
      onClickLeftIcon: () => router.back(),
      onClickRightIcon: headerRightIconClicked,
    },
    pageWithModalContentModuleProps: {
      onOpenSnapshotModal: () =>
        ModalStore.open("TitleAndContent", {
          TitleAndContent: {
            title: "Modal Title",
            description: "Modal Content",
          },
        }),
      modalProps: {
        modalProps: {
          isModalOpen: isCustomModalOpen,
          setModalOpen: setIsCustomModalOpen,
        },
        title: "Transaction Processing",
        description:
          "Uploading your transaction to the node. please wait for a moment...This may take up to 2 minutes",
      },
    },
    pageInfoProps: {
      title: "Messages",
      sampleLinks: [],
    },
  };

  return <PageWithModalTemplate {...pagewithmodalTemplateProps} />;
};
