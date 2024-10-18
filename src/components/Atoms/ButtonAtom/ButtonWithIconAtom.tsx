import * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  children: string;
  color?: "green" | "blue";
  leftIcon?: keyof typeof svgs;
  rightIcon?: keyof typeof svgs;
};

export const ButtonWithIconAtom = (props: Props) => {
  const textColor = props.color ? "text-white" : "text-gray-800";

  return (
    <button
      type='button'
      className={`rounded-lg px-4 py-2 ${props.color === "green" ? `text-dark bg-primaryGreen` : props.color === "blue" ? `bg-primaryBlue text-white` : `text-dark`} ${textColor}`}
    >
      {props.leftIcon && (
        <SVGAtom iconName={props.leftIcon} className={`mr-2 ${textColor}`} />
      )}
      {props.children}
      {props.rightIcon && (
        <SVGAtom iconName={props.rightIcon} className={`ml-2 ${textColor}`} />
      )}
    </button>
  );
};
