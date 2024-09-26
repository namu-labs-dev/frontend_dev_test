import Image from "next/image";

export const DanielStarredAtom = ({ name }: { name: string }) => {
  return (
    <>
      <div className='relative mt-3 flex flex-col'>
        <div className='relative flex h-auto w-auto items-center justify-center rounded-full bg-[#2C2D30] p-3'>
          <Image
            src={"/svgs/star.svg"}
            width={80}
            height={80}
            alt='starIconIllustration'
          />
        </div>

        <p className='mt-5 text-center text-[25px] font-normal leading-4 text-white'>
          {name ? name : "Proxima"}
        </p>
      </div>
    </>
  );
};
