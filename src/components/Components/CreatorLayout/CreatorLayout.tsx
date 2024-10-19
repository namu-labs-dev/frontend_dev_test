import React, { type PropsWithChildren } from "react";
import Image from "next/image";

type Props = {
  icon: string;
  width: string;
};

const CreatorLayout = (props: PropsWithChildren<Props>) => {
  return (
    <div className='mb-5 flex items-center gap-x-5 p-2 text-center'>
      <div className={`relative size-[${props.width}]`}>
        <Image
          className='relative object-cover object-center'
          fill
          src={props.icon}
          alt=''
        />
      </div>
      <>{props.children}</>
    </div>
  );
};

export default CreatorLayout;
