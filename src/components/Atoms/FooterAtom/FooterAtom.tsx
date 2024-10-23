import React from "react";
import SocialLinkList from "~/components/Components/SocialLinkList/SocialLinkList";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaRegCopyright } from "react-icons/fa";
type navProps = {
  label: string;
  href: string;
};

type linkProps = {
  icon: React.ReactNode;
  href: string;
};
type Props = {
  footerTitle: string;
  navLinks: navProps[];
  iconLinks: linkProps[];
};

const FooterAtom = (props: Props) => {
  return (
    <div>
      <header className='mt-2 items-center justify-between px-8 py-4 md:flex'>
        <div className='my-2 items-center md:my-1 md:flex'>
          <span className='flex font-bold md:mr-[3rem] lg:mr-[6rem]'>
            <FaRegCopyright className='mr-3' /> {new Date().getFullYear()}{" "}
            {props.footerTitle}
          </span>
          <nav className=' mt-5 md:mt-0'>
            <ul className='md:flex md:space-x-6'>
              {props.navLinks.map((link) => (
                <li className='py-2 md:py-0' key={link.label}>
                  <Link
                    href={link.href}
                    className=' border-b-2 font-medium text-footerLink hover:text-gray-600  md:border-none'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SocialLinkList iconLinks={props.iconLinks} />
      </header>
    </div>
  );
};

export default FooterAtom;
