"use client";

import { LegalTemplate } from "~/components/Templates/Legal/LegalTemplate";
import { useState } from "react";
import { tos } from "~/utils/common";
import { FiSend } from "react-icons/fi";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export type Legal = "tos" | "privacy";

export function LegalContainer() {
  const [legalType, setLegalType] = useState<Legal>("tos");

  const legalTemplateProps: React.ComponentProps<typeof LegalTemplate> = {
    legalHeaderModuleProps: {
      title: "Legal",
      legal: legalType,
      onChangeLegal: (val) => setLegalType(val),
      navigationProps: {
        creators: [],
        notifications: [],
      },
    },
    legalTermscontentModuleProps: {
      title: "FAN-QUEST Terms of Service",
      updatedAt: "November 21, 2023",
      body: tos,
    },
    legalPrivacycontentModuleProps: {
      title: "FAN-QUEST Privacy Policy",
      updatedAt: "November 21, 2023",
      body: tos,
    },
    legalFooterModuleProps: {
      footerAtomProps: {
        footerTitle: "@FANDOM GLOBAL PTE LTD",
        navLinks: [
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Contact Us", href: "/contact" },
          { label: "Notice", href: "/notice" },
        ],
        iconLinks: [
          { icon: <FiSend size={30} />, href: "/twitter" },
          { icon: <FaDiscord size={30} />, href: "/discord" },
          { icon: <FaTwitter size={30} />, href: "/telegram" },
        ],
      },
    },
  };

  return <LegalTemplate {...legalTemplateProps} />;
}
