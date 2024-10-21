import React, { type PropsWithChildren } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, usePrevNextButtons, NextButton } from "./CarouselBtn";
import "./custom.css";
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";

type CreatorProps = {
  title?: string; // Title
  listPoint?: number; // Points
  description?: string; // Description
  author?: string; // Author
  avatar?: string; // Avatar
  cover?: string; // Cover
  status?: number; // Status
  bannerColor?: string; // Banner Color Options
  useShadow?: boolean; // Use Shadow
  name?: string;
  width?: number;
};

type Props = {
  slideType: string;
  options?: EmblaOptionsType;
  slides: CreatorProps[];
};

const CreatorCarousel = (props: PropsWithChildren<Props>) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        {props.slideType === "card" ? (
          <div className='embla__container'>
            {props.slides.map((slide, index) => (
              <div className='embla__slide' key={index}>
                <CreatorCarouselAvatarAtom {...slide} />
              </div>
            ))}
          </div>
        ) : (
          <div className='embla__container'>
            {props.slides.map((slide, index) => (
              <div className='embla__slide' key={index}>
                <ListAtom {...slide} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  );
};

export default CreatorCarousel;
