import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  iconname: keyof typeof svgs;
};

export const RankAtom = (props: Props) => {
  return (
    <div className='h-[48px] w-[48px]'>
      <SVGAtom
        iconName={props.iconname}
        className='h-full w-full object-contain'
      />
    </div>
  );
};
