import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className='flex h-full items-center justify-between bg-[#000] px-16 py-5 text-white'>
      <div className=' z-[1] flex w-[50px] cursor-pointer items-center justify-center'>
        <SVGAtom iconName='dollar' width={30} height={30} color='white' />
      </div>
      <div className='  z-[1] flex w-[50px] cursor-pointer items-center justify-center '>
        <SVGAtom iconName='message' width={30} height={30} color='white' />
      </div>
      <div className='  z-[1] flex w-[50px] cursor-pointer items-center justify-center'>
        <SVGAtom iconName='wallet' width={30} height={30} color='white' />
      </div>
      <div className='  z-[1] flex w-[50px] cursor-pointer '>
        <SVGAtom iconName='history' width={30} height={30} color='white' />
      </div>
      {/* <div>{props.title}</div> */}
    </div>
  );
};
