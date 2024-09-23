import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import Modal from "./Modal";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
};

export const SettingsModal = (props: Props) => {
  return (
    <div>
      {props.modalProps.isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-[${props.modalProps.containerClassName}] bg-opacity-50`}
          onClick={() => props.modalProps.setModalOpen(false)}
          style={{
            zIndex: 50,
          }}
        >
          <div
            className={`mt-28 flex h-3/5 w-96 flex-col rounded-lg bg-[${props.modalProps.containerClassName}] p-6 shadow-md`}
          >
            <h2 className='mb-4 text-center text-2xl font-bold text-white'>
              Transaction Processing
            </h2>
            <SVGAtom iconName='shield' />
            <div className='!m-0 !p-0'>
              <p className='text-center text-white'>
                Uploading your transaction to the node. Please wait for a
                moment...
              </p>
              <p className='text-center text-white'>
                This may take up to 2 minutes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
