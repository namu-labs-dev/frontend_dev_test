import React from "react";
import ModuleHeadingAtom from "~/components/Atoms/ModuleHeadingAtom/ModuleHeadingAtom";
import PartnersAtom from "~/components/Atoms/PartnersAtom/PartnersAtom";

type Props = {
  icons: string[];
  text: string;
  classNames?: string;
};
const HomePartnersModule = (props: Props) => {
  return (
    <div className='relative mt-[10%]  py-[3%] sm:mt-[6%] lg:mt-[2%]'>
      <ModuleHeadingAtom heading={props.text} classNames={props.classNames} />
      <div className='mx-auto flex flex-col flex-wrap items-center justify-center gap-x-4 sm:w-[55%]  sm:flex-row sm:gap-x-6  sm:gap-y-6 md:gap-y-6 md:px-0 lg:w-[55%]'>
        {props.icons.map((icon, index) => (
          <PartnersAtom key={index} icon={icon} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePartnersModule;
