import { useRouter } from "next/navigation";
import { useState } from "react";
import { message } from "antd";
import { HomeWithModalTemplate } from "~/components/Templates/HomeWithModalTemplate/HomeWithModalTemplate";
import ModalStore from "~/store/ModalStore";

export const HomeWithModalContainer = () => {
  const router = useRouter();
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(true);

  const headerRightIconClicked = () => {
    void message.info("can't go to Settings");
  };
  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof HomeWithModalTemplate
  > = {
    homeWithModalHeaderModuleProps: {
      title: "Proxima OS",
      onClickLeftIcon: () => router.back(),
      onClickRightIcon: headerRightIconClicked,
    },
    homeWithModalContentModuleProps: {
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
      cardProps: [
        {
          exchange: "ETH",
          message: "User: namulabs is fantasic company...",
          user: "N",
          timeStamp: "08:43",
          src: "eth",
        },
        {
          exchange: "Nvir",
          message: "User: namulabs is fantasic company...",
          user: "N",
          timeStamp: "08:42",
          src: "nvr",
        },
      ],
      pageInfoProps: {
        title: "Messages",
      },
    },
    homeWithModalFooterModuleProps: {
      navigation: [
        { path: "#!", icon: "dollarCircle", label: "Home" },
        { path: "/#!", icon: "message", label: "Messages" },
        { path: "/varysoft/testPage1", icon: "wallet", label: "Profile" },
        { path: "/#!", icon: "history", label: "History" },
      ],
    },
  };

  return <HomeWithModalTemplate {...pagewithmodalTemplateProps} />;
};
