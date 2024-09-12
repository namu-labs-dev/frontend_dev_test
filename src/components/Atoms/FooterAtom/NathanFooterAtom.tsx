import Link from "next/link";
import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import { usePathname } from "next/navigation";

interface FooterNavComponentProperties {
  icon: "dollar" | "message" | "wallet" | "history";
  path: string;
}

const footerNavData: FooterNavComponentProperties[] = [
  {
    icon: "dollar",
    path: "/",
  },

  {
    icon: "message",
    path: "/",
  },

  {
    icon: "wallet",
    path: "/nathan/testPage1",
  },

  {
    icon: "history",
    path: "/",
  },
];

export const NathanFooterAtom = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full items-center justify-center bg-[#262626]">
      <div className="flex flex-row justify-between">
        {footerNavData.map((data, index) => {
          const { icon, path } = data;

          return (
            <Link href={path} className="no-underline outline-none" key={index}>
              <div
                className={`flex h-[55px] w-[90px] items-center justify-center border-t-2 border-t-transparent duration-300 ease-in md:w-[100px] ${pathname === path && "border-t-[#00EC97]"}`}
              >
                <SVGAtom iconName={icon} className="h-8 w-8" color="black" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
