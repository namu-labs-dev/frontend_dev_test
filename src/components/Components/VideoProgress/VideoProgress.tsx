import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  handlePlayPause: () => void;
  isPlaying: boolean;
  progress: number;
};

export function VideoProgress(props: Props) {
  return (
    <div className='flex items-center rounded-md bg-[#848484] p-4'>
      <button className='inline-flex items-center justify-center'>
        {props.isPlaying ? (
          <SVGAtom iconName='pause' className='h-4 w-4' />
        ) : (
          <SVGAtom iconName='play' className='h-4 w-4' />
        )}
      </button>

      <progress
        value={props.progress}
        max={100}
        className='custom-progress ml-3 flex-1'
      >
        {props.progress}
      </progress>
    </div>
  );
}
