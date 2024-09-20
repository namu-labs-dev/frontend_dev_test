type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center text-white justify-center bg-[#000]">
      
      <div>{props.title}</div>
    </div>
  );
};
