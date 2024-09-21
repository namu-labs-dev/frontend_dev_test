import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

export type Prop = {
  imageIcon: keyof typeof svgs;
  title: string;
  subText: string;
  time: string;
  notificationIcon?: string;
};

type SlidingDivContentProps = {
  items: Prop[];
};

export const ItemComponent: React.FC<SlidingDivContentProps> = ({ items }) => {
  return (
    <div className='flex flex-col p-4'>
      {items.map((item, index) => (
        <div
          key={index}
          className='mb-4 flex w-full cursor-pointer items-start justify-between space-x-4'
        >
          <div className='flex items-center justify-center'>
            <SVGAtom
              iconName={item.imageIcon}
              className={`h-16 w-16 ${item.imageIcon === "nvidia" && "h-12 w-12 rounded-full bg-blue-600 p-2"}`}
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl text-white'>{item.title}</h2>
            <p className='text-gray-300'>{item.subText}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-300'>{item.time}</p>
            <div className='flex items-center justify-end text-white'>
              <div
                className={`flex h-6 w-6 items-center justify-center ${item.notificationIcon && "rounded-full bg-red-500"}`}
              >
                {item.notificationIcon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
