import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  onClick?: () => void;
};

// todo: swap hard-coded styles for
// global tw config

export function FilterAtom(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className='rounded-common flex cursor-pointer items-center justify-center border-transparent bg-[#1838E0] px-4 py-[15px] text-white'
    >
      <SVGAtom iconName='filter' className='mr-1 h-6 w-6' />

      <span className='font-medium'>Filter</span>
    </button>
  );
}
