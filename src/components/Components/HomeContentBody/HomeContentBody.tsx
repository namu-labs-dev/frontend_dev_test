import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { walletCoins } from "~/constants";
import { IconName } from "~/types";

const WalletItem = ({
  icon,
  name,
  description,
  badge,
  time,
}: {
  icon: IconName;
  name: string;
  description: string;
  badge: any;
  time: string;
}) => {
  return (
    <div className='font-pretendard p-[15px]'>
      <div className='flex justify-between'>
        <div className='flex gap-[10px]'>
          <SVGAtom iconName={icon} width={44} height={44} color='black' />
          <div className='flex flex-col'>
            <p className='text-[1rem] font-bold text-white'>{name}</p>
            <p className='text-kmuted text-sm font-medium'>{description}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-sans text-sm text-white'>{time}</p>
          {badge && (
            <p className='font-roboto flex h-5 w-5 items-center justify-center rounded-lg bg-[#ff4d4f] text-white'>
              {badge}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
type Props = {};

const HomeContentBody = (props: Props) => {
  return (
    <div className='bg-kneutral-300 min-h-full w-full rounded-[1.875rem] p-5 '>
      {walletCoins.map((item, idx) => (
        <WalletItem
          key={idx}
          icon={item.icon as IconName}
          description={item.description}
          name={item.name}
          time={item.time}
          badge={item?.badge}
        />
      ))}
    </div>
  );
};

export default HomeContentBody;
