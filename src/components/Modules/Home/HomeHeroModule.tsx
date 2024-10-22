import { HeroCarousel } from "~/components/Components/HeroCarousel/HeroCarousel";

type Props = {
  heroProps: React.ComponentProps<typeof HeroCarousel>;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='bg-primaryGreen flex flex-col items-center justify-center gap-8 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:flex-row md:gap-12 md:px-8 md:pb-20 md:pt-16 lg:gap-16 lg:px-[5.625rem] lg:pb-24'>
      <div className='w-full px-4 pt-4 text-center sm:px-0 md:w-1/2 md:pt-0 md:text-left'>
        <h1 className='text-2xl font-black italic leading-tight sm:text-3xl md:text-[2.5rem] md:leading-[1.2] lg:text-[4rem] lg:leading-[4.75rem]'>
          Million FANDOM Ways to Earn Token
        </h1>
        <p className='mt-2 w-full text-base font-medium sm:mt-3 sm:text-lg md:mt-4 md:w-5/6'>
          Join exciting communities, have fun and make a difference.
        </p>
      </div>

      <div className='w-full md:w-1/2'>
        <HeroCarousel {...props.heroProps} />
      </div>
    </div>
  );
};
