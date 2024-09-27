import { Button } from "antd";
import Modal from "~/components/Atoms/Modal/Modal";
import Image from "next/image";
import modalIMG from "@assets/modal.png";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
};

export const PageWithModalContentCustomModal = (props: Props) => {
  return (
    <Modal
      {...props.modalProps}
      containerClassName='shadow-none bg-transparent'
    >
      <div className='flex h-fit w-80 flex-col gap-4 rounded-[14px] bg-[#2C2D30] p-8'>
        {/* Title */}
        <h1 className='text-center text-2xl text-white'>
          Transaction processing
        </h1>

        {/* Image Section */}
        <div className='h-[154px] w-full shadow-none'>
          {/* Image  */}
          <Image
            src={modalIMG}
            alt='Processing Alt'
            className='h-full w-full object-cover'
          />
        </div>

        {/* Description Text */}
        <p className='text-center text-base text-white'>
          Uploading your transaction to the node. please wait for a moment...
          This may take up to 2 minutes.
        </p>
      </div>
    </Modal>
  );
};
