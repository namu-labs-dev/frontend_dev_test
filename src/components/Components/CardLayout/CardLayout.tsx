import React, { type PropsWithChildren } from "react";
import SVGAtom from "../../Atoms/SVGAtom/SVGAtom";

type Props = {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const CardLayout = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={`relative transform  overflow-y-auto border transition  duration-200 ease-in-out ${
        props.isModalOpen ? "scale-1" : "scale-0"
      }  `}
    >
      <div className='cursor-pointer' onClick={() => props.setModalOpen(false)}>
        <SVGAtom
          iconName='closeCircle'
          className='absolute right-3 z-10  '
          width={30}
          height={30}
        />
      </div>
      <div className='relative'>{props.children}</div>
    </div>
  );
};

export default CardLayout;
