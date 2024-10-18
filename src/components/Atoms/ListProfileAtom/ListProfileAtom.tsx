import Image from "next/image";
import React from "react";

type Props = {
  platform: string;
  profile: string;
  icon: string;
};

const ListProfileAtom = (props: Props) => {
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
        <div className=''>
          <h2 className='text-xl  font-medium md:text-lg'>{props.profile}</h2>
          <p className='text-xl  font-extrabold md:text-2xl'>
            {props.platform}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListProfileAtom;
