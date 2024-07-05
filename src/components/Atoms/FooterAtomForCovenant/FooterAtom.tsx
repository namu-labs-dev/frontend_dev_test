"use-client";

import { Flex } from "antd";
import Image from "next/image";
import { useState } from "react";

interface FooterIcon {
  id: number;
  src: string;
}

const footerItems: FooterIcon[] = [
  { id: 1, src: "/svgs/dollar.svg" },
  { id: 2, src: "/svgs/chat.svg" },
  { id: 3, src: "/svgs/wallet.svg" },
  { id: 4, src: "/svgs/history.svg" },
];

export const FooterAtom = () => {
  const [footerItem, setFooterItem] = useState<number>(3);

  const handleSelectedFooterItem = (id: number) => {
    setFooterItem(id);
  };

  return (
    <Flex className='h-full items-center justify-between'>
      {footerItems.map((item, index) => (
        <div key={item.id} className='relative'>
          {" "}
          {/* Add key prop here */}
          {footerItem === index + 1 && (
            <div
              style={{
                backgroundColor: "rgba(0, 236, 151, 1)",
                width: "100%",
                height: "2px",
                position: "absolute",
                top: "-25px",
              }}
            ></div>
          )}
          <Image
            src={item.src}
            alt='footer item'
            width={20}
            height={20}
            className='cursor-pointer'
            key={item.id} // Add key prop here again
            onClick={() => handleSelectedFooterItem(item.id)}
          />
        </div>
      ))}
    </Flex>
  );
};
