import { SingleNoticeContentModule } from "~/components/Modules/Notice/Single/SingleNoticeContentModule";
import { SingleNoticeFooterModule } from "~/components/Modules/Notice/Single/SingleNoticeFooterModule";

type Props = {
  foo?: string;
  noticeContentModuleProps: React.ComponentProps<
    typeof SingleNoticeContentModule
  >;
  noticeFooterModuleProps: React.ComponentProps<
    typeof SingleNoticeFooterModule
  >;
};

export function SingleNoticeTemplate(props: Props) {
  return (
    <section className='p-6'>
      <SingleNoticeContentModule {...props.noticeContentModuleProps} />
      <SingleNoticeFooterModule {...props.noticeFooterModuleProps} />
    </section>
  );
}
