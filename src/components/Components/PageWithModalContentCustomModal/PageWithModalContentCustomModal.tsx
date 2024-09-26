import { Button } from "antd";
import Modal from "~/components/Atoms/Modal/Modal";
import NodeAtom from "~/components/Atoms/NodeAtom/NodeAtom";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
};

export const PageWithModalContentCustomModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className='flex  h-full flex-col gap-4 rounded-t-3xl bg-[#2C2D30] p-10 '>
        <h1 className='Capitalize mx-auto w-[80%] font-sans text-2xl font-bold text-white'>
          {props.title}
        </h1>
        <NodeAtom />
        <p className='text-white'>{props.description}</p>
      </div>
    </Modal>
  );
};
