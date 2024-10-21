import React from "react";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";
type CreateProps = {
  name: string;
  width: number;
  icon: string;
};

type Props = {
  recommendedHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
  recommededCarouselProps: React.ComponentProps<typeof CreatorCarousel>;
};

const HomeRecommendedModule = (props: Props) => {
  return (
    <div>
      <ViewAllSectionTabAtom {...props.recommendedHeaderProps} />
      <CreatorCarousel slideType='card' {...props.recommededCarouselProps} />
    </div>
  );
};

export default HomeRecommendedModule;
