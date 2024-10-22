import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  maxLength?: number;
  minLength?: number;
  type?: "text";
} & JSX.IntrinsicElements["input"];

export function SearchBox({ type = "text", ...props }: Props) {
  return (
    <div className='flex overflow-hidden rounded-common border-2 border-black'>
      <input
        type={type}
        {...props}
        placeholder='search'
        className='w-[90%] px-4 py-[15px] outline-none placeholder:text-base placeholder:font-medium placeholder:text-black'
        id='ns_search'
      />
      <label htmlFor='ns_search' className='block bg-white py-[15px] pr-4'>
        <SVGAtom iconName='search' className='h-[21px] w-[21px]' />
      </label>
    </div>
  );
}
