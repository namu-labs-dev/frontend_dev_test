import React from "react";

interface Props {
  title: string;
}

const FormHeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-white '>
      <div className='font-sans text-xl font-bold capitalize'>
        {props.title}
      </div>
    </div>
  );
};

export default FormHeaderAtom;
