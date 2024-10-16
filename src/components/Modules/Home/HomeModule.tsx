import { NoticeHeader } from "~/components/Components/NoticeHeader/NoticeHeader";
import { NoticeItem } from "~/components/Components/NoticeItem/NoticeItem";

type Props = {
  foo: string;
};

export function HomeModule(props: Props) {
  return (
    <>
      {/* todo: push props up */}
      <div className='flex flex-col justify-center gap-4 border border-black p-4'>
        <NoticeHeader title='Notice name' timestamp='0000-00-00' />
        <NoticeItem title='Notice name' timestamp='0000-00-00' />
      </div>
    </>
  );
}
