import Image from "next/image";
import React from "react";
import CreatorLayout from "../../Components/CreatorLayout/CreatorLayout";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  btnText: string;
  creatorName: string;
  icon: string;
  width: number;
  onClick: () => void;
};

const CreatorWrapAtom = (props: Props) => {
  return (
    <div className='mx-auto flex  justify-center gap-x-4'>
      <CreatorLayout {...props}>
        <h2 className='md:text-md font-medium'>{props.creatorName}</h2>
      </CreatorLayout>
      <div className='ml-[10%] mt-2'>
        <PrimaryBtn onClick={props.onClick}> {props.btnText}</PrimaryBtn>
      </div>
    </div>
  );
};

export default CreatorWrapAtom;
