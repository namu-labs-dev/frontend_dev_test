import * as svgs from "public/svgs";
export interface MenuItemType<N> {
  name: N;
  icon: IconName;
}
export interface WalletCoin {
  name: string;
  icon: IconName | null;
  time: string;
  badge: any;
  description: string;
}
export type IFooterMenu = "dollar" | "message" | "wallet" | "history";

export type IconName = keyof typeof svgs;

export type TransactionStatus = "processing" | "completed" | "pending";
