import { HeroCarousel } from "~/components/Components/HeroCarousel/HeroCarousel";

type Props = {
  heroProps: React.ComponentProps<typeof HeroCarousel>;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='bg-primaryGreen flex items-center justify-center space-x-4 px-16 py-16'>
      <div className='text-wrap'>
        <h1 className='text-[4rem] font-black italic leading-[4.75rem]'>
          Million FANDOM Ways to Earn Token
        </h1>
        <p className='text-lg'>
          Join exciting communities, have fun and make a difference.
        </p>
      </div>

      <div className=''>
        <HeroCarousel {...props.heroProps} />
      </div>
    </div>
  );
};
