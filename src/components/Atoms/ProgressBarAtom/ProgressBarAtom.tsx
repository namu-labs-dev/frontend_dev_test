import { Progress } from "antd";
import React from "react";

type Props = {
  fieldName?: string;
  x?: number; // Progress percentage
};

export const ProgressBarAtom = (props: Props) => {
  const {
    fieldName = "Field Name",
    x = 25, // Default progress percentage
  } = props;

  return (
    <div className='w-full p-4'>
      <span className='mb-2 block text-[20px] font-bold leading-[27px] text-black'>
        {fieldName}
      </span>
      <Progress
        percent={x}
        strokeColor='#00FF00'
        strokeWidth={24}
        showInfo={false}
        className='mb-2'
      />
      <span className='leading-[21px] block text-right text-[14px] text-black'>
        {x}%
      </span>
    </div>
  );
};
