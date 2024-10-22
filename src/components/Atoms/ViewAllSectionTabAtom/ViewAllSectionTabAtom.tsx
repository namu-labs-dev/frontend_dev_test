import React from "react";
import type * as svgs from "public/svgs";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import ModuleHeadingAtom from "../ModuleHeadingAtom/ModuleHeadingAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  buttonText: string;
  heading: { text: string };
  onClick: () => void;
};

const ViewAllSectionTabAtom = (props: Props) => {
  return (
    <div className='ml-[10%] flex items-center  justify-center gap-[30rem] pb-[2%] '>
      {/* section heading */}
      <ModuleHeadingAtom {...props.heading} />
      <PrimaryBtn {...props}>
        <span className='mr-2 hidden lg:inline-block'>{props.buttonText}</span>{" "}
        {/* Text only visible on desktop */}
        <SVGAtom
          iconName='arrowUpRight'
          className='mt-1 size-7 text-center  lg:mt-2 lg:size-9'
        />
      </PrimaryBtn>
    </div>
  );
};

export default ViewAllSectionTabAtom;
