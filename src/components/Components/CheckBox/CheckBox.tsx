export type ListItem = {
  id: string;
  label: string;
};

type Props = {
  item: ListItem;
  onCheckedChange?: (value: boolean) => void;
  checked?: boolean;
};

export function CheckBox(props: Props) {
  return (
    <div key={props.item.id}>
      <input
        type='checkbox'
        name={props.item.label}
        id={props.item.id}
        onChange={(e) =>
          props.onCheckedChange
            ? props.onCheckedChange(e.target.checked)
            : undefined
        }
        checked={props.checked}
      />
      <label htmlFor={props.item.id} className='ml-3 text-sm font-medium'>
        {props.item.label}
      </label>
    </div>
  );
}
