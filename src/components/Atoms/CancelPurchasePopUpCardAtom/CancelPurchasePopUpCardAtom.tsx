import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import CardLayout from "~/components/Components/CardLayout/CardLayout";
import ModalAtom from "../ModalAtom/ModalAtom";

type btnLabelProps = {
  cancel: string;
  close: string;
};
type Props = {
  btnLabel: btnLabelProps;
  cancelInfo: string;
  cancelTitle: string;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const CancelPurchasePopUpCardAtom = (props: Props) => {
  return (
    <ModalAtom {...props}>
      <CardLayout width='[55%]' height='' {...props}>
        <div className=' p-[5%]'>
          <div className='flex flex-col  justify-center gap-3  '>
            <h1 className='text-left text-2xl font-extrabold'>
              {props.gachaTitle}
            </h1>
            <p className='text-left'>{props.gachaMessage}</p>

            <button className=' flex w-[30%] justify-center gap-2 rounded-md border border-black bg-[#00FF00] px-2 py-2'></button>
            <button className=' flex w-[30%] justify-center gap-2 rounded-md border border-black px-2 py-2'></button>
          </div>
        </div>
      </CardLayout>
    </ModalAtom>
  );
};

export default CancelPurchasePopUpCardAtom;
