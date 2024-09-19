import * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Message = {
  iconName: keyof typeof svgs;
  userName: string;
  message: string;
  time: string;
  unreadCount: number;
};

type Props = {
  messages: Message[];
};

export const SingleMessageAtom = ({ messages }: Props) => {
  console.log(messages);
  return messages.map((message, index) => {
    return (
      <>
        <div
          key={index}
          className='my-4 grid w-full cursor-pointer grid-cols-11 items-center gap-x-1 py-2'
        >
          <div className='col-span-2 flex h-14 w-14 items-start justify-start rounded-full'>
            <SVGAtom
              iconName={message.iconName}
              className='h-inherit w-inherit'
            />
          </div>

          <div className='overflow-wrap-break-word col-span-9 flex w-full flex-1 flex-col justify-between !text-gray-200'>
            <div className='flex w-full items-center justify-between'>
              <span className='font-bold'>{message.userName}</span>
              <span className='text-sm text-gray-300'>{message.time}</span>
            </div>
            <div className='flex w-full items-center justify-between'>
              <span className='flex-grow truncate'>{message.message}</span>
              {message.unreadCount > 0 && (
                <span className='ml-2 rounded-full bg-red-500 px-2 text-sm text-white'>
                  {message.unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });
};
