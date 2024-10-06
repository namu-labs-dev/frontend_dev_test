import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const FormContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "form-scroll mx-auto h-[80vh] w-full overflow-y-scroll rounded-md text-lg ",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
