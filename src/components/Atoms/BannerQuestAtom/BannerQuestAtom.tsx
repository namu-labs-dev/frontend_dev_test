import Image from "next/image";

type Props = {
  rankingQuestBanner: string;
  raffleQuestBanner: string;
};

export const BannerQuestAtom = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 px-[4%] pt-[5%] sm:flex-row sm:gap-x-10  md:px-[4%] md:pt-0'>
      <div className='sm relative w-[87%]  sm:w-[45%] md:w-[47%] xl:w-[40%]'>
        <Image
          src={props.rankingQuestBanner}
          width={450}
          height={200}
          layout='responsive'
          alt='Ranking Quest Banner'
          className='w-full object-cover object-center'
        />
      </div>
      <div className='relative w-[87%] sm:w-[45%] md:w-[47%] xl:w-[40%]'>
        <Image
          src={props.raffleQuestBanner}
          alt='Raffle Quest Banner'
          width={500}
          height={200}
          layout='responsive'
          className='h-auto w-full object-cover object-center'
        />
      </div>
    </div>
  );
};
