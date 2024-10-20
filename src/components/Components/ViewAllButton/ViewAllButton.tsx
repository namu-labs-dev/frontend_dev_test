import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  buttonLabel: string;
  viewAll: () => void;
};
const ViewAllButton = (props: Props) => {
  return (
    <button
      onClick={props.viewAll}
      className='flex items-center rounded-md border-2 border-black bg-white px-1 text-center text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl  active:shadow-none md:text-lg lg:px-3 '
    >
      <span className='mr-2 hidden lg:inline-block'>{props.buttonLabel}</span>{" "}
      {/* Text only visible on desktop */}
      <SVGAtom
        iconName='arrowUpRight'
        className='mt-1 size-7 text-center  lg:mt-2 lg:size-9'
      />
    </button>
  );
};

export default ViewAllButton;
