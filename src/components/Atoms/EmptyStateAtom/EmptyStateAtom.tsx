import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  emptyText: string;
};

const EmptyStateAtom = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <div>
        <Image
          src={props.icon}
          alt=''
          width={100}
          height={100}
          className='relative object-cover object-center'
        />
      </div>
      <p>{props.emptyText}</p>
    </div>
  );
};

export default EmptyStateAtom;
