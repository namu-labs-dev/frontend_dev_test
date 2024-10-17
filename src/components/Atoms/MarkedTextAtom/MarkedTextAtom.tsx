import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  label: string;
};

export function MarkedTextAtom(props: Props) {
  return (
    <div className='flex items-center text-[#8C8C8C]'>
      <SVGAtom iconName='check' className='h-[18px] w-[18px]' />
      <span className='ml-1 capitalize'>{props.label}</span>
    </div>
  );
}
