import { HeroCarousel } from "~/components/Components/HeroCarousel/HeroCarousel";

type Props = {
  heroTextProps: {
    heading: React.ReactNode;
    description: string;
  };
  heroCarouselProps: React.ComponentProps<typeof HeroCarousel>;
};

export const HomeHeroModule = (props: Props) => {
  return (
    <div className='flex flex-col items-start justify-center gap-x-6 gap-y-3 bg-primaryGreen px-6 pb-12 pt-8 sm:px-9 md:flex-row md:items-center md:pb-24 md:pt-12 lg:px-[48px]'>
      <div className='text-left md:max-lg:w-full'>
        {props.heroTextProps.heading}
        <p className='mt-2 text-lg font-medium sm:mt-3 md:mt-4 md:w-5/6'>
          {props.heroTextProps.description}
        </p>
      </div>

      <div className=''>
        <HeroCarousel {...props.heroCarouselProps} />
      </div>
    </div>
  );
};
