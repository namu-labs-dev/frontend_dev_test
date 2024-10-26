import { useState } from "react";
import Image from "next/image";
import fanquest_logo from "../../../../public/pngs/fanquest_logo.png";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { UserPopOutAtom } from "../PopOutAtom/UserPopOutAtom";
import { Popover, Button } from "antd";
import { NotificationPopOutAtom } from "../PopOutAtom/NotificationPopOutAtom";

type Props = {
  isLoggedIn: boolean;
  isViewed: boolean;
};

const NavigationAtom = (props: Props) => {
  return (
    <nav className='border-b-2 border-black px-[1.375rem] md:px-[2.625rem]'>
      <div className='flex h-16 items-center justify-between md:h-[5.875rem]'>
        <div className='flex items-center space-x-4'>
          <div className='h-8 w-32 md:h-[2rem] md:w-[8.5rem]'>
            <Image
              src={fanquest_logo}
              alt="fanquest's logo"
              width={152}
              height={32}
              layout='responsive'
            />
          </div>
          <div className='hidden md:items-center md:space-x-4 lg:flex'>
            <a
              href='#'
              className='rounded-common bg-black px-3 pb-[0.625rem] pt-[0.5625rem]'
            >
              <p className='text-lg font-medium text-primaryGreen'>Home</p>
            </a>
            <a href='#' className='text-lg font-medium text-[#262626]'>
              Explore
            </a>
            <a href='#' className='text-lg font-medium text-[#262626]'>
              Daily earn
            </a>
            <a href='#' className='text-lg font-medium text-[#262626]'>
              Shop
            </a>
            <a href='#' className='text-lg font-medium text-[#262626]'>
              SBT AirDrop
            </a>
          </div>
        </div>
        <div className='flex items-center justify-center space-x-1 min-[411px]:space-x-4'>
          <a
            href='#'
            className='hidden rounded-common bg-black px-5 py-1.5 lg:block'
          >
            <p className='text-base font-medium text-primaryGreen'>
              Create quest
            </p>
          </a>
          {props.isLoggedIn ? (
            <>
              <Popover
                className='relative'
                content={<NotificationPopOutAtom />}
                trigger='click'
                placement='bottomRight'
                arrow={false}
              >
                <button className='mb-2 inline-block text-2xl md:mb-0 md:rounded-common md:!bg-black md:!py-0.5 md:px-2 md:hover:translate-y-[-4px] md:hover:rounded-md md:hover:shadow-[2px_2px_0px_white,3px_3px_0px_black]'>
                  {props.isViewed && (
                    <div className='absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-primaryGreen px-[0.4375rem] py-0.5 md:-right-[0.8125rem] md:-top-[0.625rem] md:h-[1.5625rem] md:w-[1.5625rem]'>
                      <p className='text-xs font-medium text-black md:text-sm'>
                        N
                      </p>
                    </div>
                  )}
                  <BellOutlined
                    className='!relative !rounded !p-0.5 !text-black hover:!bg-primaryGreen 
                   hover:!text-black md:!p-0 md:!text-white md:hover:!bg-transparent md:hover:!text-primaryGreen'
                    style={{ fontSize: "20px" }}
                  />
                </button>
              </Popover>

              <Popover
                className=''
                content={<UserPopOutAtom />}
                trigger='click'
                placement='bottomRight'
                arrow={false}
              >
                <Button
                  className='inline-block bg-white text-2xl md:rounded-common md:!bg-black md:!px-2 md:!py-0.5 md:hover:!translate-y-[-4px] md:hover:!rounded-md md:hover:shadow-[2px_2px_0px_white,3px_3px_0px_black]'
                  style={{ backgroundColor: "transparent", border: "none" }}
                  type='text'
                >
                  <UserOutlined
                    className='rounded p-0.5 text-black hover:!bg-primaryGreen hover:text-black 
                   md:p-0 md:!text-white md:hover:!bg-transparent md:hover:!text-primaryGreen'
                    style={{ fontSize: "20px" }}
                  />
                </Button>
              </Popover>
            </>
          ) : (
            <a
              href='#'
              className='hidden rounded-common bg-black px-5 py-1.5 lg:inline-block'
            >
              <p className='text-base font-medium text-white'>Sign in</p>
            </a>
          )}
          <button className='flex items-center justify-center rounded p-1 text-2xl md:border-2 md:border-black md:hover:bg-primaryGreen lg:hidden'>
            <MenuOutlined
              className='rounded text-black hover:bg-primaryGreen md:text-white'
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAtom;
