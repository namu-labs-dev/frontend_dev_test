import React, { type ReactNode } from "react";
import cn from "classnames";

type Props = {
  heading: ReactNode | string;

  classNames?: string;
};

const ModuleHeadingAtom = (props: Props) => {
  return (
    <div className='p-[2%]'>
      <h1
        className={cn(
          `font-sans text-xl font-extrabold lg:text-3xl`,
          props.classNames
        )}
      >
        {props.heading}
      </h1>
    </div>
  );
};

export default ModuleHeadingAtom;
