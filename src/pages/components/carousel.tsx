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

const Carousel: React.FC = () => (
  <CarouselProvider
    // className=""
    // className="relative flex h-[44.375rem] w-[78.625rem] items-center justify-center transition duration-200 ease-out"
    className="relative flex w-[78.625rem] items-center justify-center transition duration-200 ease-out"
    naturalSlideWidth={300}
    naturalSlideHeight={430}
    isIntrinsicHeight={true}
    totalSlides={cultures.length}
    visibleSlides={5}
    step={1}
    infinite
  >
    <ButtonBackSlide />
    <div className="mx-auto w-full overflow-hidden">
      <Slider>
        <div className="flex w-full items-center justify-start gap-8 transition duration-700 ease-out">
          {/* Culture Cards */}
          {cultures.map((culture, index) => (
            <Slide key={index} index={index}>
              <CultureCard
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
    <ButtonNextSlide />
  </CarouselProvider>
);

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
  title: string;
  src: string;
  alt: string;
  link: string;
  index: number;
}> = ({ title, src, alt, index, link }) => {
  return (
    <div
      className={
        "relative flex flex-1 overflow-hidden " +
        (index % 2 == 0 ? "flex-col-reverse" : "flex-col")
      }
    >
      <Link href={link} className="relative h-[43rem] overflow-hidden">
        <Image
          className="object-cover object-center transition duration-[225ms] ease-in md:hover:scale-105"
          fill
          src={src}
          alt={alt}
        />
      </Link>
      <div className="relative w-full p-4 text-center capitalize">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
