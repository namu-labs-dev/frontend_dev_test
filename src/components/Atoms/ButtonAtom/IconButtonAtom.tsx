import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  iconname: keyof typeof svgs;
  additionalStyles?: string;
  bgColor?: "green" | "blue" | "dark"; // Do not pass tghis prop if the button shouldn't be colored
  iconColor?: "light" | "dark";
};

export const IconButtonAtom = (props: Props) => {
  const iconColor = props.iconColor === "light" ? "text-white" : "text-dark";
  const bgColor =
    props.bgColor === "blue"
      ? "bg-primaryBlue"
      : props.bgColor === "green"
        ? "bg-primaryGreen"
        : props.bgColor === "dark"
          ? "bg-black"
          : "bg-transparent";

  return (
    <button
      type='button'
      className={`${bgColor} rounded-lg border border-black p-2`}
    >
      <SVGAtom
        iconName={props.iconname}
        className={`h-[14px] w-[18px] ${iconColor} ${props.additionalStyles}`}
      />
    </button>
  );
};
