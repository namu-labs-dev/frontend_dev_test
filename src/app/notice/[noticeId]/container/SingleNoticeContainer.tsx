"use client";

import React from "react";
import { SingleNoticeTemplate } from "~/components/Templates/Notice/Single/SingleNoticeTemplate";
import { testNotices } from "~/utils/common";

type Props = {
  noticeId: string;
};

export function SingleNoticeContainer(props: Props) {
  const notice = testNotices.find((i) => i.id === props.noticeId);

  const singleNoticeTemplateProps: React.ComponentProps<
    typeof SingleNoticeTemplate
  > = {
    noticeContentModuleProps: {
      notice,
    },
    noticeFooterModuleProps: {
      notice,
    },
  };

  return <SingleNoticeTemplate {...singleNoticeTemplateProps} />;
}
