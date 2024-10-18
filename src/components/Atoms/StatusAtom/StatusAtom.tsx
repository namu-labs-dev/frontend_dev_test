type StatusType = "Success" | "Failed" | "Pending";

type Props = {
  type: StatusType;
};

const statusStyles: Record<StatusType, string> = {
  Success: "bg-[#00FF001A] text-[#389E0D]",
  Failed: "bg-[#FFF1F0] text-[#F5222D]",
  Pending: "bg-[#FFF7E6] text-[#FAAD14]",
};

export const StatusAtom = (props: Props) => {
  return (
    <span
      className={`${statusStyles[props.type]} inline-flex items-center rounded-[0.875rem] px-3 py-1 text-base font-medium leading-6`}
    >
      {props.type}
    </span>
  );
};
