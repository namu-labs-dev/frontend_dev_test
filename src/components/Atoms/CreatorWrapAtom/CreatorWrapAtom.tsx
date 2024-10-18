import Image from "next/image";
import React from "react";

type Props = {
  badgeCount: number;
  username: string;
  icon: string;
};

const CreatorWrapAtom = (props: Props) => {
  return (
    <div className='mx-auto flex  justify-center gap-x-4'>
      <div className='mb-5 flex items-center gap-x-5 p-2 text-center'>
        <div className='relative size-[44px]'>
          <Image
            className='relative object-cover object-center'
            fill
            src={props.icon}
            alt=''
          />
        </div>
        <div className='flex items-center gap-x-2  text-left'>
          <h2 className='md:text-md font-medium'>{props.username}</h2>
          <button className='rounded-lg border border-black px-3 py-1'>
            + {props.badgeCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorWrapAtom;
