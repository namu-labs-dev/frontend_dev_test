import { NoticeItem } from "~/components/Components/NoticeItem/NoticeItem";
import { Title } from "~/components/Components/Title/Title";
import Link from "next/link";

export type Notice = {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  content: string;
  img: string;
  filename: string;
  filesize: string;
};

type Props = {
  notices: Notice[];
};

export function NoticeListModule(props: Props) {
  const noticesLength = props.notices.length;

  return (
    <div className='lg:mt-6'>
      <Title level={1} className='my-6 text-xl font-bold lg:hidden'>
        {" "}
        {noticesLength} Notices{" "}
      </Title>

      <div className='flex flex-col gap-4'>
        {props.notices.map((notice) => (
          <Link href={`/notice/${notice.id}`} key={notice.id}>
            <NoticeItem timestamp={notice.timestamp} title={notice.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
