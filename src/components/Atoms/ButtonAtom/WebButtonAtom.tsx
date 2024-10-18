type Props = {
  text: string;
  theme: "primary" | "secondary";
  disabled?: boolean;
};

export const WebButtonAtom = (props: Props) => {
  return (
    <button
      type='button'
      className={` 
        ${props.disabled ? "cursor-not-allowed opacity-50" : "hover:shadow-customShadow"}
        ${
          props.theme === "primary"
            ? "bg-primaryGreen text-black"
            : "bg-white text-black"
        }
        w-full rounded-lg px-4 py-2 text-center font-bold capitalize transition`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
