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

/**
 * HeaderAtom component renders a header with customizable title, background color,
 * and optional left and right icons. The left icon is a custom SVG, while the right
 * icon is an Ant Design setting icon. The colors of the title and icons can be dynamically
 * set through props.
 */
export const HeaderAtom = (props: Props) => {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ backgroundColor: props.backgroundColor || '#FFC96F' }}
    >
      {/* Left Icon (custom svg) */}
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
      <div style={{ color: props.titleColor || 'black' }}> {/* Dynamic title color */}
        {props.title}
      </div>

      {/* Right Icon (Ant Design Setting Icon) */}
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