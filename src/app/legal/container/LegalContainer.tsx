"use client";

import { LegalTemplate } from "~/components/Templates/Legal/LegalTemplate";
import { useState } from "react";
import { tos } from "~/utils/common";

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
  };

  return <LegalTemplate {...legalTemplateProps} />;
}
