import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#1F1F1F]'>
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='picInPic' width={20} height={20} color='black' />
        </div>
      )}

      <div className='text-white'>{props.title}</div>

      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined
            style={{ color: "#BFBFBF" }}
            className='cursor-pointer text-[20px]'
          />
        </div>
      )}
    </div>
  );
};
