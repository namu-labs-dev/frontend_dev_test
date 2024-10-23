import { NoticeLayout } from "./noticeLayout";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <main>
      <NoticeLayout>{props.children}</NoticeLayout>
    </main>
  );
}
