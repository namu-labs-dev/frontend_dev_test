// todo: will push props up

import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";

type CreatorProps = {
  title?: string; // Title
  listPoint?: number; // Points
  description?: string; // Description
  author?: string; // Author
  avatar?: string; // Avatar
  cover?: string; // Cover
  status?: number; // Status
  bannerColor?: string; // Banner Color Options
  useShadow?: boolean; // Use Shadow
};
// during page dev
type Props = {
  endingSoonSectionHeaderProps: React.ComponentProps<
    typeof ViewAllSectionTabAtom
  >;
  endingSoonCarouselProps: React.ComponentProps<typeof CreatorCarousel>;
  // slides: CreatorProps[];
};

export function HomeEndingSoonCarouselModule(props: Props) {
  return (
    <div>
      <ViewAllSectionTabAtom {...props.endingSoonSectionHeaderProps} />
      <CreatorCarousel {...props.endingSoonCarouselProps}>
        {props.endingSoonCarouselProps.slides.map((slide, index) => (
          <div className='embla__slide' key={index}>
            <ListAtom {...slide} />
          </div>
        ))}
      </CreatorCarousel>
    </div>
  );
}
