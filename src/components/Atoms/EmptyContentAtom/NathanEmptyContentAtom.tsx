import Image from "next/image";
import React from "react";

const NathanEmptyContentAtom = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <div className="my-3">
        <div className="flex flex-row items-center gap-4">
          <button className="flex cursor-pointer flex-col items-center space-y-1 outline-none">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2C2D30]">
              <Image
                src={"/svgs/star.svg"}
                className="h-10 w-10"
                width={100}
                height={100}
                alt="svgIllustration"
              />
            </div>

            <p className="text-sm font-medium text-white">Proxima</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NathanEmptyContentAtom;
