import React from "react";
import { Button } from "antd";
import type * as svgs from "public/svgs";
import ModuleHeadingAtom from "../ModuleHeadingAtom/ModuleHeadingAtom";
import SVGAtom from "../SVGAtom/SVGAtom";

//All props would be adjusted based on the code-convention when building modules

type Props = {
  buttonLabel: string;
  heading: { text: string };
};

const ViewAllSectionTabAtom = (props: Props) => {
  return (
    <div className='justify- flex items-center gap-[5rem] space-x-2'>
      {/* section heading */}
      <ModuleHeadingAtom {...props.heading} />
      <button className='rounded-2xl border-2  border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
        <SVGAtom iconName='arrowUpRight' width={30} height={30} />
      </button>
    </div>
  );
};

export default ViewAllSectionTabAtom;
