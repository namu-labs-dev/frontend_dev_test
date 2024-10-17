import { IconButtonAtom } from "../IconButtonAtom/IconButtonAtom";

type Props = {
  onEdit?: () => void;
  onRemove?: () => void;
};

export function EditAndRemoveAtom(props: Props) {
  return (
    <div className='flex items-center gap-4'>
      <IconButtonAtom iconName='edit' onClick={props.onEdit} />
      <IconButtonAtom iconName='remove' onClick={props.onRemove} />
    </div>
  );
}
