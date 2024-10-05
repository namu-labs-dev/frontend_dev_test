import { Button } from "antd";
import { ModalContainer } from "~/components/Atoms/ModalContainer/ModalContainer";
import ModalStore from "~/store/ModalStore";
import Image from "next/image";

export type TitleAndContentModalProps = {
  title: string;
  description: string;
};

export const TitleAndContentModal = () => {
  const { data } = ModalStore.state;
  const { TitleAndContent } = data ?? {};

  /*
    I could actually hard code the values here, but i think it is preferable to leave them as is
  */
  return (
    <ModalContainer>
      <div className="flex h-fit w-80 flex-col text-[#FFFFFF] p-8 bg-[#2C2D30]">
        <h1 className="font-semibold text-2xl mb-4">{TitleAndContent?.title}</h1>
        <Image
          src={"/images/TransactionImage.png"}
          width={300}
          height={50}
          alt="Image showing transaction icon"
        />
        <p className="font-medium mt-4">{TitleAndContent?.description}</p>
        <p className="font-medium">Please wait for a moment...</p>
        <p className="font-medium">This may take up to 2 minutes</p>
      </div>
    </ModalContainer>
  );
};
