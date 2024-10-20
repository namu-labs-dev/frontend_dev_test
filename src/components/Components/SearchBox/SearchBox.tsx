import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  maxLength?: number;
  minLength?: number;
  type?: "text";
} & JSX.IntrinsicElements["input"];

export function SearchBox({ type = "text", ...props }: Props) {
  return (
    <div className='rounded-common flex overflow-hidden border-2 border-black'>
      <input
        type={type}
        {...props}
        placeholder='search'
        className='flex-1 px-4 py-[15px] outline-none'
        id='ns_search'
      />
      <label htmlFor='ns_search' className='m-0 block py-[15px] pr-4'>
        <SVGAtom iconName='search' className='h-[21px] w-[21px]' />
      </label>
    </div>
  );
}
