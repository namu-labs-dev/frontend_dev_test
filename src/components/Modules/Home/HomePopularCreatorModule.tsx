import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import CreatorCarousel from "~/components/Components/CreatorCarousel/CreatorCarousel";
import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

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
        removeLeftMargin={true}
        reduceSlideWidth
        slideRenderer={(slide, index) => (
          <CreatorCarouselAvatarAtom key={index} {...slide} />
        )}
        renderNavButtons={({ onPrev, onNext, prevDisabled, nextDisabled }) => (
          <div className='embla__controls  top-[60%]  z-10'>
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
