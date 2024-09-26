import React from "react";
import SVGAtom from "../Atoms/SVGAtom/SVGAtom";
import { MessageList } from "../Components/MessageList/MessageList";
import { messages } from "../Modules/IsraelHome/list";

type Props = {
  setShowCustomModal: (value: boolean) => void;
};

export const Messages = (props: Props) => {
  const { setShowCustomModal } = props;

  return (
    <div className='flex h-full !min-h-screen flex-col bg-[#1F1F1F]'>
      <div className='px-5 pt-6'>
        <h2 className='text-[28px] font-semibold leading-[33px] text-white'>
          Messages
        </h2>
        <button className='pb-14 pt-7' onClick={() => setShowCustomModal(true)}>
          <SVGAtom iconName='logo' width={65} height={65} />
          <p className='mt-1.5 text-base leading-[19px] text-white'>Proxima</p>
        </button>
      </div>
      <div className='w-full flex-grow overflow-y-hidden rounded-t-[30px] bg-[#2C2D30] p-5'>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};
