import Image from "next/image";
import React from "react";
import CreatorLayout from "../../Components/CreatorLayout/CreatorLayout";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  badgeCount: number;
  username: string;
  icon: string;
  width: string;
  onClick: () => void;
};

const CreatorLabelGroupAtom = (props: Props) => {
  return (
    <div className='mx-auto flex  justify-center gap-x-4'>
      <CreatorLayout {...props}>
        <div className='mt-2 flex items-center gap-x-5  text-left'>
          <h2 className='md:text-md ml-3 font-medium'>{props.username}</h2>
          <PrimaryBtn onClick={props.onClick}>+ {props.badgeCount}</PrimaryBtn>
        </div>
      </CreatorLayout>
    </div>
  );
};

export default CreatorLabelGroupAtom;
