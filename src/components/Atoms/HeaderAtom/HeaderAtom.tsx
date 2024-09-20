import { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import Image from "next/image";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = ({
  title,
  onClickLeftIcon,
  onClickRightIcon,
}: Props) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#1F1F1F] text-white'>
      {onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={onClickLeftIcon}
        >
          <SVGAtom iconName='atomLeft' width={23} height={23} color='white' />
        </div>
      )}

      <div>{title}</div>

      {onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={handleSettingsClick}
        >
          <SettingOutlined className='!text-gray-header cursor-pointer text-[20px]' />
        </div>
      )}

      {isSettingsVisible && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='flex h-1/2 w-[450px] flex-col items-center justify-center rounded bg-[#2C2D30] p-4 text-white shadow-lg'>
            <h1 className='mb-2 text-2xl font-semibold'>
              Transaction <br /> Processing
            </h1>
            <Image
              src='/images/shield.svg'
              width={300}
              height={80}
              alt='Shield'
            />
            <p className='text-center'>
              Uploading your transaction to the node
            </p>
            <p>Please wait for a moment...</p>
            <p>This may take up to 2 minutes.</p>
          </div>
        </div>
      )}
    </div>
  );
};
