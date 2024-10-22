import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  recommendedHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  recommededCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};

const HomeRecommendedModule = (props: Props) => {
  return (
    <div className='relative'>
      <ViewAllSectionTabAtom {...props.recommendedHeaderProps} />
      <CreatorCarousel
        {...props.recommededCarouselProps}
        slideRenderer={(slide, index) => (
          <CreatorCarouselAvatarAtom key={index} {...slide} />
        )}
        removeLeftMargin={true}
        reduceSlideWidth={true}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls z-10'>
            <PrimaryBtn onClick={onPrev} disabled={prevDisabled}>
              <SVGAtom
                className='text-center'
                iconName='arrowLeftLong'
                width={20}
                height={20}
              />
            </PrimaryBtn>
            <button onClick={onNext} disabled={nextDisabled}>
              Next
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default HomeRecommendedModule;
