import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  buttonLabel: string;
  onClick: () => void;
};
const SecondaryBtn = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className='flex items-center rounded-md border border-black bg-[#00FF00] px-2 py-1 text-center text-sm font-medium text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl  active:shadow-none md:text-lg lg:px-3 '
    >
      {props.buttonLabel}
    </button>
  );
};

export default SecondaryBtn;
