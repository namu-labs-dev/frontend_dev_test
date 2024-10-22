import React from "react";
import cn from "classnames";

type Props = {
  text: string;
  classNames?: string;
};

const ModuleHeadingAtom = (props: Props) => {
  return (
    <div className='p-[2%]'>
      <h1
        className={cn(
          `text-md font-sans font-extrabold lg:text-3xl`,
          props.classNames
        )}
      >
        {props.text}
      </h1>
    </div>
  );
};

export default ModuleHeadingAtom;
