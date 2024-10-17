import clsx from "clsx";

type Props = {
  count: number;
  horizontal?: boolean;
};

export function CheckInStats(props: Props) {
  return (
    <div
      className={clsx("w-fit", {
        "flex flex-row items-center gap-3": props.horizontal,
        "flex flex-col gap-3": !props.horizontal,
      })}
    >
      <p className='text-sm font-medium'>Today check in</p>{" "}
      <span
        className={clsx(
          "text-base-blue inline-block text-xl font-bold",
          !props.horizontal && "text-center"
        )}
      >
        {props.count}
      </span>
    </div>
  );
}
