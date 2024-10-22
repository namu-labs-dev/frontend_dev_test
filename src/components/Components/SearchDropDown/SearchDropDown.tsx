import clsx from "clsx";
import { useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

export type FilterOption = {
  id: string;
  label: string;
  value: string;
};

type Props = {
  options: FilterOption[];
};

export function SearchDropDown(props: Props) {
  const [isOpen, setisOpen] = useState(false);
  const [value, setValue] = useState(props.options[0]!);

  function handleSetValue(item: FilterOption) {
    setisOpen(false);
    setValue(item);
  }

  return (
    <div
      className={clsx(
        "relative inline-block rounded-common border-2 border-black bg-white",
        { "rounded-b-none": isOpen }
      )}
    >
      <button
        className={clsx(
          "flex w-full items-center gap-6 px-4 py-[15px] font-medium capitalize",
          { "justify-between": isOpen }
        )}
        onClick={() => setisOpen(!isOpen)}
      >
        <span className='line-clamp-1 font-medium'>{value.label}</span>{" "}
        <SVGAtom iconName='caret' className='inline-block h-2 w-[11px]' />
      </button>

      <ul
        className={clsx(
          "absolute -left-[1.7px] top-[95%] z-10 flex w-[103%] flex-col gap-5 rounded-b-common border-2 border-black bg-white px-3 py-5",
          {
            hidden: !isOpen,
            "border-t-transparent": !isOpen,
          }
        )}
      >
        {props.options.map((item) => (
          <li
            key={item.id}
            className='cursor-pointer font-medium capitalize'
            onClick={() => handleSetValue(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// if stock flies
// className="rounded-common appearance-none border-2 border-black bg-[url('/svgs/caret.svg')] bg-right bg-no-repeat bg-origin-content px-4 py-[15px] font-medium capitalize outline-none"
