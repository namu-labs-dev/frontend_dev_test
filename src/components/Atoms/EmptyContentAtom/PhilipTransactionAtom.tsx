import Image from "next/image";

type Props = {
  logo: string;
  token: string;
  message: string;
  time: string;
  initial?: string;
  onClick: () => void;
};

export const PhilipTransactionAtom = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className='flex w-full flex-row gap-x-2.5 px-3.5 pb-[15px] pt-[13px]'
    >
      <div className='relative aspect-[1/1] w-11 min-w-11'>
        <Image
          src={props.logo}
          fill
          className='h-full w-full'
          alt={props.token}
        />
      </div>
      <div className='flex flex-grow flex-col'>
        <div className='flex flex-row justify-between text-white'>
          <h4 className='text-[16px] font-bold leading-[26px]'>
            {props.token}
          </h4>
          <p className='text-[14px] leading-[16.94px]'>{props.time}</p>
        </div>
        <div className='flex w-full flex-row justify-between gap-x-4'>
          <p className='block w-[240px] flex-1 truncate text-start text-[14px] font-medium leading-[22px] text-[#BFBFBF]'>
            {props.message}
          </p>
          {props.initial && props.initial.length > 0 && (
            <div className='h-5 w-5 rounded-full bg-[#FF4D4F]'>
              <p className='text-[12px] uppercase leading-[20px] text-white'>
                {props.initial[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
