import React from "react";

type Props = {};

export const VoteBannerAtom = (props: Props) => {
  return (
    <div className='bg-kgeekblue-1 flex items-center px-[1.375rem] py-[0.825rem]'>
      <p className='font-pretendard w-[22.25rem] text-[1rem] font-normal'>
        <span className='text-kgeekblue-6 font-bold'>10 FAO </span>will be
        deducted when voting is generated (Amount : 9 FAO)
      </p>
    </div>
  );
};
