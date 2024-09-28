import Image from "next/image";
import React from "react";

const NodeAtom: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src='/svgs/node.svg' width={300} height={300} alt='node-img' />
    </div>
  );
};

export default NodeAtom;
