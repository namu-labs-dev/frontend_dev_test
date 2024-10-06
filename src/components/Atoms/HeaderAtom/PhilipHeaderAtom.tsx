import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const PhilipHeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-between bg-[#1F1F1F] px-[20px]'>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='flex w-fit cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='home' width={20} height={20} />
        </div>
      )}

      <div className='text-[16px] font-medium leading-[22px] text-white'>
        {props.title}
      </div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='flex w-fit cursor-pointer items-center justify-center'
          onClick={props.onClickRightIcon}
        >
          <SVGAtom iconName='setting' width={20} height={20} />
        </div>
      )}
    </div>
  );
};
