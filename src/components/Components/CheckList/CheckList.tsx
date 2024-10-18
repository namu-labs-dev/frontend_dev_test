import { type ListItem } from "../CheckBox/CheckBox";
import { CheckBox } from "../CheckBox/CheckBox";

type Props = {
  listItems: ListItem[];
  onCheckedChange?: (value: { checked: boolean; item: ListItem }) => void;
};

export function ChecKList(props: Props) {
  return (
    <div className='scrollbar-custom flex max-h-[212px] max-w-[313px] flex-col space-y-4 overflow-y-scroll rounded-[10px] border-2 border-black p-[14px]'>
      {props.listItems.map((item) => (
        <CheckBox
          item={item}
          key={item.id}
          onCheckedChange={(checked) =>
            props.onCheckedChange
              ? props.onCheckedChange({ checked, item })
              : undefined
          }
        />
      ))}
    </div>
  );
}
