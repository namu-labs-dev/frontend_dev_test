import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import CardLayout from "~/components/Components/CardLayout/CardLayout";
import ModalAtom from "../ModalAtom/ModalAtom";
import SecondaryBtn from "~/components/Components/SecondaryBtn/SecondaryBtn.tsx/SecondaryBtn";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type btnLabelProps = {
  cancel: string;
  close: string;
};

type Props = {
  btnLabel: btnLabelProps;
  cancelInfo: string;
  cancelTitle: string;
  width?: string;
  isModalOpen: boolean;
  cancelHandler: () => void;
  setModalOpen: (value: boolean) => void;
};

const CancelPurchasePopUpCardAtom = (props: Props) => {
  const { close, cancel } = props.btnLabel;
  return (
    <ModalAtom {...props}>
      <CardLayout {...props}>
        <div className='ml-[5%]'>
          <div className='flex flex-col  justify-center gap-3  '>
            <h1 className='text-left text-3xl font-extrabold'>
              {props.cancelTitle}
            </h1>
            <p className='md:text-md text-left'>{props.cancelInfo}</p>

            <div className='flex items-center gap-x-4'>
              <PrimaryBtn onClick={() => props.setModalOpen(false)}>
                {close}
              </PrimaryBtn>
              <SecondaryBtn onClick={props.cancelHandler}>
                {cancel}
              </SecondaryBtn>
            </div>
          </div>
        </div>
      </CardLayout>
    </ModalAtom>
  );
};

export default CancelPurchasePopUpCardAtom;
