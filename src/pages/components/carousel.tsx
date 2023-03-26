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
import cultures from "../data/cultures";
import Link from "next/link";

const Carousel: React.FC<{
  classExtra?: string;
  visibleSlides?: number;
  step?: number;
}> = ({ classExtra, visibleSlides = 1, step = 1 }) => {
  return (
    <CarouselProvider
      className={classExtra}
      // className="relative flex h-[44.375rem] w-[78.625rem] items-center justify-center transition duration-200 ease-out"
      // className="relative flex w-[78.625rem] items-center justify-center transition duration-200 ease-out"
      //   className={
      //     "relative flex w-[78.625rem] items-center justify-center transition duration-200 ease-out " +
      //     classExtra
      //   }
      naturalSlideWidth={300}
      naturalSlideHeight={430}
      isIntrinsicHeight={true}
      totalSlides={cultures.length}
      visibleSlides={visibleSlides ? visibleSlides : 1}
      step={step ? step : 1}
      infinite
    >
      <div className="relative flex w-[78.625rem] items-center justify-center transition duration-200 ease-out ">
        {/* <ButtonBackSlide /> */}
        {visibleSlides != cultures.length ? <ButtonBackSlide /> : null}
        <div className="mx-auto w-full overflow-hidden">
          <Slider>
            <div className="flex w-full items-center justify-start gap-8 transition duration-700 ease-out">
              {/* Culture Cards */}
              {cultures.map((culture, index) => (
                <Slide key={index} index={index}>
                  <CultureCard
                    // classExtra={
                    //   "animate-fade-in animate-duration-1 animate-delay-" +
                    //   (index + 1).toString()
                    // }
                    title={culture.title}
                    src={culture.img}
                    alt={culture.alt}
                    link={culture.link}
                    index={index}
                  />
                </Slide>
              ))}
            </div>
          </Slider>
          <DotGroup />
        </div>
        {/* <ButtonNextSlide /> */}
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

const CultureCard: React.FC<{
  classExtra?: string;
  title: string;
  src: string;
  alt: string;
  link: string;
  index: number;
}> = ({ classExtra, title, src, alt, index, link }) => {
  return (
    <div
      className={
        // "relative flex flex-1 overflow-hidden bg-black " +
        "relative flex flex-1 overflow-hidden text-xl text-gray-300 transition duration-300 ease-out hover:font-bold hover:text-black " +
        classExtra +
        " " +
        (index % 2 == 0 ? "flex-col-reverse" : "flex-col")
      }
    >
      <Link
        href={link}
        // className="relative h-[12rem] overflow-hidden md:h-[20rem] lg:h-[43rem]"
        className="relative h-[12rem] overflow-hidden md:h-[20rem] lg:h-[43rem]"
      >
        <Image
          className="object-cover object-center transition duration-500 ease-out md:hover:scale-105"
          fill
          src={src}
          alt={alt}
        />
      </Link>
      <Link href={link} className="relative w-full p-4 text-center capitalize">
        <h2>{title}</h2>
      </Link>
    </div>
  );
};
