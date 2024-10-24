import Image from "next/image";
import React from "react";
import CreatorLayout from "../../Components/CreatorLayout/CreatorLayout";
import { type EmblaOptionsType } from "embla-carousel";

type Props = {
  name: string;
  width: number;
  icon: string;
};

const CreateQuestAvatarAtom = (props: Props) => {
  return (
    <div className='mx-auto flex items-center justify-center gap-x-4'>
      <CreatorLayout {...props}>
        <p className='text-xl  font-extrabold md:text-2xl'>{props.name}</p>
      </CreatorLayout>
    </div>
  );
};

export default CreateQuestAvatarAtom;
