import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

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
    <div className='relative py-[2%]'>
      <ViewAllSectionTabAtom {...props.endingSoonSectionHeaderProps} />
      <CreatorCarousel
        {...props.endingSoonCarouselProps}
        removeLeftMargin={true}
        reduceSlideWidth
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls  top-[60%]  z-10'>
            <PrimaryBtn onClick={onNext} disabled={nextDisabled}>
              <ArrowLeftOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
            <PrimaryBtn onClick={onPrev} disabled={prevDisabled}>
              <ArrowRightOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
          </div>
        )}
      />
    </div>
  );
}
