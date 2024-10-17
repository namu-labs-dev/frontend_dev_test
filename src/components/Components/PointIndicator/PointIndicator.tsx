type Props = {
  label: string;
  count: number;
};

export function PointIndicator(props: Props) {
  return (
    <div className='shadow-black_spread grid w-fit grid-cols-2 divide-x-2 divide-black overflow-hidden rounded-[10px] border-2 border-black'>
      <div className='bg-base-green flex items-center justify-center p-[10px] text-center font-medium capitalize'>
        {props.label}
      </div>
      <div className='flex items-center justify-center p-[10px] text-center text-xl font-bold capitalize'>
        {props.count} Chip
      </div>
    </div>
  );
}
