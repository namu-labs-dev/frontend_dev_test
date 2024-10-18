import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  iconname: keyof typeof svgs;
};

export const IconRankAtom = (props: Props) => {
  return (
    <div className='h-[20px] w-[20px]'>
      <SVGAtom
        iconName={props.iconname}
        className='h-full w-full object-contain'
      />
    </div>
  );
};
