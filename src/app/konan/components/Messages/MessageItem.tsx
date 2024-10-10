import React from "react";

interface MessageItemProps {
  name: string;
  message: string;
  time: string;
  icon: string;
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  message,
  time,
  icon,
}) => {
  return (
    <div className='flex items-center p-6'>
      <div className='flex h-8 w-8 items-center justify-center rounded-full'>
        <img src={`/icons/${icon}.png`} className='h-8 w-8' alt={icon} />
      </div>
      <div className='ml-2 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='font-semibold text-white'>{name}</span>
          <span className='text-sm text-[#8E8E93]'>{time}</span>
        </div>
        <p className='mt-1 truncate text-sm text-[#8E8E93]'>{message}</p>
      </div>
      {name === "ETH" && (
        <div className='relative ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500'>
          <span className='absolute text-xs text-white'>N</span>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
