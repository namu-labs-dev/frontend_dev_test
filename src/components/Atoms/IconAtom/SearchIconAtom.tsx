import SVGAtom from "../SVGAtom/SVGAtom";

export const SearchIconAtom = () => {
  return (
    <div className='h-[50px] w-[50px]'>
      <SVGAtom iconName='searchIcon' className='h-full w-full object-contain' />
    </div>
  );
};
