import SVGAtom from "../SVGAtom/SVGAtom";

type TransferType = "send" | "receive";

type Props = {
  transfer: TransferType;
};

const transferStyles: Record<TransferType, string> = {
  send: " bg-[#FFF1F0]",
  receive: "bg-[#00FF001A]",
};

export const SendReceiveAtom = (props: Props) => {
  return (
    <span
      className={`${transferStyles[props.transfer]} inline-flex items-center rounded-[0.625rem] p-2`}
    >
      {props.transfer === "send" && (
        <SVGAtom iconName='send' width={24} height={24} />
      )}
      {props.transfer === "receive" && (
        <SVGAtom iconName='receive' width={24} height={24} />
      )}
    </span>
  );
};
