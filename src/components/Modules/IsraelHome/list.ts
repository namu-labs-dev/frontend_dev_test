import eth from "../../../../public/pngs/eth.png";
import nvir from "../../../../public/pngs/nvir.png";
import { MessageProps } from "~/components/Components/MessageList/MessageList";

export const messages: MessageProps[] = [
  {
    id: "1",
    image: eth,
    title: "ETH",
    content: "User: namulabs is fantasic company...",
    timestamp: "08:43 PM",
    isViewed: true,
  },
  {
    id: "2",
    image: nvir,
    title: "Nvir",
    content: "User: namulabs is fantasic company...",
    timestamp: "08:42 AM",
    isViewed: false,
  },
];
