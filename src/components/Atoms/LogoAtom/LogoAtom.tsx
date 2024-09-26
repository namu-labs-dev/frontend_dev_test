import React from "react";
import Image from "next/image";

interface LogoProps {
  alt: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ alt, size = 40 }) => {
  return (
    <div className={`w-${size} h-${size}  overflow-hidden`}>
      <Image
        src='/svgs/logo.svg'
        alt={alt}
        width={size}
        height={size}
        className=''
      />
      <p className='mt-2 pl-[2%] text-lg text-white'>Proxima</p>
    </div>
  );
};

export default Logo;
