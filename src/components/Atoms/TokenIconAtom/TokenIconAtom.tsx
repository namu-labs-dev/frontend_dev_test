import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  iconname: keyof typeof svgs;
};

export const TokenIconAtom = (props: Props) => {
  return (
    <div className='h-[32px] w-[32px]'>
      <SVGAtom
        iconName={props.iconname}
        className='h-full w-full object-contain'
      />
    </div>
  );
};
