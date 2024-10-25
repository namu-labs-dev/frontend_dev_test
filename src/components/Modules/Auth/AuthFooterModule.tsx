import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { FiSend, FiX } from "react-icons/fi";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  foo?: string;
};

export function AuthFooterModule(props: Props) {
  // Define footer props
  const footerTitle = "@FANDOM GLOBAL PTE LTD";
  const navLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact" },
    { label: "Notice", href: "/notice" },
  ];
  const iconLinks = [
    { icon: <FaTwitter size={30} />, href: "/twitter" },
    { icon: <FaDiscord size={30} />, href: "/discord" },
    { icon: <FaTelegram size={30} />, href: "/telegram" },
  ];

  return (
    <FooterAtom
      footerTitle={footerTitle}
      navLinks={navLinks}
      iconLinks={iconLinks}
    />
  );
}
