import Image from "next/image";
import React from "react";

interface ComponentProps {
  avater: string;
  name: string;
  userDetails: string;
  time: string;
  subUserAvatar?: string;
  onclick?: () => void;
}

const NathanUserContentAtom = ({
  avater,
  name,
  time,
  userDetails,
  subUserAvatar,
  onclick,
}: ComponentProps) => {
  return (
    <>
      <button
        onClick={onclick}
        className="flex w-full flex-row items-center gap-2 outline-none"
      >
        <div className="flex h-10 w-12 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={avater}
            alt={name}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center">
            <div className="mr-auto">
              <h3 className="text-base font-semibold text-white">{name}</h3>
            </div>
            <div className="text-sm text-white">{time}</div>
          </div>

          <div className="flex flex-row ">
            <div className="mr-auto text-sm text-[#BFBFBF]">{userDetails}</div>

            {subUserAvatar && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4D4F] text-sm text-white">
                {subUserAvatar}
              </div>
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default NathanUserContentAtom;
