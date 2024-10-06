import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaHome, FaHistory, FaUser } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaMessage } from "react-icons/fa6";
import Image from "next/image";
import * as svgs from "public/svgs";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

interface navs {
  path: string;
  label: string;
  icon: keyof typeof svgs;
}

type Props = {
  navs: navs[];
};

const FooterAtom = (props: Props) => {
  const router = usePathname(); // Hook to access current route
  const currentPath = router; // Gets the current path
  console.log(currentPath);

  return (
    <div className='relative bottom-0 left-0 right-0 flex items-center justify-around bg-[#262626]'>
      {props.navs.map((navItem) => {
        const icon = navItem.icon;
        const isActive = currentPath === navItem?.path;

        return (
          <div
            key={navItem.label}
            className='relative flex flex-col items-center'
          >
            {isActive && (
              <div className='relative h-[2px] w-[6rem] bg-green-500' />
            )}
            <Link href={navItem.path} className='py-3' key={navItem.label}>
              <SVGAtom
                iconName={icon}
                width={30}
                height={30}
                className={`text-2xl transition-all duration-300 ${
                  isActive ? "brightness-200 filter" : "brightness-75 filter"
                }`}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FooterAtom;
