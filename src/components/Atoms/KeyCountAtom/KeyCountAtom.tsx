import clsx from "clsx";

type Props = {
  total: number;
  current: number;
} & JSX.IntrinsicElements["p"];

export function KeyCountAtom({ current, total, className, ...props }: Props) {
  return (
    <p className={clsx("text-xs text-[#8C8C8C]", className)} {...props}>
      {current}/<span>{total}</span>
    </p>
  );
}
