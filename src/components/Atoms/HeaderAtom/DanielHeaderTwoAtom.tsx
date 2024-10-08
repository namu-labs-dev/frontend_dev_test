type Props = {
  title: string;
};

export const DanielHeaderTwoAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-white'>
      <div className='text-xl font-bold text-black'>{props.title}</div>
    </div>
  );
};
