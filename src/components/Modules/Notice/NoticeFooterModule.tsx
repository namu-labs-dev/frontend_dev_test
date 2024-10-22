import { Pagination } from "~/components/Components/Pagination/Pagination";

type Props = {
  paginationProps: React.ComponentProps<typeof Pagination>;
};

export function NoticeFooterModule(props: Props) {
  return (
    <div className='mt-6'>
      <Pagination {...props.paginationProps} />
    </div>
  );
}
