import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  foo?: string;
};

// todo: replace hard-coded style with tw config
// todo: add helper props to take file data out

export function FileSelect(props: Props) {
  return (
    <div>
      <input
        type='file'
        name='file-uploads'
        id='file-uploads'
        className='hidden opacity-0'
      />
      <label
        className='flex max-w-[400px] items-center justify-center rounded-[10px] border-2 border-black px-[24px] py-[33px] font-medium text-[#8C8C8C]'
        htmlFor='file-uploads'
      >
        <div className=''>
          <div className='mx-auto flex w-fit items-center justify-center rounded-lg bg-[#8C8C8C1A] px-9 py-2'>
            <SVGAtom iconName='upload' className='h-6 w-4' />
          </div>

          <span className='mt-[10px] inline-block'>
            <span className='text-[#1838E0]'>Click here</span> to upload or drop
            files here
          </span>
        </div>
      </label>
    </div>
  );
}
