import { DanielStarredAtom } from "./DanielStarredAtom";

export const DanielEmptyContentAtom = () => {
  return (
    <div className='text-white'>
      <div className='text-3xl font-bold'>Messages</div>
      <div className='my-4'>
        <div className='flex flex-row items-center gap-4'>
          <DanielStarredAtom name='Proxima' />
        </div>
      </div>
    </div>
  );
};
