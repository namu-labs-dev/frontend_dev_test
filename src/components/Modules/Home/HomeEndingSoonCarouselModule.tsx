import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";

// during page dev
type Props = {
  endingSoonSectionHeaderProps: React.ComponentProps<
    typeof ViewAllSectionTabAtom
  >;
  endingSoonCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >; // Exclude slideRenderer from the props passed down
};

export function HomeEndingSoonCarouselModule(props: Props) {
  return (
    <div className='relative py-[3%]'>
      <ViewAllSectionTabAtom {...props.endingSoonSectionHeaderProps} />
      <CreatorCarousel
        {...props.endingSoonCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
      />
    </div>
  );
}
