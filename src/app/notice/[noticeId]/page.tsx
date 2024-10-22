import { SingleNoticeContainer } from "./container/SingleNoticeContainer";

export default async function Page({
  params,
}: {
  params: Promise<{ noticeId: string }>;
}) {
  const { noticeId } = await params;

  return <SingleNoticeContainer noticeId={noticeId} />;
}
