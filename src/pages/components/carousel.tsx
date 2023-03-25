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

export default () => (
  <CarouselProvider
    visibleSlides={3}
    totalSlides={8}
    step={2}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
    infinite
  >
    <h2 className="">Infinite Carousel</h2>
    <p>
      A carousel that returns to the first slide if the user clicks the Next
      button while on the last slide and returns to the last slide if the user
      clicks the Back button while on the first slide. Also behaves similarly
      with swiping left on the first image or right on the last image.
    </p>
    <Slider className="">
      <Slide index={0}>
        <img src="./media/img01.jpeg" />
      </Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <DotGroup />
  </CarouselProvider>
);
