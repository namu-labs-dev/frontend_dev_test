"use client";

import clsx from "clsx";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { Button } from "~/components/Components/Button/Button";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  title: string;
  onClickIcon?: () => void;
  navigationProps: React.ComponentProps<typeof NavigationAtom>;
};

export function AuthHeaderModule(props: Props) {
  return (
    <nav className='border-b-2 border-[#000000] p-4'>
      <div className='flex h-16 items-center justify-between md:h-[5.875rem]'>
        <div className='flex items-center space-x-4'>
          <div className='h-8 w-8' onClick={props.onClickIcon} >
            <SVGAtom iconName='closeCircle'></SVGAtom>
          </div>
          <span className=" text-[#262626] text-lg font-medium leading-[27px] ">{props.title}</span>
        </div>
      </div>
    </nav>
  );
}
