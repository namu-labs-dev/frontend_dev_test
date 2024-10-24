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
    <div className='flex items-center justify-between  px-[4%] pb-[2%] sm:mr-3 xl:ml-[9%] xl:justify-start xl:gap-x-[30rem]'>
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
