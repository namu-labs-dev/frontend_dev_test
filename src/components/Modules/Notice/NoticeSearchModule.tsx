import { SearchAndDropDown } from "~/components/Components/SearchAndDropDown/SearchAndDropDown";

export function NoticeSearchModule() {
  return (
    <div className='mt-6 flex w-full'>
      <div className='lg:ml-auto'>
        <SearchAndDropDown
          filterOptions={[{ id: "1", label: "Title", value: "title" }]}
        />
      </div>
    </div>
  );
}
