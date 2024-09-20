import Modal from "~/components/Atoms/Modal/Modal";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
};

export const SettingsModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className='bg-kneutral-300 flex h-fit w-[24.5rem] flex-col items-center justify-center gap-4 p-6'>
        <p className='w-[80%] text-2xl font-bold text-white'>
          Transaction processing
        </p>

        <SVGAtom
          iconName={"processingIcon"}
          width={267}
          height={250}
          color='black'
        />

        <div className='font-pretendard text-[1rem] text-white'>
          <p>Uploading your transaction to the node.</p>
          <p>please wait for a moment...</p>
          <p>This may take up to 2 minutes.</p>
        </div>
      </div>
    </Modal>
  );
};
