import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-gray-800 py-4'>
      <nav className='mx-auto flex max-w-sm justify-around'>
        <a href=''>
          <div className='flex cursor-pointer flex-col items-center'>
            <Image
              src='/svgs/paymentIcon.svg'
              alt='payment'
              width={20}
              height={20}
              className='rounded-full'
            />
          </div>
        </a>

        <a href=''>
          <div className='flex cursor-pointer flex-col items-center'>
            <Image
              src='/svgs/messageIcon.svg'
              alt='payment'
              width={20}
              height={20}
              className='rounded-full'
            />
          </div>
        </a>
        <div className='flex cursor-pointer flex-col items-center'>
          <span className=' h-1 w-16 bg-green-500' />
          <a href=''>
            <div className='flex cursor-pointer flex-col items-center'>
              <Image
                src='/svgs/cardIcon.svg'
                alt='star'
                width={20}
                height={20}
                className='rounded-full'
              />
            </div>
          </a>
        </div>
        <a href=''>
          <div className='flex cursor-pointer flex-col items-center'>
            <Image
              src='/svgs/reloadIcon.svg'
              alt='star'
              width={20}
              height={20}
              className='rounded-full'
            />
          </div>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
