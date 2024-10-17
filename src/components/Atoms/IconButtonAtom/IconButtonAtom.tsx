import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  iconName: React.ComponentProps<typeof SVGAtom>["iconName"];
  onClick?: () => void;
};

export function IconButtonAtom(props: Props) {
  return (
    <button onClick={props.onClick}>
      <SVGAtom iconName={props.iconName} className='h-5 w-5' />
    </button>
  );
}
