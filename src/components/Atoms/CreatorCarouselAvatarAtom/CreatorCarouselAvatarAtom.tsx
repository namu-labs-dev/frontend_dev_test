import Image from "next/image";
import React from "react";

type Props = {
  creatorAvatar: string;
  creatorName: string;
};
const CreatorCarouselAvatarAtom = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-y-2'>
        <div className='relative size-[100px] border border-black md:size-[176px]'>
          <Image
            className='relative object-cover object-center'
            fill
            src={props.creatorAvatar}
            alt=''
          />
        </div>
        <p>{props.creatorName}</p>
      </div>
    </div>
  );
};

export default CreatorCarouselAvatarAtom;
