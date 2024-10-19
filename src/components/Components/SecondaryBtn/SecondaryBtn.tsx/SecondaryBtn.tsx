import React, { type PropsWithChildren } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  onClick?: () => void;
};

const SecondaryBtn = (props: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={props.onClick}
      className='bg-primaryGreen flex max-w-[50%] items-center rounded-md border border-black px-2 py-1 text-center text-sm font-medium text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl  active:shadow-none md:text-lg lg:px-3'
    >
      {props.children}
    </button>
  );
};

export default SecondaryBtn;
