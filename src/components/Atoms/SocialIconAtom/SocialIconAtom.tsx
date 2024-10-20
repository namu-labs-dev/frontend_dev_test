import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  iconname: keyof typeof svgs;
};

export const SocialIconAtom = (props: Props) => {
  return (
    <div className='h-[35px] w-[35px]'>
      <SVGAtom
        iconName={props.iconname}
        className='h-full w-full object-contain'
      />
    </div>
  );
};
