import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
};

export const ModalAtomContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        ` relative top-1/3 z-[1] mx-auto flex h-fit w-[70%] translate-x-[-4px]  translate-y-[-4px] flex-col gap-y-2 overflow-hidden rounded-md border-2 border-black bg-white  px-[4%] py-[4%]   text-center text-sm text-black shadow-[4px_4px_0px_black] transition-all  duration-300 hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:w-[${props.width}] min-w-[30%] md:max-w-[35%] md:px-[2%]  md:py-[3%]`,
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
