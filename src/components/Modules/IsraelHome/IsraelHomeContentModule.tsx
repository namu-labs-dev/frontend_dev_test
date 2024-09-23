import SVGAtom from "../../Atoms/SVGAtom/SVGAtom";
import { MessageList } from "~/components/Components/MessageList/MessageList";
import * as svgs from "public/svgs";
import eth from "./../../../../public/pngs/eth.png";
import nvir from "./../../../../public/pngs/nvir.png";

// type Message = {
//   id: string;
//   image?: keyof typeof svgs;
//   title: string;
//   content: string;
//   timestamp: string;
// };

// type Props = {
//   messages: Message[];
// };

type Props = {
  onClick: (isTrue: boolean) => void;
};

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

export const IsraelHomeContentModule = (props: Props) => {
  // console.log(props);

  return (
    <div className='h-full bg-[#1F1F1F]'>
      <div className='px-5 pt-6'>
        <h2 className='text-[28px] font-semibold leading-[33px] text-white'>
          Messages
        </h2>
        <div className='pb-14 pt-7'>
          <SVGAtom iconName='logo' width={65} height={65} />
        </div>
      </div>
      <div className='h-full w-full rounded-t-[30px] bg-[#2C2D30] p-5'>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};
