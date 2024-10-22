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
    <div className=''>
      <ModuleHeadingAtom text={props.text} classNames={props.classNames} />
      <div className='mx-auto flex w-[90%] flex-col flex-wrap items-center justify-center gap-x-4 gap-y-4 border md:w-[70%] md:flex-row md:px-0'>
        {props.icons.map((icon, index) => (
          <PartnersAtom icon={icon} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePartnersModule;
