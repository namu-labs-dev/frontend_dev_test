import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  title: string;
  weight?: string;
  /** Add custom props to manage custom features as regards the task */
  color?: string;
  titleColor?: string;
  icon?: keyof typeof svgs;
  iconColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    /*Make props dynamic. Given the task, some props are now volatile. */
    <div
      className={`relative flex h-full w-full items-center justify-center ${props.weight && props.weight}`}
      style={{ background: props.color ? props.color : "#FFC96F" }}
    >
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='arrowLeft' width={20} height={20} color='black' />
        </div>
      )}

      <div>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className='!text-gray-header cursor-pointer text-[20px]' />
        </div>
      )}
    </div>
  );
};
