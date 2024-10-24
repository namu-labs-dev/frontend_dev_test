import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CarouselBtnWrapper from "~/components/Components/CarouselBtnWrapper/CarouselBtnWrapper";
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
    <div className='relative mt-[10%]  py-[3%] sm:mt-[6%] md:block lg:mt-[2%]'>
      <ViewAllSectionTabAtom {...props.endingSoonSectionHeaderProps} />
      <CreatorCarousel
        {...props.endingSoonCarouselProps}
        removeLeftMargin={true}
        // reduceSlideWidth
        increaseWidth
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <CarouselBtnWrapper>
            <PrimaryBtn onClick={onNext} disabled={nextDisabled}>
              <ArrowLeftOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
            <PrimaryBtn onClick={onPrev} disabled={prevDisabled}>
              <ArrowRightOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
          </CarouselBtnWrapper>
        )}
      />
    </div>
  );
}
