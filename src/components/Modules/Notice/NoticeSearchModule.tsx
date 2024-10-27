import { SearchAndDropDown } from "~/components/Components/SearchAndDropDown/SearchAndDropDown";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  noticesLength: number;
};

export function NoticeSearchModule(props: Props) {
  return (
    <div className='mt-6 flex w-full lg:mt-[60px]'>
      <Title className='hidden text-lg font-medium lg:block'>
        Total {props.noticesLength}
      </Title>

      <div className='lg:ml-auto'>
        <SearchAndDropDown
          filterOptions={[{ id: "1", label: "Title", value: "title" }]}
        />
      </div>
    </div>
  );
}
