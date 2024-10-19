import { useState } from "react";
import Image from "next/image";
import fanquest_logo from "../../../../public/pngs/fanquest_logo.png";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

const NavigationAtom = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isViewed, setIsViewed] = useState(true);

  return (
    <nav className='border-b-2 border-[#000000] p-4'>
      <div className='flex h-16 items-center justify-between md:h-[5.875rem]'>
        <div className='flex items-center space-x-4'>
          <div className='h-8 w-32 md:h-[2rem] md:w-[9.5rem]'>
            <Image
              src={fanquest_logo}
              alt="fanquest's logo"
              width={152}
              height={32}
              layout='responsive'
            />
          </div>
          <div className='hidden md:flex md:items-center md:space-x-4'>
            <a
              href='#'
              className='rounded-[0.625rem] bg-[#000000] px-3 pb-[0.625rem] pt-[0.5625rem]'
            >
              <p className='text-lg font-medium text-[#00FF00]'>Home</p>
            </a>
            <a href='#' className='text-lg font-medium md:max-lg:text-base'>
              Explore
            </a>
            <a href='#' className='text-lg font-medium md:max-lg:text-base'>
              Daily earn
            </a>
            <a href='#' className='text-lg font-medium md:max-lg:text-base'>
              Shop
            </a>
            <a href='#' className='text-lg font-medium md:max-lg:text-base'>
              SBT AirDrop
            </a>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <a
            href='#'
            className='hidden rounded-[0.625rem] bg-[#000000] px-5 py-1.5 md:block'
          >
            <p className='text-base font-medium text-[#00FF00]'>Create quest</p>
          </a>
          {isLoggedIn ? (
            <>
              <div className='relative'>
                <a
                  href='#'
                  className='inline-block text-2xl md:rounded-[0.625rem] md:bg-[rgb(0,0,0)] md:px-2 md:py-0.5'
                >
                  {isViewed && (
                    <div className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#00FF00] md:-right-[0.8125rem] md:-top-[0.625rem] md:h-[1.5625rem] md:w-[1.5625rem]'>
                      <p className='text-xs font-medium text-[#000000] md:text-sm'>
                        N
                      </p>
                    </div>
                  )}
                  <BellOutlined
                    className='rounded p-0.5 text-black hover:bg-[#00FF00] hover:text-black 
                   md:p-0 md:text-white md:hover:bg-transparent md:hover:text-[#00FF00]'
                    style={{ fontSize: "20px" }}
                  />
                </a>
              </div>
              <a
                href='#'
                className='inline-block text-2xl md:rounded-[0.625rem] md:bg-[rgb(0,0,0)] md:px-2 md:py-0.5'
              >
                <UserOutlined
                  className='rounded p-0.5 text-black hover:bg-[#00FF00] hover:text-black 
                   md:p-0 md:text-white md:hover:bg-transparent md:hover:text-[#00FF00]'
                  style={{ fontSize: "20px" }}
                />
              </a>
            </>
          ) : (
            <a
              href='#'
              className='hidden rounded-[0.625rem] bg-[#000000] px-5 py-1.5 md:inline-block'
            >
              <p className='text-base font-medium text-white'>Sign in</p>
            </a>
          )}
          <button className='inline-block text-2xl md:hidden'>
            <MenuOutlined
              className='rounded p-0.5 text-black hover:bg-[#00FF00] md:text-white'
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAtom;
