import React, { type PropsWithChildren, type ReactNode } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, usePrevNextButtons, NextButton } from "./CarouselBtn";
import "./custom.css";
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import { ListAtom } from "~/components/Atoms/ListAtom/ListAtom";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";
import { string } from "zod";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

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
  name: string;
  width: number;
  icon: string;
};

type Props = {
  slideType: string;
  options?: EmblaOptionsType;
  slides: CreatorProps[];
  removeLeftMargin?: boolean;
  reduceSlideWidth?: boolean;
  slideRenderer: (slide: CreatorProps, index: number) => ReactNode; // Function to render slide
  renderNavButtons?: (props: {
    onPrev: () => void;
    onNext: () => void;
    prevDisabled: boolean;
    nextDisabled: boolean;
  }) => ReactNode; // Optional function to render custom navigation buttons
};

const CreatorCarousel = (props: Props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      className={`embla ${props.removeLeftMargin ? "remove-left-margin" : ""} ${
        props.reduceSlideWidth ? "reduce-slide-width" : ""
      }`}
    >
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {props.slides.map((slide, index) => (
            <div className='embla__slide ' key={index}>
              {props.slideRenderer(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render navigation buttons if provided */}
      {props.renderNavButtons
        ? props.renderNavButtons({
            onPrev: onPrevButtonClick,
            onNext: onNextButtonClick,
            prevDisabled: prevBtnDisabled,
            nextDisabled: nextBtnDisabled,
          })
        : null}
    </section>
  );
};

export default CreatorCarousel;
