import { IFooterMenu, MenuItemType, WalletCoin } from "../types";

export const footerMenuItems: MenuItemType<IFooterMenu>[] = [
  {
    name: "dollar",
    icon: "dollar",
  },
  {
    name: "message",
    icon: "message",
  },
  {
    name: "wallet",
    icon: "wallet",
  },
  {
    name: "history",
    icon: "history",
  },
];

export const walletCoins: WalletCoin[] = [
  {
    name: "ETH",
    icon: "eth",
    time: "08:43 PM",
    badge: "N",
    description: "User: namulabs is fantasic company...",
  },
  {
    name: "Nvir",
    icon: "nvir",
    time: "08:43 PM",
    badge: "",
    description: "User: namulabs is fantasic company...",
  },
];
