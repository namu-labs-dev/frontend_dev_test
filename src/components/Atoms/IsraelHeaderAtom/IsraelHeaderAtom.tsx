import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const IsraelHeaderAtom = (props: Props) => {
  const {
    title,
    backgroundColor,
    textColor,
    onClickLeftIcon,
    onClickRightIcon,
  } = props;

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center`}
      style={{ backgroundColor: backgroundColor }}
    >
      {onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={onClickLeftIcon}
        >
          <SVGAtom iconName='vote' width={20} height={20} color='white' />
        </div>
      )}

      <div className='text-lg font-bold' style={{ color: textColor }}>
        {title}
      </div>

      {onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className='cursor-pointer text-[20px] !text-[#BFBFBF]' />
        </div>
      )}
    </div>
  );
};
