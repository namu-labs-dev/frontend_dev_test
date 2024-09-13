import Image from "next/image";
import React from "react";

const NathanUserMessageBtnAtom = ({ name }: { name?: string }) => {
  return (
    <>
      <button
        onClick={() => alert(`You clicked on ${name}`)}
        className="flex cursor-pointer flex-col items-center space-y-1 outline-none"
      >
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2C2D30]">
          <Image
            src={"/svgs/star.svg"}
            className="h-10 w-10"
            width={100}
            height={100}
            alt="svgIllustration"
          />
        </div>

        <p className="text-xs font-medium text-white">
          {name ? name : "Proxima"}
        </p>
      </button>
    </>
  );
};

export default NathanUserMessageBtnAtom;
