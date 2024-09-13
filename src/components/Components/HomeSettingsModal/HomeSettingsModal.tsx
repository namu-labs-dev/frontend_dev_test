import React from "react";
import Modal from "~/components/Atoms/Modal/Modal";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { TransactionStatus } from "~/types";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  transactionStatus: TransactionStatus;
};

const HomeSettingsModal = (props: Props) => {
  console.log("i RENDERED");
  return (
    <Modal {...props.modalProps}>
      <div className='bg-kneutral-300 flex h-fit w-[21.25rem] flex-col items-center justify-center gap-4 p-[1.25rem]'>
        {props.transactionStatus == "processing" && (
          <p className='w-[80%] text-2xl font-bold text-white'>
            Transaction processing
          </p>
        )}

        <SVGAtom iconName={"tensor"} width={267} height={250} color='black' />

        <div className='font-pretendard text-[1rem] text-white'>
          <p>Uploading your transaction to the node.</p>
          <p>please wait for a moment...</p>
          <p>This may take up to 2 minutes.</p>
        </div>
      </div>
    </Modal>
  );
};

export default HomeSettingsModal;
