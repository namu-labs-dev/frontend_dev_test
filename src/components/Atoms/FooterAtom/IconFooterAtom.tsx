type Props = {
  darkTheme?: boolean;
};

export const IconFooterAtom = (props: Props) => {
  return (
    <div
      className={`flex h-full items-center justify-center ${props.darkTheme ? "bg-[#1F1F1F]" : "bg-[#FFC96F]"}`}
    >
      <div className={`${props.darkTheme ? "text-white" : "text-dark"}`}>
        title
      </div>
    </div>
  );
};
