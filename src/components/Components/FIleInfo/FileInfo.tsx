import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  fileName: string;
  fileSize: string;
};

export function FileInfo(props: Props) {
  return (
    <button className='flex w-full items-center justify-between rounded-[10px] border-2 border-black bg-[#F0F0F0] px-[18px] py-3'>
      <div>
        <span className='block text-sm'>{props.fileName}</span>
        <span className='block text-left text-xs uppercase text-faintAsh'>
          {props.fileSize}
        </span>
      </div>

      <SVGAtom iconName='download' className='h-5 w-5' />
    </button>
  );
}
