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
    visibleSlides={3}
    totalSlides={1}
    step={1}
    naturalSlideWidth={250}
    naturalSlideHeight={650}
    hasMasterSpinner
    infinite
  >
    <Slider className="h-[44.375rem] w-[78.625rem] overflow-hidden bg-red-500">
      <Slide index={0} className="flex flex-col gap-2">
        <p className="text-center">Chinese</p>
        <div className="h-[43rem] w-full bg-blue-500 object-cover object-center">
          <img
            // className="h-auto w-[15.625rem]"
            // h-[40.625rem] w-[15.625rem]
            className="h-full bg-blue-500 object-cover object-center"
            src="/images/chinese.jpeg"
            alt="Chinese American"
            // width={250}
            // height={650}
            // fill
          />
        </div>
      </Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <DotGroup />
  </CarouselProvider>
);

export default Carousel;
