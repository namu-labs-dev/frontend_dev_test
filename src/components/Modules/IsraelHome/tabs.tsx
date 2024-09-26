import { Transactions } from "~/components/Tabs/Transactions";
import { Messages } from "~/components/Tabs/Messages";
import { Wallet } from "~/components/Tabs/Wallet";
import { History } from "~/components/Tabs/History";
import * as svgs from "public/svgs";

export const getFooterTabs = (setShowCustomModal: (value: boolean) => void) => [
  {
    id: "dollar",
    iconName: "dollar" as keyof typeof svgs,
    content: <Transactions setShowCustomModal={setShowCustomModal} />,
  },
  {
    id: "message",
    iconName: "message" as keyof typeof svgs,
    content: <Messages setShowCustomModal={setShowCustomModal} />,
  },
  {
    id: "wallet",
    iconName: "wallet" as keyof typeof svgs,
    content: <Wallet setShowCustomModal={setShowCustomModal} />,
  },
  {
    id: "history",
    iconName: "history" as keyof typeof svgs,
    content: <History setShowCustomModal={setShowCustomModal} />,
  },
];
