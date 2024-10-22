import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";

type Props = {
  popularCreatorHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  popularCreatorCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

export const HomePopularCreatorModule = (props: Props) => {
  console.log(props.popularCreatorCarouselProps);
  return (
    <>
      <ViewAllSectionTabAtom {...props.popularCreatorHeaderProps} />
      <CreatorCarousel
        {...props.popularCreatorCarouselProps}
        slideRenderer={(slide, index) => (
          <CreatorCarouselAvatarAtom key={index} {...slide} />
        )}
        reduceSlideWidth={true}
      />
    </>
  );
};
