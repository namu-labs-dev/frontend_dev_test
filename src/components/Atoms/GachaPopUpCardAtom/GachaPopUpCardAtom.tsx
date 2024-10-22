import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import CardLayout from "~/components/Components/CardLayout/CardLayout";
import ModalAtom from "../ModalAtom/ModalAtom";
import SecondaryBtn from "~/components/Components/SecondaryBtn/SecondaryBtn.tsx/SecondaryBtn";

type Props = {
  gachaTitle: string | React.ReactNode;
  gachaMessage: string | React.ReactNode;
  gachaPoint?: string;
  iconName?: any;
  width?: string;
  onClick?: string;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const GachaPopUpCardAtom = (props: Props) => {
  return (
    <ModalAtom {...props}>
      <CardLayout {...props}>
        <div className='ml-[2%] flex flex-col   justify-center gap-3  '>
          <h1 className='text-left text-2xl font-extrabold'>
            {props.gachaTitle}
          </h1>
          <div className='text-left'>{props.gachaMessage}</div>

          {props.gachaPoint && (
            <SecondaryBtn width='30%'>
              {props.iconName ? (
                <SVGAtom iconName={props.iconName} className='size-5' />
              ) : (
                "🫣"
              )}{" "}
              <span className='ml-2'>{props.gachaPoint}</span>
            </SecondaryBtn>
          )}
        </div>
      </CardLayout>
    </ModalAtom>
  );
};

export default GachaPopUpCardAtom;
