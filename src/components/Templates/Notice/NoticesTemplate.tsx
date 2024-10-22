import React from "react";
import { NoticeFooterModule } from "~/components/Modules/Notice/NoticeFooterModule";
import { NoticeHeaderModule } from "~/components/Modules/Notice/NoticeHeaderModule";
import { NoticeListModule } from "~/components/Modules/Notice/NoticeListModule";
import { NoticeSearchModule } from "~/components/Modules/Notice/NoticeSearchModule";

type Props = {
  foo?: string;
  noticeHeaderModuleProps: React.ComponentProps<typeof NoticeHeaderModule>;
  noticeListModuleProps: React.ComponentProps<typeof NoticeListModule>;
  noticeFooterModuleProps: React.ComponentProps<typeof NoticeFooterModule>;
  noticeSearchModuleProps: React.ComponentProps<typeof NoticeSearchModule>;
};

export function NoticesTemplate(props: Props) {
  return (
    <section className='px-6 pb-6 lg:px-[40px]'>
      <NoticeHeaderModule {...props.noticeHeaderModuleProps} />

      <NoticeSearchModule {...props.noticeSearchModuleProps} />

      <NoticeListModule {...props.noticeListModuleProps} />

      <NoticeFooterModule {...props.noticeFooterModuleProps} />
    </section>
  );
}
