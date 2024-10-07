import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#000000]'>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='feed' width={20} height={20} color='white' />
        </div>
      )}

      <div className='font-sans font-medium capitalize text-white'>
        {props.title}
      </div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={() => console.log("Antd icon clicked")}
        >
          <SVGAtom iconName='setting' width={20} height={20} color='white' />
        </div>
      )}
    </div>
  );
};
