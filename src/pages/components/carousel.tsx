// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import Image from "next/image";

const Carousel: React.FC = () => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={2}
    step={1}
    naturalSlideWidth={250}
    naturalSlideHeight={650}
    hasMasterSpinner
    // infinite
    isPlaying
  >
    <Slider>
      <div
        id="slider"
        className="h-[44.375rem] w-[78.625rem] overflow-hidden bg-gray-200"
      ></div>
      <Slide index={0} className="flex h-full w-full flex-col gap-2">
        <p className="text-center">African</p>
        <div className="h-[43rem] w-full overflow-hidden bg-blue-500 object-cover object-center">
          <Image
            className="h-full w-full bg-blue-500 object-cover object-center"
            src="/images/african.jpg"
            alt="African American"
            width={2000}
            height={5200}
            // fill
          />
        </div>
      </Slide>

      <Slide index={0} className="flex h-full w-full flex-col gap-2">
        <p className="text-center">TWADSASD</p>
        <div className="h-[43rem] w-full overflow-hidden bg-blue-500 object-cover object-center">
          <Image
            className="h-full w-full bg-blue-500 object-cover object-center"
            src="/images/chinese.jpg"
            alt="Chinese American"
            width={2000}
            height={5200}
            // fill
          />
        </div>
      </Slide>
    </Slider>
    <ButtonBack role="button" aria-label="slide backward" id="prev">
      Back
    </ButtonBack>
    <ButtonNext role="button" aria-label="slide forward" id="next">
      Next
    </ButtonNext>
    <DotGroup />
  </CarouselProvider>
);

export default Carousel;
