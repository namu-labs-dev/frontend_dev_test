import React, { useState } from "react"
import { PageWithMessageTemplate } from "~/components/Templates/PageWithMessage/PageWithMessageTemplate";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";
import ModalStore from "~/store/ModalStore";

export const PageWithMessagePageContainer = () => {

  //We will be using snapshot modal here since the text used here is static
  //We will also be using custom drawer here since the texts are dynamic
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  
  
  const PageWithMessageTemplateProps: React.ComponentProps<typeof PageWithMessageTemplate> = {
    homeHeaderModuleProps: {
      title: "Proxima OS",
      bg: "#1F1F1F",
      fontWeight: "font-normal", //The font weight should be written in tailwind code
      fontSize: "text-xl", //The font size should be written in tailwind code
      fontColor: "text-[#BFBFBF]", //The font color should be written in tailwind code
      onClickLeftIcon: () => {},
      onClickRightIcon: () => {
        ModalStore.open("TitleAndContent", {
          TitleAndContent: {
            title: "Transaction Processing",
            description: "Uploading your transaction to the node.",
          },
        })
      },
    },
    messagePageModuleProps: {
      drawerProps: {
        isDrawerOpen: true
      }
    },
    homeFooterModuleProps: {
      title: "Hello"
    }
  }
  
  return <PageWithMessageTemplate {...PageWithMessageTemplateProps} />;
}