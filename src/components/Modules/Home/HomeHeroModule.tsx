import { HeroCarousel } from "~/components/Components/HeroCarousel/HeroCarousel";

type Props = {
  heroProps: React.ComponentProps<typeof HeroCarousel>;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='flex flex-col items-start justify-center gap-x-6 gap-y-3 bg-primaryGreen px-6 pb-12 pt-8 sm:px-9 md:flex-row md:items-center md:pb-24 md:pt-12 lg:px-[48px]'>
      <div className='text-left md:max-lg:w-full'>
        <h1 className='text-4xl font-black italic leading-[2.4375rem] tracking-tighter sm:text-5xl sm:leading-[3.25rem] md:text-[3.3125rem] lg:text-6xl'>
          Million <br className='min-[404px]:max-lg:hidden' /> FANDOM
          <br className='md:max-lg:hidden' /> Ways to Earn{" "}
          <br className='min-[404px]:max-lg:hidden' />
          Token
        </h1>
        <p className='mt-2 text-lg font-medium sm:mt-3 md:mt-4 md:w-5/6'>
          Join exciting communities, have fun and make a difference.
        </p>
      </div>

      <div className=''>
        <HeroCarousel {...props.heroProps} />
      </div>
    </div>
  );
};
