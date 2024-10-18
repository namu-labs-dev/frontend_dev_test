import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import CardLayout from "~/components/Components/CardLayout/CardLayout";
import ModalAtom from "../ModalAtom/ModalAtom";
import SecondaryBtn from "~/components/Components/SecondaryBtn/SecondaryBtn.tsx/SecondaryBtn";

type btnLabelProps = {
  cancel: string;
  close: string;
};

type Props = {
  btnLabel: btnLabelProps;
  cancelInfo: string;
  cancelTitle: string;
  isModalOpen: boolean;
  cancelHandler: () => void;
  setModalOpen: (value: boolean) => void;
};

const CancelPurchasePopUpCardAtom = (props: Props) => {
  const { close, cancel } = props.btnLabel;
  return (
    <ModalAtom containerClassName='' {...props}>
      <CardLayout {...props}>
        <div className=''>
          <div className='flex flex-col  justify-center gap-3  '>
            <h1 className='text-left text-3xl font-extrabold'>
              {props.cancelTitle}
            </h1>
            <p className='md:text-md text-left'>{props.cancelInfo}</p>

            <div className='flex items-center gap-x-4'>
              <button
                onClick={() => props.setModalOpen(false)}
                className='flex justify-center gap-2 rounded-md border border-black px-2 py-1 md:w-[20%] md:px-2 md:text-lg'
              >
                {close}
              </button>

              <SecondaryBtn
                onClick={props.cancelHandler}
                buttonLabel={cancel}
              />
            </div>
          </div>
        </div>
      </CardLayout>
    </ModalAtom>
  );
};

export default CancelPurchasePopUpCardAtom;
