import React, { useState } from "react";
import Image from "next/image";
import fanquest_logo from "../../../../public/pngs/fanquest_logo.png";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { UserPopOutAtom } from "../PopOutAtom/UserPopOutAtom";
import { Popover, Button } from "antd";
import { NotificationPopOutAtom } from "../PopOutAtom/NotificationPopOutAtom";
import { MobilePopOutAtom } from "../PopOutAtom/MobilePopOutAtom";
import { IconHpButtonAtom } from "../HPButtonAtom/IconHpButtonAtom";
import DailyEarnMenuAtom from "../DailyEarnMenuAtom/DailyEarnMenuAtom";

type Props = {
  creators: any;
  notifications: any;
  HPUserIconButtonProps: React.ComponentProps<typeof IconHpButtonAtom>;
  HpBellIconProps: React.ComponentProps<typeof IconHpButtonAtom>;
  DailyEarnMenuProps: React.ComponentProps<typeof DailyEarnMenuAtom>;
};

const NavigationAtom = (props: Props) => {
  const [activeLink, setActiveLink] = useState("home"); // To track which link is active

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const popoverInnerStyle = {
    padding: 0,
  };
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isViewed, setIsViewed] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const addedClickedClass =
    "rounded-[0.625rem] text-primaryGreen bg-[#000000] px-3 pb-[0.625rem] pt-[0.5625rem] text-[#00FF00]";

  return (
    <nav className='border-b-2 border-[#000000] p-4 px-[24px] py-[22px] min-[600px]:px-[60px]'>
      <div className='flex items-center justify-between md:h-[5.875rem]'>
        <div className='flex items-center space-x-4'>
          <div className='h-[32px] w-[152px] md:h-[2rem] md:w-[9.5rem]'>
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
              onClick={() => handleLinkClick("home")}
              className={`${
                activeLink === "home" ? addedClickedClass : "text-[#262626]"
              } text-lg font-medium md:max-lg:text-base`}
            >
              <p className='text-lg font-medium'>Home</p>
            </a>
            <a
              href='#'
              onClick={() => handleLinkClick("explore")}
              className={`${
                activeLink === "explore" && addedClickedClass
              } text-lg font-medium text-[#262626] md:max-lg:text-base`}
            >
              Explore
            </a>
            <Popover
              className='relative'
              content={<DailyEarnMenuAtom {...props.DailyEarnMenuProps} />}
              trigger='click'
              placement='bottomLeft'
              arrow={false}
              overlayInnerStyle={{
                ...popoverInnerStyle,
              }}
            >
              <button
                onClick={() => handleLinkClick("dailyEarn")}
                className={`${
                  activeLink === "dailyEarn"
                    ? addedClickedClass
                    : "text-[#262626]"
                } text-lg font-medium md:max-lg:text-base`}
              >
                Daily earn
              </button>
            </Popover>
            <a
              href='#'
              onClick={() => handleLinkClick("shop")}
              className={`${
                activeLink === "shop" ? addedClickedClass : "text-[#262626]"
              } text-lg font-medium md:max-lg:text-base`}
            >
              Shop
            </a>
            <a
              href='#'
              onClick={() => handleLinkClick("airdrop")}
              className={`${
                activeLink === "airdrop" ? addedClickedClass : "text-[#262626]"
              } text-lg font-medium md:max-lg:text-base`}
            >
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
              <Popover
                content={<NotificationPopOutAtom />}
                trigger='click'
                placement='bottomRight'
                arrow={false}
                overlayInnerStyle={{
                  ...popoverInnerStyle,
                }}
              >
                <div className='custom-wrapper-class'>
                  <IconHpButtonAtom {...props.HpBellIconProps}>
                    {isViewed && (
                      <div className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#00FF00] md:-right-[0.8125rem] md:-top-[0.625rem] md:h-[1.5625rem] md:w-[1.5625rem]'>
                        <p className='text-xs font-medium text-[#000000] md:text-sm'>
                          N
                        </p>
                      </div>
                    )}
                  </IconHpButtonAtom>
                </div>
              </Popover>

              <Popover
                content={<UserPopOutAtom />}
                trigger='click'
                placement='bottomRight'
                arrow={false}
                overlayInnerStyle={{
                  ...popoverInnerStyle,
                }}
              >
                <div className='customWrapper-class'>
                  <IconHpButtonAtom {...props.HPUserIconButtonProps} />
                </div>
              </Popover>
            </>
          ) : (
            <a
              href='#'
              className='hidden rounded-[0.625rem] bg-[#000000] px-5 py-1.5 md:inline-block'
            >
              <p className='text-base font-medium text-white'>Sign in</p>
            </a>
          )}
          <Popover
            className='relative'
            content={<MobilePopOutAtom />}
            trigger='click'
            placement='bottomRight'
            arrow={false}
            overlayInnerStyle={{
              ...popoverInnerStyle,
            }}
          >
            <button className='padding-[4px] inline-block h-[46px] w-[46px] rounded-[10px] text-2xl hover:bg-[#00FF00] md:hidden'>
              <MenuOutlined
                className='text-black md:text-white'
                style={{ fontSize: "20px" }}
              />
            </button>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAtom;
