import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";

type Props = {
  popularCreatorHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  popularCreatorCarouselProps: React.ComponentProps<typeof CreatorCarousel>;
};

export const HomePopularCreatorModule = (props: Props) => {
  console.log(props.popularCreatorCarouselProps);

  return (
    <>
      <ViewAllSectionTabAtom {...props.popularCreatorHeaderProps} />
      <CreatorCarousel {...props.popularCreatorCarouselProps}>
        {props.popularCreatorCarouselProps.slides.map((slide, index) => (
          <div className='embla__slide'>
            <CreatorCarouselAvatarAtom
              name={slide.title ?? ""}
              icon={slide.avatar ?? ""}
            />
          </div>
        ))}
      </CreatorCarousel>
    </>
  );
};
