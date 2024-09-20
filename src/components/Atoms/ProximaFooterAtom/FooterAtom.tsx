import SVGAtom from "../SVGAtom/SVGAtom";
import { SVGAtomContainer } from "../SVGAtomContainer/SVGAtomContainer";

type Props = {
  title?: string;
};

export const FooterAtom = (_props: Props) => {
  return (
    // <div className='flex h-full items-center justify-center bg-[#FFC96F]'>
    <div className='grid h-full grid-cols-4 border border-black bg-[#262626]'>
      <SVGAtomContainer>
        <SVGAtom iconName='dollar' width={24} height={24} />
      </SVGAtomContainer>
      <SVGAtomContainer>
        <SVGAtom iconName='chat' width={24} height={24} />
      </SVGAtomContainer>
      <SVGAtomContainer className='border-t-2 border-[#00EC97]'>
        <SVGAtom iconName='door' width={24} height={24} />
      </SVGAtomContainer>
      <SVGAtomContainer>
        <SVGAtom iconName='clock' width={24} height={24} />
      </SVGAtomContainer>
    </div>
  );
};
