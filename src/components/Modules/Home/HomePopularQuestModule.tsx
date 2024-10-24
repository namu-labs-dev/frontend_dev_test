import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  homePopularQuestHeaderProps: React.ComponentProps<
    typeof ViewAllSectionTabAtom
  >;
  popularQuestCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

export const HomePopularQuestModule = (props: Props) => {
  return (
    <div className='relative mt-[10%] py-[2%] md:mt-0'>
      <ViewAllSectionTabAtom {...props.homePopularQuestHeaderProps} />
      <CreatorCarousel
        {...props.popularQuestCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        reduceSlideWidth
        removeLeftMargin={true}
      />
    </div>
  );
};
