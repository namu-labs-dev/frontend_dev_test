import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  backgroundColor?: string;
  titleColor?: string;
  iconColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ backgroundColor: props.backgroundColor || '#FFC96F' }}
    >
      {/* Left Icon */}
      {props.onClickLeftIcon && (
        <div
          className="absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom
            iconName="arrowLeft"
            width={20}
            height={20}
            color={props.iconColor || 'black'}
          />
        </div>
      )}

      {/* Title */}
      <div style={{ color: props.titleColor || 'black' }}>
        {props.title}
      </div>

      {/* Right Icon */}
      {props.onClickRightIcon && (
        <div
          className="absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined
            style={{ color: props.iconColor || 'black' }}
            className="cursor-pointer text-[20px]"
          />
        </div>
      )}
    </div>
  );
};