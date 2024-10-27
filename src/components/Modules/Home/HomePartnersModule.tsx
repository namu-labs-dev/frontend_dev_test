import React from "react";
import MobilePartnersAtom, {
  mobileProps,
} from "~/components/Atoms/MobilePartnersAtom/MobilePartnersAtom";
import ModuleHeadingAtom from "~/components/Atoms/ModuleHeadingAtom/ModuleHeadingAtom";
import PartnersAtom from "~/components/Atoms/PartnersAtom/PartnersAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  icons: string[];
  text: string;
  classNames?: string;
  mobilePartnerIcons: mobileProps[];
};

const HomePartnersModule = (props: Props) => {
  return (
    <div className='mt-[10%] md:mt-[6%] '>
      <ModuleHeadingAtom heading={props.text} classNames={props.classNames} />
      <div className='relative hidden pb-[3%] pt-[2%]  sm:mt-[6%] sm:block lg:mt-[2%]'>
        <div className='mx-auto flex flex-col flex-wrap items-center justify-center gap-x-4 sm:w-[55%]  sm:flex-row sm:gap-x-6  sm:gap-y-6 md:gap-y-6 md:px-0 lg:w-[55%]'>
          {props.icons.map((icon, index) => (
            <PartnersAtom key={index} icon={icon} index={index} />
          ))}
        </div>
      </div>
      <MobilePartnersAtom mobilePartnerIcons={props.mobilePartnerIcons} />
    </div>
  );
};

export default HomePartnersModule;
