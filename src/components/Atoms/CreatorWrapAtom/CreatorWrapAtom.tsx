import Image from "next/image";
import { StaticImageData } from "next/image";
import avatar from "../../../../public/pngs/avatar.png";

type Props = {
  avatar: StaticImageData;
  creatorName: string;
};

export const CreatorWrapAtom = (props: Props) => {
  return (
    <div className='flex w-full max-w-md justify-between'>
      <div className='flex items-center justify-center space-x-2'>
        <div className='relative h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12'>
          <Image
            src={avatar}
            layout='fill'
            objectFit='cover'
            className='rounded-full'
            alt={`${props.creatorName}'s avatar`}
          />
        </div>
        <p className='text-sm font-medium leading-tight sm:text-base md:text-lg'>
          Creator name
        </p>
      </div>
      <button className='rounded-lg border-2 border-[#242327] px-4 py-2 text-sm font-medium leading-tight sm:px-5 sm:py-2.5 sm:text-base'>
        Visit
      </button>
    </div>
  );
};
