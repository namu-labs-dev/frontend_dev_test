import React, { type PropsWithChildren } from "react";
import SVGAtom from "../../Atoms/SVGAtom/SVGAtom";

type Props = {
  isModalOpen: boolean;
  width?: string;
  height?: string;
  setModalOpen: (value: boolean) => void;
};

const CardLayout = (props: PropsWithChildren<Props>) => {
  const { width, height } = props;
  return (
    <div
      className={`relative flex w-${width} h-${height} transform overflow-y-auto transition  duration-200 ease-in-out ${
        props.isModalOpen ? "scale-1" : "scale-0"
      }  translate-x-[-6px] translate-y-[-6px] flex-col gap-y-2 rounded-lg  bg-white p-[5%] text-center text-sm  text-black shadow-[5px_5px_0px_black] transition-all duration-300 hover:rounded-md `}
    >
      <div className='cursor-pointer' onClick={() => props.setModalOpen(false)}>
        <SVGAtom
          iconName='closeCircle'
          className='absolute right-3 top-3 '
          width={30}
          height={30}
        />
      </div>
      <div className='relative  '>{props.children}</div>
    </div>
  );
};

export default CardLayout;
