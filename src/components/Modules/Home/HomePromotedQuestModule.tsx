import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CarouselBtnWrapper from "~/components/Components/CarouselBtnWrapper/CarouselBtnWrapper";

type Props = {
  promotedQuestHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  promotedQuestCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

const HomePromotedQuestModule = (props: Props) => {
  return (
    <div className='relative mt-[10%] py-[3%] sm:mt-[6%] md:block lg:mt-[2%]'>
      <ViewAllSectionTabAtom {...props.promotedQuestHeaderProps} />
      <CreatorCarousel
        {...props.promotedQuestCarouselProps}
        removeLeftMargin={true}
        increaseWidth={true}
        // reduceSlideWidth={true}
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
};

export default HomePromotedQuestModule;
