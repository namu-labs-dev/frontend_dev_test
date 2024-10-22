export default async function Page({
  params,
}: {
  params: Promise<{ noticeId: string }>;
}) {
  const { noticeId } = await params;

  return <div>Notice Id: {noticeId}</div>;
}
