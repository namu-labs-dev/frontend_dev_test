import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  index: number;
};

const PartnersAtom = (props: Props) => {
  return (
    <div className='relative size-36'>
      <Image
        src={props.icon}
        className='relative object-center '
        fill
        alt={`partner ${props.index} `}
      />
    </div>
  );
};

export default PartnersAtom;
