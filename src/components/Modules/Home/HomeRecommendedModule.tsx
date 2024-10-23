import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  recommendedHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  recommededCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

const HomeRecommendedModule = (props: Props) => {
  return (
    <div className='relative py-[3%]'>
      <ViewAllSectionTabAtom {...props.recommendedHeaderProps} />
      <CreatorCarousel
        {...props.recommededCarouselProps}
        slideRenderer={(slide, index) => (
          <CreatorCarouselAvatarAtom key={index} {...slide} />
        )}
        reduceSlideWidth={true}
        // removeLeftMargin={true}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls top-[60%] z-10 ml-[3%]'>
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

export default HomeRecommendedModule;
