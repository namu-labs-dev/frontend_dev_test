import type * as svgs from "public/svgs";

export interface cardList {
  exchange: string;
  message: string;
  user: string;
  timeStamp: string;
  src: keyof typeof svgs;
}
export interface navs {
  path: string;
  label: string;
  icon: keyof typeof svgs;
}
