import { useState } from "react";
import Image from "next/image";
import fanquest_logo from "../../../../public/pngs/fanquest_logo.png";
import { BellOutlined } from "@ant-design/icons";

const NavigationAtom = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className='border-b-2 border-[#000000] p-4'>
      <div className='flex h-[5.875rem] items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='h-[2rem] w-[9.5rem]'>
            <Image src={fanquest_logo} alt="fanquest's logo" />
          </div>
          <a
            href='#'
            className='rounded-[0.625rem] bg-[#000000] px-3 pb-[0.625rem] pt-[0.5625rem]'
          >
            <p className='text-lg font-medium text-[#00FF00]'>Home</p>
          </a>
          <a href='#' className='text-lg font-medium'>
            Explore
          </a>
          <a href='#' className='text-lg font-medium'>
            Daily earn
          </a>
          <a href='#' className='text-lg font-medium'>
            Shop
          </a>
          <a href='#' className='text-lg font-medium'>
            SBT AirDrop
          </a>
        </div>
        <div className='flex items-center space-x-4'>
          <a href='#' className='rounded-[0.625rem] bg-[#000000] px-5 py-1.5'>
            <p className='text-base font-medium text-[#00FF00]'>Create quest</p>
          </a>
          {isLoggedIn ? (
            <>
              <a
                href='#'
                className='rounded-[0.625rem] bg-[rgb(0,0,0)] p-2 text-2xl'
              >
                <BellOutlined />
              </a>
              <a href='#' className='hover:text-gray-300'>
                profile
              </a>
            </>
          ) : (
            <a href='#' className='rounded-[0.625rem] bg-[#000000] px-5 py-1.5'>
              <p className='text-base font-medium text-white'>Sign in</p>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationAtom;
