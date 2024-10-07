import Image from "next/image";
import Modal from "~/components/Atoms/Modal/Modal";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
  iconUrl: string;
};

export const TestPageOneLoadingModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className='flex h-fit w-[340px] flex-col items-center gap-4 bg-[#2C2D30] p-8 text-white'>
        <h1 className='font-inter whitespace-pre-wrap text-[24px] font-[700]'>
          {props.title}
        </h1>
        <Image height={100} width={267} src={props.iconUrl} alt='block icon' />
        <p className='font-pretendard whitespace-pre-wrap text-center text-[16px] leading-[26px]'>
          {props.description}
        </p>
      </div>
    </Modal>
  );
};
