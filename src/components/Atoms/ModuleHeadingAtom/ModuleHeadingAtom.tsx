import React from "react";

type Props = {
  text: string;
};

const ModuleHeadingAtom = (props: Props) => {
  return (
    <div className='p-[2%]'>
      <h1 className='text-md font-sans font-extrabold lg:text-3xl'>
        🚀
        {props.text}
      </h1>
    </div>
  );
};

export default ModuleHeadingAtom;
