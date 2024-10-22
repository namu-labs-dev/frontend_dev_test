import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import { ListAtom } from "~/components/Atoms/ListPointAtom/ListAtom";

type Props = {
  homePopularQuestHeaderProps: React.ComponentProps<
    typeof ViewAllSectionTabAtom
  >;
  popularQuestCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >; // Exclude slideRenderer from the props passed down
};

export const HomePopularQuestModule = (props: Props) => {
  return (
    <div>
      <ViewAllSectionTabAtom {...props.homePopularQuestHeaderProps} />
      <CreatorCarousel
        {...props.popularQuestCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
      />
    </div>
  );
};
