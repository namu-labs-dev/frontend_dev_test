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
    <div className='relative py-[2%]'>
      <ViewAllSectionTabAtom {...props.promotedQuestHeaderProps} />
      <CreatorCarousel
        {...props.promotedQuestCarouselProps}
        removeLeftMargin={true}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls z-10'>
            <PrimaryBtn onClick={onPrev} disabled={prevDisabled}>
              <ArrowLeftOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
            <PrimaryBtn onClick={onNext} disabled={prevDisabled}>
              <ArrowRightOutlined className='text-base sm:text-lg md:text-xl' />
            </PrimaryBtn>
          </div>
        )}
      />
    </div>
  );
};

export default HomePromotedQuestModule;
