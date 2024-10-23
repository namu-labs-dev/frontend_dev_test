import React, { ReactNode } from "react";
import type * as svgs from "public/svgs";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import ModuleHeadingAtom from "../ModuleHeadingAtom/ModuleHeadingAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  buttonText: string;
  heading: ReactNode | string;
  onClick: () => void;
};

const ViewAllSectionTabAtom = (props: Props) => {
  return (
    <div className='flex items-center justify-center gap-x-[6rem] px-[2%] pb-[2%] md:ml-[10%] md:gap-x-[30rem] '>
      {/* section heading */}
      <ModuleHeadingAtom heading={props.heading} />
      <PrimaryBtn {...props}>
        <span className='mr-2 hidden lg:inline-block'>{props.buttonText}</span>{" "}
        {/* Text only visible on desktop */}
        <SVGAtom
          iconName='arrowUpRight'
          className='size-6 text-center md:mt-1  lg:mt-2 lg:size-9'
        />
      </PrimaryBtn>
    </div>
  );
};

export default ViewAllSectionTabAtom;
