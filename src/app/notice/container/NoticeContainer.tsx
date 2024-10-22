"use client";

import React from "react";
import { NoticesTemplate } from "~/components/Templates/Notice/NoticesTemplate";
import { testNotices } from "~/utils/common";

export function NoticeContainer() {
  const noticeTemplateProps: React.ComponentProps<typeof NoticesTemplate> = {
    noticeHeaderModuleProps: {},
    noticeListModuleProps: {
      notices: testNotices,
    },
    noticeFooterModuleProps: {
      paginationProps: {
        currentPage: 1,
      },
    },
  };

  return <NoticesTemplate {...noticeTemplateProps} />;
}
