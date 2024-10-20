import Image from "next/image";

import React from "react";
import CreatorLayout from "../../Components/CreatorLayout/CreatorLayout";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {

  avatar: StaticImageData;
  creatorName: string;

};

const CreatorWrapAtom = (props: Props) => {
  return (

    <div className='flex w-full max-w-md justify-between'>
      <div className='flex items-center justify-center space-x-2'>
        <div className='relative h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12'>
          <Image
            src={avatar}
            layout='fill'
            objectFit='cover'
            className='rounded-full'
            alt={`${props.creatorName}'s avatar`}
          />
        </div>
        <p className='text-sm font-medium leading-tight sm:text-base md:text-lg'>
          Creator name
        </p>

      </div>
    </div>
  );
};

export default CreatorWrapAtom;

