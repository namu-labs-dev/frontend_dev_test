import Image from "next/image";
import { Message } from "~/app/ibuchukwu/testpage1/container/TestpageOneContainer";

type Props = {
  messages: Message[];
};

export const TestPageOneMessageComponent = (props: Props) => {
  return (
    <div className='mt-5 flex h-full flex-col gap-5 rounded-t-3xl bg-[#2C2D30] px-[24px] pt-[20px]'>
      {props.messages.map((message) => (
        <div key={message.id} className='flex cursor-pointer gap-5'>
          <div className=''>
            <Image
              src={message.photoUrl}
              alt='message photo'
              className='shadow-custom rounded-full'
              width={44}
              height={44}
            />
          </div>
          <div className='w-full'>
            <div className='flex items-center justify-between'>
              <h2 className='font-pretendard text-[16px] font-[700] text-white'>
                {message.messageTitle}
              </h2>
              <p className='font-inter text-[14px] text-white'>
                {message.receivedTime}
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-inter line-clamp-1 w-[85%] text-[14px] text-[#BFBFBF]'>
                {message.messageBody}
              </p>
              {!message.isRead && (
                <div className='font-pretendard h-[20px] w-[20px] rounded-full bg-red-500 text-center font-[12px] text-white'>
                  N
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
