type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export const MessageBoxAtom = (props: Props) => {
  return (
    <div className='w-100 mt-7 flex-grow overflow-y-auto rounded-t-[2rem] bg-[#2C2D30] px-16 py-10'>
      {props.children}
    </div>
  );
};
