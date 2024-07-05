import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  isSettingsClicked: (value: any) => void;
}

export const HeaderAtom: React.FC<Props> = ({ isSettingsClicked }) => {
  return (
    <Flex className='h-10 items-center justify-between'>
      <Link href='/covenant/testPage2'>
        <Image
          src='/svgs/option.svg'
          alt='Option Icon'
          width={18}
          height={18}
          className='cursor-pointer'
        />
      </Link>

      <div className=' text-sm text-white'>Proxima OS</div>

      <Image
        src='/svgs/settings.svg'
        alt=''
        width={18}
        height={18}
        className='cursor-pointer'
        onClick={() => isSettingsClicked((prev: boolean) => !prev)}
      />
    </Flex>
  );
};
