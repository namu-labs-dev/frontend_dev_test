import { SingleNoticeContentModule } from "~/components/Modules/Notice/Single/SingleNoticeContentModule";

type Props = {
  foo?: string;
  noticeContentModuleProps: React.ComponentProps<
    typeof SingleNoticeContentModule
  >;
};

export function SingleNoticeTemplate(props: Props) {
  return (
    <section>
      <SingleNoticeContentModule {...props.noticeContentModuleProps} />
    </section>
  );
}
