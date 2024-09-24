import React from "react";
import SVGAtom from "../Atoms/SVGAtom/SVGAtom";
import { MessageList } from "../Components/MessageList/MessageList";
import eth from "../../../public/pngs/eth.png";
import nvir from "../../../public/pngs/nvir.png";

const messages = [
  {
    id: "1",
    image: eth,
    title: "ETH",
    content: "User: namulabs is fantasic company...",
    timestamp: "08:43 PM",
    isViewed: true,
  },
  {
    id: "2",
    image: nvir,
    title: "Nvir",
    content: "User: namulabs is fantasic company...",
    timestamp: "08:42 AM",
    isViewed: false,
  },
];

export const Messages = () => {
  return (
    <div className='flex h-full !min-h-screen flex-col bg-[#1F1F1F]'>
      <div className='px-5 pt-6'>
        <h2 className='text-[28px] font-semibold leading-[33px] text-white'>
          Messages
        </h2>
        <div className='pb-14 pt-7'>
          <SVGAtom iconName='logo' width={65} height={65} />
        </div>
      </div>
      <div className='w-full flex-grow overflow-y-hidden rounded-t-[30px] bg-[#2C2D30] p-5'>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};
