type Props = {
  title: string;
};

export const FormPageHeaderAtom = (prop: Props) => {
  return (
    <div className='flex h-full items-center justify-center bg-white'>
      <h1 className='font-inter text-[18.6px] font-[700] opacity-85'>
        {prop.title}
      </h1>
    </div>
  );
};
