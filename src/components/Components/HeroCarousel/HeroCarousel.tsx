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
    <div className='relative w-full max-w-3xl'>
      <div className='relative h-[27.875rem] w-[46.875rem] overflow-hidden rounded-lg md:h-96'>
        <Image
          src={images[currentIndex] as StaticImageData}
          alt={`Slide ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
          className='transition-opacity duration-500 ease-in-out'
        />

        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white hover:bg-white/50 focus:outline-none'
        >
          <ArrowLeftOutlined />
        </button>

        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white hover:bg-white/50 focus:outline-none'
        >
          <ArrowRightOutlined />
        </button>
      </div>

      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2'>
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
              currentIndex === slideIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
