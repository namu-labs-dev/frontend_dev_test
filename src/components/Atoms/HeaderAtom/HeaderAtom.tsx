import { SettingOutlined } from "@ant-design/icons";
import * as svgIcons from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  darkTheme?: boolean; // To add dark background to Header
  iconName?: keyof typeof svgIcons;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  // If darkTheme is true the background color becomes dark and the primary color
  // for icons and font becomes white 
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${props.darkTheme ? "bg-[#1F1F1F]" : "bg-[#FFC96F]"}`}
    >
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName={`${props.iconName ? props.iconName : "arrowLeft"}`} width={20} height={20} color={`${props.darkTheme ? "white" : "black"}`} />
        </div>
      )}

      <div className={`${props.darkTheme ? "text-white" : "text-black"}`}>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className={`${props.darkTheme ? "!text-white" : "!text-gray-header"} cursor-pointer text-[20px]`} />
        </div>
      )}
    </div>
  );
};
