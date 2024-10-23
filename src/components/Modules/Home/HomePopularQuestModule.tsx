import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";

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
    <div>
      <ViewAllSectionTabAtom {...props.homePopularQuestHeaderProps} />
      <CreatorCarousel
        {...props.popularQuestCarouselProps}
        slideRenderer={(slide, index) => <ListAtom key={index} {...slide} />}
        reduceSlideWidth
        removeLeftMargin={true}

        // renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
        //   <div className='embla__controls z-10'>
        //     <PrimaryBtn onClick={onPrev} disabled={prevDisabled}>
        //       <SVGAtom
        //         className='text-center'
        //         iconName='arrowLeftLong'
        //         width={20}
        //         height={20}
        //       />
        //     </PrimaryBtn>
        //     <button onClick={onNext} disabled={nextDisabled}>
        //       Next
        //     </button>
        //   </div>
        // )}
      />
    </div>
  );
};
