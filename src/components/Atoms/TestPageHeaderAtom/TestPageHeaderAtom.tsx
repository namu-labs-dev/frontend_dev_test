import { SettingOutlined } from "@ant-design/icons";
import Image from "next/image";

type Props = {
  title: string;
  color: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
};

export const TestPageHeaderAtom = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className='flex h-full w-full items-center justify-between px-[15px] text-white'
    >
      <button onClick={props.onClickLeftIcon}>
        <Image
          src={"/assets/message.png"}
          width={25}
          alt='toolbar icon'
          height={20}
        />
      </button>
      <h3 className='font-pretendard text-[16px] font-[500]'>{props.title}</h3>
      <button
        onClick={props.onClickRightIcon}
        className='text-[20px] text-[#BFBFBF]'
      >
        <SettingOutlined />
      </button>
    </div>
  );
};
