// todo: will push props up

import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";

// during page dev
type Props = {
  endingSoonSectionHeaderProps: React.ComponentProps<
    typeof ViewAllSectionTabAtom
  >;
  endingSoonCarouselProps: React.ComponentProps<typeof CreatorCarousel>;
};

export function HomeEndingSoonCarouselModule(props: Props) {
  return (
    <div>
      <ViewAllSectionTabAtom {...props.endingSoonSectionHeaderProps} />
      <CreatorCarousel {...props.endingSoonCarouselProps} />
    </div>
  );
}
