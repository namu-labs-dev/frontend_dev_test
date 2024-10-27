import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  index: number;
};

const PartnersAtom = (props: Props) => {
  return (
    <div className='relative'>
      <Image
        src={props.icon}
        className='object-cover object-center '
        width={100}
        height={100}
        alt={`partner ${props.index} `}
      />
    </div>
  );
};

export default PartnersAtom;
