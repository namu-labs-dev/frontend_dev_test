import * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  text: string;
  color?: "green" | "blue";
  leftIcon?: keyof typeof svgs;
  rightIcon?: keyof typeof svgs;
  disabled?: boolean;
};

export const ButtonWithIconAtom = (props: Props) => {
  const textColor = props.color === "green" ? "text-black" : "text-white";
  const bgColor =
    props.color === "green"
      ? `bg-primaryGreen`
      : props.color === "blue"
        ? `bg-primaryBlue`
        : ``;

  return (
    <button
      type='button'
      className={`
        rounded-lg px-4 py-2 
        ${bgColor} ${textColor}
        font-semibold ${!props.disabled && "hover:shadow-customShadow"}`}
      disabled={props.disabled}
    >
      {props.leftIcon && (
        <SVGAtom iconName={props.leftIcon} className={`mr-2 ${textColor}`} />
      )}
      {props.text}
      {props.rightIcon && (
        <SVGAtom iconName={props.rightIcon} className={`ml-2 ${textColor}`} />
      )}
    </button>
  );
};
