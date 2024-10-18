import { FilterAtom } from "~/components/Atoms/FilterAtom/FilterAtom";
import { SearchBox } from "../SearchBox/SearchBox";

type Props = {
  withCount?: { max: number; current: 0 };
};

export function SearchAndFilter(props: Props) {
  return (
    <div className='inline-block'>
      <div className='flex gap-[6px]'>
        <FilterAtom />

        <SearchBox />
      </div>

      {props.withCount ? (
        <div className='mt-3 flex'>
          {/* <KeyCount /> implementation on another branch */}
        </div>
      ) : null}
    </div>
  );
}
