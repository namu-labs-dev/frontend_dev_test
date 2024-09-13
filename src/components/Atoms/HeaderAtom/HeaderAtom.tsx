import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";
type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  leftIcon?: keyof typeof svgs;
  rightIcon?: keyof typeof svgs;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-kneutral-11'>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom
            iconName={props.leftIcon ?? "arrowLeft"}
            width={20}
            height={20}
            color='black'
          />
        </div>
      )}

      <div className='text-sm font-normal text-white'>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={() => console.log("Antd icon clicked")}
        >
          {/* <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" /> */}
          <SVGAtom
            iconName={props.rightIcon ?? "settings"}
            width={20}
            height={20}
            color='black'
          />
        </div>
      )}
    </div>
  );
};
