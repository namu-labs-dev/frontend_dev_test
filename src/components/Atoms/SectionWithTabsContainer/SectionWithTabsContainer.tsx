import React from "react";
import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const SectionWithTabsContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div className='flex items-center justify-center px-[2%] py-[5%]'>
      {props.children}
    </div>
  );
};

export default SectionWithTabsContainer;
