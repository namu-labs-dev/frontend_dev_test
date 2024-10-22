import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import { FaLongArrowAltRight } from "react-icons/fa";

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
              <SVGAtom
                className='text-center'
                iconName='arrowLeftLong'
                width={20}
                height={20}
              />
            </PrimaryBtn>
            <button onClick={onNext} disabled={nextDisabled}>
              <FaLongArrowAltRight />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default HomePromotedQuestModule;
