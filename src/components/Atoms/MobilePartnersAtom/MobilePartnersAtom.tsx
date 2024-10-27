import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

export type mobileProps = {
  text: string;
  iconName: "mob1" | "mob2" | "mob3" | "mob4" | "mob5" | "mob6" | "mob7";
};

type Props = {
  mobilePartnerIcons: mobileProps[];
};

const MobilePartnersAtom = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-y-1 py-[3%] sm:hidden'>
        {props.mobilePartnerIcons.map((icon) => (
          <div className='mx-auto flex w-[50%] justify-center   text-center'>
            <SVGAtom
              iconName={icon.iconName}
              className='h-[15%] w-[25%]'
              width={5}
              height={5}
            />
            <h2 className='mt-[2%] text-lg font-bold'>{icon.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePartnersAtom;
