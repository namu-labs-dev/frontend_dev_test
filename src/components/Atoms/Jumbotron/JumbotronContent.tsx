import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title?: string;
};

export const JumbotronContent = (props: Props) => {
  return (
    <div className='ml-3 mt-2 pl-3 pt-2'>
      <h4 className='mb-4 text-2xl font-bold text-white'>{props.title}</h4>
      <div className='w-max rounded-full bg-[#2C2D30] p-3'>
        <SVGAtom iconName='star' width={45} height={45} />
      </div>
    </div>
  );
};
