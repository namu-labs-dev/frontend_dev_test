// todo: will push props up

import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import "../../Components/CreatorCarousel/custom.css";

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
      <CreatorCarousel {...props.endingSoonCarouselProps}>
        {props.endingSoonCarouselProps.slides.map((slide, index) => (
          <div className='embla__slide' key={index}>
            {<ListAtom {...slide} />}
          </div>
        ))}
      </CreatorCarousel>
    </div>
  );
}
