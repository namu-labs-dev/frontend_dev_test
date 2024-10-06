import { Button } from "antd";
import Modal from "~/components/Atoms/Modal/Modal";

type Props = {
  modalProps: {
    isModalOpen: boolean; // Ensure this matches your Modal component's expected prop
    setModalOpen: (isOpen: boolean) => void;
  };
  title: string;
  description: string;
  image: string
};

export const PageWithModalContentCustomModal = (props: Props) => {
  const { modalProps, title, description, image } = props;

  return (
    <Modal isModalOpen={modalProps.isModalOpen} setModalOpen={modalProps.setModalOpen}>
      <div className="flex h-fit w-80 flex-col gap-4 p-8">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <img src={image} className="w-full h-full object-contain"/>
        <p className="text-[16px] text-white">{description}</p>
      </div>
    </Modal>
  );
};
