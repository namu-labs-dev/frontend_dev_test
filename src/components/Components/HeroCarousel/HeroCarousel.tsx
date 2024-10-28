import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
// import { useNamuIsMobile } from "~/hooks/useNamuIsMobile";

type Props = {
  images: StaticImageData[];
};

export const HeroCarousel = (props: Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  // const isMobile = useNamuIsMobile();

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=''>
      <div className='relative mx-auto max-w-[90vw] sm:max-w-2xl md:max-w-3xl'>
        <div className='relative flex overflow-visible'>
          <div className='relative w-full'>
            <Image
              key={`carousel-image-${currentIndex}`}
              src={images[currentIndex] as StaticImageData}
              width={618}
              height={368}
              alt={`Slide ${currentIndex + 1}`}
              style={{
                height: "21.25rem",
                width: "37.5rem",
              }}
              className='rounded-[1.875rem] transition-opacity duration-500 ease-in-out sm:rounded-[1.125rem]'
            />
          </div>

          <button
            onClick={goToPrevious}
            className='absolute top-1/2 z-10 hidden h-[1.875rem] w-[1.875rem] -translate-y-1/2 rounded-lg border border-black bg-white/30 p-2 transition-all hover:bg-white/50 focus:outline-none md:-left-[0.9375rem] md:flex md:items-center md:justify-center lg:md:-left-12'
          >
            <ArrowLeftOutlined />
          </button>

          <button
            onClick={goToNext}
            className='absolute top-1/2 z-10 hidden h-[1.875rem] w-[1.875rem] -translate-y-1/2 rounded-lg border border-black bg-white/30 p-2 transition-all hover:bg-white/50 focus:outline-none md:-right-[0.9375rem] md:flex md:items-center md:justify-center lg:-right-12'
          >
            <ArrowRightOutlined />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className='absolute -bottom-[1.875rem] left-1/2 flex -translate-x-1/2 transform space-x-2 sm:-bottom-[2.0625rem] sm:space-x-3 md:-bottom-16'>
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-3 w-8 rounded-[3.125rem] transition-all duration-300 ease-in-out focus:outline-none sm:h-4 sm:w-12 ${
                currentIndex === slideIndex
                  ? "rounded-md bg-white shadow-[2px_2px_0px_black] sm:shadow-[4px_4px_0px_black]"
                  : "border-2 border-black bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
