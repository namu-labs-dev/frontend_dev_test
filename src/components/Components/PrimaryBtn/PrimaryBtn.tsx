import React, { type PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const PrimaryBtn = (props: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className='flex items-center cursor-pointer rounded-md border border-black bg-white px-1 py-1 text-center text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none  disabled:opacity-0 md:text-lg lg:px-3'
    >
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
