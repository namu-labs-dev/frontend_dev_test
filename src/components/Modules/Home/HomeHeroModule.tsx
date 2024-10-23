import { HeroCarousel } from "~/components/Components/HeroCarousel/HeroCarousel";

type Props = {
  heroProps: React.ComponentProps<typeof HeroCarousel>;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 bg-primaryGreen px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:flex-row md:gap-12 md:px-8 md:pb-20 md:pt-16 lg:gap-16 lg:px-[5.625rem] lg:pb-24'>
      <div className='w-full px-6 pt-4 text-left md:w-1/2 md:px-0 md:pt-0'>
        <h1 className='text-[2.625rem] font-black italic leading-[3rem] sm:text-[3.375rem] sm:leading-[4.3125rem] md:text-[4rem] md:leading-[4.5rem] lg:text-[4rem] lg:leading-[4.75rem]'>
          Million <br /> FANDOM <br /> Ways to Earn Token
        </h1>
        <p className='mt-2 w-full text-lg font-medium sm:mt-3 md:mt-4 md:w-5/6'>
          Join exciting communities, have fun and make a difference.
        </p>
      </div>

      <div className='w-full md:w-1/2'>
        <HeroCarousel {...props.heroProps} />
      </div>
    </div>
  );
};
