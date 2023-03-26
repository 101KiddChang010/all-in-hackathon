import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cultures } from "../data/cultures";
import Link from "next/link";

const Carousel: React.FC<{
  className?: string;
  visibleSlides?: number;
  step?: number;
}> = ({ className, visibleSlides = 1, step = 1 }) => {
  return (
    <CarouselProvider
      //   className={className + " bg-red-500"}
      className={className}
      naturalSlideWidth={300}
      naturalSlideHeight={430}
      isIntrinsicHeight={true}
      totalSlides={cultures.length}
      visibleSlides={visibleSlides ? visibleSlides : 1}
      step={step ? step : 1}
      infinite
    >
      {/* <div className="relative flex items-center justify-center bg-purple-500 transition duration-200 ease-out md:bg-green-500 lg:min-w-[45vw] lg:bg-blue-500 "> */}
      <div className="relative flex items-center justify-center align-middle transition duration-200 ease-out lg:min-w-[45vw] ">
        {visibleSlides != cultures.length ? <ButtonBackSlide /> : null}
        <div className="mx-auto w-full overflow-hidden  p-20 ">
          {visibleSlides != cultures.length ? (
            <Slider>
              <CultureSlides />
            </Slider>
          ) : (
            <CultureSlides />
          )}
          <DotGroup />
        </div>
        {visibleSlides != cultures.length ? <ButtonNextSlide /> : null}
      </div>
    </CarouselProvider>
  );
};

export default Carousel;

const ButtonBackSlide: React.FC = () => {
  return (
    <ButtonBack className="absolute left-0 z-10 cursor-pointer text-3xl text-gray-300 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
      <MdChevronLeft />
    </ButtonBack>
  );
};

const ButtonNextSlide: React.FC = () => {
  return (
    <ButtonNext className="absolute right-0 z-10 text-3xl text-gray-300 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
      <MdChevronRight />
    </ButtonNext>
  );
};

const CultureSlides: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center gap-8 align-middle transition duration-700 ease-out">
      {/* Culture Cards */}
      {cultures.map((culture, index) => (
        <Slide key={index} index={index}>
          <CultureCard
            title={
              typeof culture.title === "string"
                ? culture.title.replace("_", " ")
                : ""
            }
            src={culture.img}
            alt={culture.alt}
            link={"../culture/" + culture.title}
            index={index}
          />
        </Slide>
      ))}
    </div>
  );
};

const CultureCard: React.FC<{
  classExtra?: string;
  title: string;
  src: string;
  alt: string;
  link: string;
  index: number;
}> = ({ classExtra = "", title, src, alt, index, link }) => {
  return (
    <Link
      className={
        "relative flex h-full w-full flex-1 items-center justify-center overflow-hidden align-middle text-xl text-gray-300 transition duration-300 ease-out hover:font-bold hover:text-black " +
        classExtra +
        " " +
        (index % 2 == 0 ? "flex-col-reverse" : "flex-col")
      }
      href={link}
    >
      <div
        // className="relative h-0 overflow-hidden lg:h-[50rem]" // + "h-[60rem]"
        // className="relative h-[50vh] w-[25vw] overflow-hidden"
        className="relative h-[50vh] w-full overflow-hidden lg:w-[10vw]"
      >
        {/* Ratio for cards is 5:13 */}
        <Image
          className="h-full w-full object-contain object-center transition duration-[225ms] ease-in md:object-cover md:hover:scale-105"
          fill
          src={src}
          alt={alt}
        />
      </div>
      <div className="relative w-full p-4 text-center capitalize">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
