import React from "react";

type Props = {
  text: string;
};

const ModuleHeadingAtom = (props: Props) => {
  return (
    <div>
      <h1 className='text-lg font-bold'>{props.text}</h1>
    </div>
  );
};

export default ModuleHeadingAtom;
