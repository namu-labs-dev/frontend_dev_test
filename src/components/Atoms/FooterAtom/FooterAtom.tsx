import React from "react";
import SocialLinkList from "~/components/Components/SocialLinkList/SocialLinkList";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

const FooterAtom = () => {
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
    { icon: <FiSend size={30} />, href: "/twitter" },
    { icon: <FaDiscord size={30} />, href: "/discord" },
    { icon: <FaTwitter size={30} />, href: "/telegram" },
  ];

  return (
    <div>
      <header className='mt-2 items-center justify-between px-8 py-4 md:flex'>
        <div className='my-2 items-center md:my-1 md:flex'>
          <span className='font-bold md:mr-[3rem] lg:mr-[6rem]'>{title}</span>
          <nav className=' mt-5 md:mt-0'>
            <ul className='md:flex md:space-x-6'>
              {navLinks.map((link) => (
                <li className='py-2 md:py-0' key={link.label}>
                  <Link
                    href={link.href}
                    className=' border-b-2 font-medium text-[#777784] hover:text-gray-600  md:border-none'
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
