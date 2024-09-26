import Image from "next/image";
import { StaticImageData } from "next/image";
// import * as svgs from "public/svgs";

export type MessageProps = {
  id: string;
  image: StaticImageData;
  title: string;
  content: string;
  timestamp: string;
  isViewed: boolean;
};

type Props = {
  messages: MessageProps[];
};

export const MessageList = (props: Props) => {
  return (
    <ul className='space-y-1'>
      {props.messages.map((message) => (
        <li key={message.id} className='p-3'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center space-x-4'>
              <Image
                src={message.image}
                width={44}
                height={44}
                alt={message.title}
                className=''
              />
              <div>
                <h3 className='font-bold leading-[26px] text-white'>
                  {message.title}
                </h3>
                <p className='text-sm font-medium leading-[22px] text-[#BFBFBF] text-white'>
                  {message.content}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <p className=' text-sm font-normal leading-[17px] text-white'>
                {message.timestamp}
              </p>
              {message.isViewed && (
                <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4D4F]'>
                  <p className='text-xs font-normal text-white'>N</p>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
