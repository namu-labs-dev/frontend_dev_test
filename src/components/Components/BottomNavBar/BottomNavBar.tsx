import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaHome, FaHistory, FaUser } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaMessage } from "react-icons/fa6";
import Image from "next/image";

const BottomNavigation: React.FC = () => {
  const router = usePathname(); // Hook to access current route
  const currentPath = router; // Gets the current path
  console.log(currentPath);
  interface Navigation {
    path: string;
    label: string;
    icon: string;
  }
  // Define routes and corresponding icons
  const navigation: Navigation[] = [
    { path: "#!", icon: "dollar-circle.svg", label: "Home" },
    { path: "/#!", icon: "message.svg", label: "Messages" },
    { path: "/favour/testPage1", icon: "wallet.svg", label: "Profile" },
    { path: "/#!", icon: "history.svg", label: "History" },
  ];

  return (
    <div className='relative bottom-0 left-0 right-0 flex items-center justify-around bg-[#262626]'>
      {navigation.map((navItem) => {
        const icon = navItem.icon;
        const isActive = currentPath === navItem?.path;

        return (
          <div
            key={navItem.label}
            className='relative flex flex-col items-center'
          >
            {isActive && (
              <div className='relative h-[2px] w-[6rem] bg-green-500' /> // Active indicator styled more prominently
            )}
            <Link href={navItem.path} className='py-3' key={navItem.label}>
              <Image
                src={`/svgs/${icon}`}
                alt=''
                width={30}
                height={30}
                className={`text-2xl transition-all duration-300 ${
                  isActive
                    ? "brightness-200 filter" // Bright white when active
                    : "brightness-75 filter" // Faded white when inactive
                }`}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
