"use client";

import React from "react";
import { NoticeTemplate } from "~/components/Templates/Notice/NoticeTemplate";

export function NoticeContainer() {
  const noticeTemplateProps: React.ComponentProps<typeof NoticeTemplate> = {
    noticeHeaderModuleProps: {},
  };

  return <NoticeTemplate {...noticeTemplateProps} />;
}
