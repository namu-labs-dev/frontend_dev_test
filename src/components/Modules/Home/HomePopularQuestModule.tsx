import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import CarouselBtnWrapper from "~/components/Components/CarouselBtnWrapper/CarouselBtnWrapper";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

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
    <div className='relative mt-[10%]  py-[3%] sm:mt-[6%] md:block lg:mt-[2%]'>
      <ViewAllSectionTabAtom {...props.homePopularQuestHeaderProps} />
      <CreatorCarousel
        {...props.popularQuestCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        // reduceSlideWidth
        increaseWidth
        removeLeftMargin={true}
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
};
