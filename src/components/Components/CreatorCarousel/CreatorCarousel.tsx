import React, { type PropsWithChildren, type ReactNode } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./CarouselNavigation";
import "./custom.css";

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
  options?: EmblaOptionsType;
  slides: CreatorProps[];
  removeLeftMargin?: boolean;
  reduceSlideWidth?: boolean;
  increaseWidth?: boolean;
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
      className={`embla ${props.increaseWidth && "increase-embla-width"} ${props.removeLeftMargin ? "remove-left-margin" : ""} ${
        props.reduceSlideWidth && "reduce-slide-width"
      }`}
    >
      <div
        className={`embla__viewport ${props.increaseWidth && "increase-embla-width"}`}
        ref={emblaRef}
      >
        <div className='embla__container '>
          {props.slides?.map((slide, index) => (
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
