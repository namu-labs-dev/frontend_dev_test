import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  icon: string;
};

const CreatorCarouselAvatarAtom = (props: Props) => {
  return (
    <div className='mx-auto flex items-center justify-center gap-x-4'>
      <div className='flex flex-col gap-y-2 p-2 text-center'>
        <div className='relative size-[100px]  md:size-[176px]'>
          <Image
            className='relative object-cover object-center'
            fill
            src={props.icon}
            alt=''
          />
        </div>
        <p className='mx-auto w-[70%] font-medium md:w-full md:text-xl'>
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default CreatorCarouselAvatarAtom;
