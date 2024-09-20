import { type AvatarImageSrcType } from "~/components/Atoms/AvatarAtom/AvatarAtom";
import { MessageCardAtom } from "~/components/Atoms/MessageCardAtom/MessageCardAtom";

export type Message = {
  imgSrc: AvatarImageSrcType;
  timeStamp: string;
  message: string;
  userName: string;
  unreadCount?: string;
};

type Props = {
  messages: Message[];
};

export const MessageList = (props: Props) => {
  return (
    <div>
      {props.messages.map((msg, idx) => (
        <MessageCardAtom {...msg} key={idx} />
      ))}
    </div>
  );
};
