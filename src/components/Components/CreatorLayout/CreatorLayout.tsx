import React, { type PropsWithChildren } from "react";
import Image from "next/image";

type Props = {
  icon: string;
  width: number;
};

const CreatorLayout = (props: PropsWithChildren<Props>) => {
  return (
    <div className='mb-5 flex items-center gap-x-5 p-2 text-center'>
      <div className={`relative`}>
        <Image
          className='relative object-cover object-center'
          width={props.width}
          height={props.width}
          src={props.icon}
          alt=''
        />
      </div>
      <>{props.children}</>
    </div>
  );
};

export default CreatorLayout;
