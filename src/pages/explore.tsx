import { type NextPage } from "next";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";
import Carousel from "./components/carousel";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <div className="h-screen overflow-hidden bg-gradient-to-r from-white to-[#C7C7C7]">
        <Navbar />
        {/* <Navbar classNameExtras="absolute" /> */}
        <main className="animate-fade-in animate-duration-1 flex h-full w-full flex-col items-center justify-center align-middle">
          {/* <Carousel /> */}

          {/* Extra Large Screens */}
          <Carousel
            classExtra="hidden max-w-screen-xl xl:block"
            visibleSlides={5}
            step={5}
          />
          {/* Large Screens */}
          <Carousel
            classExtra="hidden max-w-screen-xl max-h-[30rem] lg:block xl:hidden bg-red-500 max-w-screen-xl"
            visibleSlides={3}
            step={3}
          />
          {/* Medium Screens */}
          <Carousel
            classExtra="hidden md:block lg:hidden bg-green-500 max-w-screen-md"
            visibleSlides={2}
          />
          {/* Small Screens */}
          <Carousel classExtra="block md:hidden max-w-screen-sm" />
        </main>
      </div>
    </>
  );
};

export default Explore;
