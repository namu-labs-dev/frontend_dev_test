import React from "react";
import SocialLinkList from "~/components/Components/SocialLinkList/SocialLinkList";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

const FooterAtom = () => {
  const router = usePathname(); // Hook to access current route
  const currentPath = router; // Gets the current path
  console.log(currentPath);

  //All props would be adjusted based on the code-convention when building modules

  const title = "@FANDOM GLOBAL PTE LTD";

  const navLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact" },
    { label: "Notice", href: "/notice" },
  ];

  // Using ReactIcons bcos figma link couldnt extract icons
  const iconLinks = [
    { icon: <FiSend />, href: "/twitter" },
    { icon: <FaDiscord />, href: "/discord" },
    { icon: <FaTwitter />, href: "/telegram" },
  ];

  return (
    <div>
      <header className='flex items-center justify-between px-8 py-4'>
        <div className='flex items-center'>
          <span className='mr-[5rem] font-bold'>{title}</span>
          <nav>
            <ul className='flex space-x-6'>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-black ${currentPath === link.href && "text-black"}  hover:text-gray-600`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SocialLinkList iconLinks={iconLinks} />
      </header>
    </div>
  );
};

export default FooterAtom;
