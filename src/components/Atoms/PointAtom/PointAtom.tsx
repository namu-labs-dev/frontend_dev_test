import * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  iconname: keyof typeof svgs;
};

export const PointAtom = (props: Props) => {
  return (
    <div className='h-[30px] w-[30px]'>
      <SVGAtom iconName={props.iconname} />
    </div>
  );
};
