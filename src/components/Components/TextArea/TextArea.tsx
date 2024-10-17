type Props = {
  withCharCount?: boolean;
} & JSX.IntrinsicElements["textarea"];

export function TextArea({ placeholder = "Description", ...props }: Props) {
  return (
    <div className='relative'>
      <textarea
        placeholder={placeholder}
        name={props.name}
        id={props.id}
        {...props}
        className='scrollbar-custom h-[372px] w-full resize-none rounded-[10px] border-2 border-black p-4 text-sm font-medium outline-none md:h-[220px]'
      ></textarea>

      {/* {props.withCharCount && (
        <KeyCount current={0} total={1000} className="absolute bottom-4 right-4" />
      )} */}
    </div>
  );
}
