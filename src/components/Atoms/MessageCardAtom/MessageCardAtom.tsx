import { AvatarAtom, type AvatarImageSrcType } from "../AvatarAtom/AvatarAtom";
import { Typography } from "antd";

const { Title, Text } = Typography;

type Props = {
  imgSrc: AvatarImageSrcType;
  timeStamp: string;
  message: string;
  userName: string;
  unreadCount?: string;
};

export const MessageCardAtom = (props: Props) => {
  return (
    <div className='flex cursor-pointer gap-[10px] p-[14px]'>
      <div>
        <AvatarAtom src={props.imgSrc} />
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <Title level={4} style={{ color: "white" }}>
            {props.userName}
          </Title>

          <p className='text-sm text-white'>{props.timeStamp}</p>
        </div>

        <div className='flex items-center justify-between'>
          <p className='line-clamp-1 w-[90%] text-sm text-[#BFBFBF]'>
            {props.message}
          </p>

          {props.unreadCount && (
            <div className='flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4D4F] text-xs'>
              {props.unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
