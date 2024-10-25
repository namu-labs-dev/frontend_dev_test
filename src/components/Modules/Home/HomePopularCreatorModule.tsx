import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CarouselBtnWrapper from "~/components/Components/CarouselBtnWrapper/CarouselBtnWrapper";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

type Props = {
  popularCreatorHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  popularCreatorCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

export const HomePopularCreatorModule = (props: Props) => {
  return (
    <div className='relative mt-[10%] py-[2%] md:mt-0'>
      <ViewAllSectionTabAtom {...props.popularCreatorHeaderProps} />
      <CreatorCarousel
        {...props.popularCreatorCarouselProps}
        slideRenderer={(slide, index) => (
          <CreatorCarouselAvatarAtom key={index} {...slide} />
        )}
        // removeLeftMargin={true}
        reduceSlideWidth={true}
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
