import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  promotedQuestHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  promotedQuestCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

const HomePromotedQuestModule = (props: Props) => {
  return (
    <div className='relative mt-[10%] py-[2%] md:mt-0'>
      <ViewAllSectionTabAtom {...props.promotedQuestHeaderProps} />
      <CreatorCarousel
        {...props.promotedQuestCarouselProps}
        removeLeftMargin={true}
        reduceSlideWidth={true}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls top-[60%] z-10 md:ml-6'>
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
};

export default HomePromotedQuestModule;
