import {
  MessageList,
  type Message,
} from "~/components/Components/MessageCardList/MesageCardList";
import { TransactionModal } from "~/components/Components/TransactionModal/TransactionModal";

type Props = {
  messages: Message[];
  modalProps: React.ComponentProps<typeof TransactionModal>;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='mt-6 h-full rounded-t-[30px] bg-[#2C2D30] p-5 text-white'>
      <MessageList messages={props.messages} />
      <TransactionModal {...props.modalProps} />
    </div>
  );
};
