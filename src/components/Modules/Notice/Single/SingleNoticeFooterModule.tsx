import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { type Notice } from "./SingleNoticeContentModule";
import { FileInfo } from "~/components/Components/FIleInfo/FileInfo";
import { Text } from "~/components/Components/Text/Text";

type Props = {
  notice?: Notice;
};

export function SingleNoticeFooterModule(props: Props) {
  return !props.notice ? null : (
    <div className='mt-6 flex flex-col gap-6'>
      <div className='lg:hidden'>
        <FileInfo
          fileName={props.notice.filename}
          fileSize={props.notice.filesize}
        />
      </div>

      <div className='flex items-center justify-between'>
        <div className='group flex cursor-pointer items-center gap-5'>
          <button className='rounded-[10px] border-2 border-black p-[10px] group-hover:shadow-black_spread'>
            <SVGAtom iconName='arrowLeftLong' className='h-4 w-4' />
          </button>

          <Text className='text-lg font-medium group-hover:font-bold'>
            Notice title
          </Text>
        </div>

        <div className='group flex cursor-pointer items-center gap-5'>
          <Text className='text-lg font-medium group-hover:font-bold'>
            Notice title
          </Text>

          <button className='rounded-[10px] border-2 border-black p-[10px] group-hover:shadow-black_spread'>
            <SVGAtom iconName='arrowLeftLong' className='h-4 w-4 rotate-180' />
          </button>
        </div>
      </div>
    </div>
  );
}
