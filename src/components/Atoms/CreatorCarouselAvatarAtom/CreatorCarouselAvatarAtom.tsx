import Image from "next/image";
import React from "react";

type creator = {
  name: string;
  icon: string;
};

type Props = {
  creators: creator[];
};
const CreatorCarouselAvatarAtom = (props: Props) => {
  return (
    <div className='flex items-center justify-center gap-x-4'>
      {props.creators.map((creator, indx) => (
        <div key={indx} className='flex flex-col gap-y-2 text-center'>
          <div className='relative size-[100px]  md:size-[176px]'>
            <Image
              className='relative object-cover object-center'
              fill
              src={creator.icon}
              alt=''
            />
          </div>
          <p>{creator.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CreatorCarouselAvatarAtom;
