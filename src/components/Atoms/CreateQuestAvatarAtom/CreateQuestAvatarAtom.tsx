import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  icon: string;
};

const CreateQuestAvatarAtom = (props: Props) => {
  return (
    <div className='mx-auto flex items-center justify-center gap-x-4'>
      <div className='mb-5 flex items-center gap-x-5 p-2 text-center'>
        <div className='relative size-[100px]'>
          <Image
            className='relative object-cover object-center'
            fill
            src={props.icon}
            alt=''
          />
        </div>
        <p className='text-xl  font-extrabold md:text-2xl'>{props.name}</p>
      </div>
    </div>
  );
};

export default CreateQuestAvatarAtom;
