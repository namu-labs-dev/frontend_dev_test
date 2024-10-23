import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  images: StaticImageData[];
};

export const HeroCarousel = (props: Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='relative mx-auto w-full max-w-[90vw] px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl md:px-8'>
      <div className='relative flex aspect-[1.385] w-full overflow-visible'>
        <Image
          src={images[currentIndex] as StaticImageData}
          alt={`Slide ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
          className='rounded-lg transition-opacity duration-500 ease-in-out sm:rounded-[1.125rem]'
        />

        <button
          onClick={goToPrevious}
          className='absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-black bg-white/30 p-1 transition-all hover:bg-white/50 focus:outline-none sm:-left-8 sm:px-2 sm:py-1 md:-left-12'
        >
          <ArrowLeftOutlined className='text-base sm:text-lg md:text-xl' />
        </button>

        <button
          onClick={goToNext}
          className='absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-black bg-white/30 p-1 transition-all hover:bg-white/50 focus:outline-none sm:-right-8 sm:px-2 sm:py-1 md:-right-12'
        >
          <ArrowRightOutlined className='text-base sm:text-lg md:text-xl' />
        </button>
      </div>

      <div className='absolute -bottom-[1.9375rem] left-1/2 flex -translate-x-1/2 transform space-x-2 sm:-bottom-14 sm:space-x-3 md:-bottom-[3.6875rem]'>
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none sm:h-4 sm:w-[3.25rem] ${
              currentIndex === slideIndex
                ? "translate-x-[-2px] translate-y-[-2px] rounded-md bg-white shadow-[2px_2px_0px_black] sm:translate-x-[-4px] sm:translate-y-[-4px] sm:shadow-[4px_4px_0px_black]"
                : "rounded-[3.125rem] border-2 border-black bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
