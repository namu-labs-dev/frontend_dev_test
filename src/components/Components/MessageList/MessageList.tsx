import Image from "next/image";
import { StaticImageData } from "next/image";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { Badge } from "antd";
// import * as svgs from "public/svgs";

type Message = {
  id: string;
  image: StaticImageData;
  title: string;
  content: string;
  timestamp: string;
  isViewed: boolean;
};

type Props = {
  messages: Message[];
};

export const MessageList = (props: Props) => {
  return (
    <ul className='space-y-1'>
      {props.messages.map((message) => (
        <li key={message.id} className='p-3'>
          <div className='relative flex items-center space-x-4'>
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
            <p className='absolute right-0 top-0 text-sm font-normal leading-[17px] text-white'>
              {message.timestamp}
            </p>
            {/* {message.isViewed && (
              <Badge
                count={"N"}
                color='#f5222d'
                className='absolute right-0 top-0'
              />
            )} */}
          </div>
        </li>
      ))}
    </ul>
  );
};
