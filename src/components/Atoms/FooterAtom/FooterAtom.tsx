import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className='flex h-full items-center justify-center bg-[#000] text-white py-5'>
      <div className=' left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'>
        <SVGAtom iconName='dollar' width={20} height={20} color='white' />
      </div>
      <div>{props.title}</div>
    </div>
  );
};
