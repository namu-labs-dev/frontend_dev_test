import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className='flex items-center justify-between bg-gray-900 px-4 py-3'>
      <div className='flex items-center'>
        <a className='text-white' href=''>
          <Image
            src='/svgs/headerIcon.svg'
            alt='copy'
            width={20}
            height={20}
            className='rounded-full'
          />
        </a>
      </div>
      <div className='flex-1 text-center'>
        <h1 className='text-lg font-semibold text-white'>Proxima OS</h1>
      </div>
      <div className='flex items-center'>
        <a className='text-white' href='#'>
          <Image
            src='/svgs/settingsIcon.svg'
            alt='settings'
            width={20}
            height={20}
            className='rounded-full'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
