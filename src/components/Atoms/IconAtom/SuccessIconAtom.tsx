import SVGAtom from "../SVGAtom/SVGAtom";

export const SuccessIconAtom = () => {
  return (
    <div className='h-[50px] w-[50px]'>
      <SVGAtom
        iconName='successIcon'
        className='h-full w-full object-contain'
      />
    </div>
  );
};
