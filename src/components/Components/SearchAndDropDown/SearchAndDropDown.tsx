import { SearchBox } from "../SearchBox/SearchBox";
import {
  SearchDropDown,
  type FilterOption,
} from "../SearchDropDown/SearchDropDown";

type Props = {
  foo?: string;
  filterOptions: FilterOption[];
};

export function SearchAndDropDown(props: Props) {
  return (
    <div className='flex max-h-[60px] gap-2'>
      <SearchDropDown options={props.filterOptions} />
      <SearchBox />
    </div>
  );
}
