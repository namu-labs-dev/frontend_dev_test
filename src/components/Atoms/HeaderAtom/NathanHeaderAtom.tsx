import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const NathanHeaderAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-between bg-[#1F1F1F]">
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className="flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom
            iconName="outNotification"
            width={21}
            height={21}
            color="black"
          />
        </div>
      )}

      <div className="text-base font-semibold text-white">{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className="flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined className="cursor-pointer text-[20px] !text-[#BFBFBF]" />
        </div>
      )}
    </div>
  );
};
