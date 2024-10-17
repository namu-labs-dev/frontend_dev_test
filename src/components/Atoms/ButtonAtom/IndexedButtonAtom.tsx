type Props = {
  text: string;
  numeral: number;
  color?: "red" | "green";
};

export const IndexedButtonAtom = (props: Props) => {
  return (
    <button
      type='button'
      className={`w-full rounded-lg px-4 py-2 text-left ${props.color === "green" ? `text-dark bg-primaryGreen` : props.color === "red" ? `bg-primaryRed text-white` : `text-dark`}`}
    >
      {`${props.numeral}. ${props.text}`}
    </button>
  );
};
