import { NoticeHeader } from "~/components/Components/NoticeHeader/NoticeHeader";
import { Text } from "~/components/Components/Text/Text";
import Image from "next/image";
import { FileInfo } from "~/components/Components/FIleInfo/FileInfo";

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
  notice?: Notice;
};

export function SingleNoticeContentModule(props: Props) {
  return !props.notice ? (
    <div>Nothing here</div>
  ) : (
    <div className='rounded-[10px] border-2 border-black'>
      <NoticeHeader
        timestamp={props.notice.timestamp}
        title={props.notice.title}
      />

      <div className='px-3 py-6'>
        <Text className='font-medium'>{props.notice.description}</Text>

        <Text className='font-medium'>{props.notice.content}</Text>

        <div className='mt-[57px]'>
          <Image
            src={props.notice.img}
            alt='notice-img'
            objectFit='cover'
            width={328}
            height={302}
          />
        </div>

        <div className='mt-5 hidden max-w-[328px] lg:block'>
          <FileInfo
            fileName={props.notice.filename}
            fileSize={props.notice.filesize}
          />
        </div>
      </div>
    </div>
  );
}
