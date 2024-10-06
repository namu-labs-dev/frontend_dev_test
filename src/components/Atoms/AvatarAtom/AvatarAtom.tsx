import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const AvatarAtom: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  return (
    <div className={`w-${size} h-${size} overflow-hidden rounded-full`}>
      <Image
        src={`/svgs/${src}`}
        alt={alt}
        width={size}
        height={size}
        className='rounded-full'
      />
    </div>
  );
};

export default AvatarAtom;
