import Link from "next/link";
import { useState } from "react";
import * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  darkTheme?: boolean;
};

type linkProps = {
  href: string;
  iconName: keyof typeof svgs;
}[];

export const IconFooterAtom = (props: Props) => {
  const [activeLink, setActiveLink] = useState(2);

  const links: linkProps = [
    {
      href: "#",
      iconName: "dollar",
    },
    {
      href: "#",
      iconName: "messageIcon",
    },
    {
      href: "#",
      iconName: "walletIcon",
    },
    {
      href: "#",
      iconName: "historyIcon",
    },
  ];

  return (
    /*<div
      className={`flex h-full items-center justify-center ${props.darkTheme ? "bg-[#1F1F1F]" : "bg-[#FFC96F]"}`}
    >
      <div className={`${props.darkTheme ? "text-white" : "text-dark"}`}>
        title
      </div>
    </div> */
    <div
      className={`grid grid-cols-4 justify-items-center gap-x-3 px-4 ${props.darkTheme ? "bg-[#1F1F1F]" : "bg-[#FFC96F]"} `}
    >
      {links.map((link, index) => {
        return (
          <div
            key={index}
            className={` w-full ${
              activeLink === index
                ? "border-t-2 border-green-400 !fill-white"
                : ""
            }`}
          >
            <Link
              href={link.href}
              onClick={() => setActiveLink(index)}
              className={`flex items-center justify-center py-4 text-gray-400 ${
                activeLink === index ? "!fill-white" : ""
              }`}
            >
              <SVGAtom iconName={link.iconName} className='h-6 w-6' />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
