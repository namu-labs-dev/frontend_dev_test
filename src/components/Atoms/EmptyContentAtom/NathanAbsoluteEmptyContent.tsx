import React from "react";
import NathanUserContentAtom from "./NathanUserContentAtom";

const NathanAbsoluteEmptyContent = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 h-[380px] w-full rounded-t-[30px] bg-[#2C2D30] p-5 md:h-[340px]">
        <div className="flex flex-col space-y-3">
          <NathanUserContentAtom
            avater="/svgs/eth.png"
            name="ETH"
            time="08:43 PM"
            userDetails="User: namulabs is fantasic company..."
            subUserAvatar="N"
          />

          <NathanUserContentAtom
            avater="/svgs/nvir.svg"
            name="Nvir"
            time="08:42 AM"
            userDetails="User: namulabs is fantasic company..."
          />
        </div>
      </div>
    </>
  );
};

export default NathanAbsoluteEmptyContent;
