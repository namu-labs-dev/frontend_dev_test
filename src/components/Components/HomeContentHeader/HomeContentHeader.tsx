import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {};

const HomeContentHeader = (props: Props) => {
  return (
    <div className='px-[1.563rem] pb-6'>
      <p className='mb-5 text-[28px] font-semibold text-white'>Messages</p>
      <SVGAtom iconName='proxima' width={65} height={65} color='black' />
      <p className='mt-3 text-[16px] leading-[19.36px] text-white'>Proxima</p>
    </div>
  );
};

export default HomeContentHeader;
