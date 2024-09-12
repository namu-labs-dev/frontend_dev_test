import * as svgs from "public/svgs";
export interface MenuItemType<N>{
    name:N,
    icon:IconName,
}
export type IFooterMenu = "dollar" | "message" | "wallet" | "history"

export type IconName = keyof typeof svgs