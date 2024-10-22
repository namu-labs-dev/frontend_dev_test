import clsx from "clsx";

type Props = {
  foo?: string;
} & JSX.IntrinsicElements["button"];

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded-[10px] border-2 border-black px-5 py-[11px] font-medium",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
