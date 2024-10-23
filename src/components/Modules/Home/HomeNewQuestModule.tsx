import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";

type Props = {
  newQuestHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  newQuestCarouselProps: Omit<
    React.ComponentProps<typeof CreatorCarousel>,
    "slideRenderer"
  >;
};
const HomeNewQuestModule = (props: Props) => {
  return (
    <div className='relative py-[3%]'>
      <ViewAllSectionTabAtom {...props.newQuestHeaderProps} />
      <CreatorCarousel
        {...props.newQuestCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        removeLeftMargin={true}
        increaseWidth={true}
        reduceSlideWidth={true}
      />
    </div>
  );
};

export default HomeNewQuestModule;
