"use client";

import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import { MobileNavigationAtom } from "~/components/Atoms/MobileNavigationAtom/MobileNavigationAtom";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";
import { FiSend } from "react-icons/fi";
import { FaDiscord, FaTwitter } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
};

export function NoticeLayout(props: Props) {
  return (
    <div>
      <div className='hidden lg:block'>
        <NavigationAtom creators={[]} notifications={[]} />
      </div>

      <MobileNavigationAtom title='Notice' />

      {props.children}

      <FooterAtom
        footerTitle='@FANDOM GLOBAL PTE LTD'
        iconLinks={[
          { icon: <FiSend size={30} />, href: "/twitter" },
          { icon: <FaDiscord size={30} />, href: "/discord" },
          { icon: <FaTwitter size={30} />, href: "/telegram" },
        ]}
        navLinks={[
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Contact Us", href: "/contact" },
          { label: "Notice", href: "/notice" },
        ]}
      />
    </div>
  );
}
