import clsx from "clsx";
import { colorMap } from "~/utils/common";

type Props = {
  label?: string;
  children?: React.ReactNode;
  color?: "green" | "blue";
  unselected?: boolean;
};

export function SocialBadge(props: Props) {
  return (
    <div
      className={clsx(
        "flex w-fit items-center gap-[6px] rounded-[10px] border-2 border-black px-5 py-[10px]",
        props.color && colorMap[props.color],
        props.unselected && "bg-[#F0F0F0] opacity-70"
      )}
    >
      {props.unselected ? null : <div>{props.children}</div>}
      <span
        className={clsx("font-medium", {
          "text-white": props.color === "blue",
        })}
      >
        {!props.unselected ? props.label : "unselected"}
      </span>
    </div>
  );
}
