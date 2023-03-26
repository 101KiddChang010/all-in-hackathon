import { type NextPage } from "next";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";
// import Carousel from "./components/carousel";
import Carousel from "./components/carouselresponsive";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <div className="flex h-screen flex-col gap-4 overflow-hidden">
        <Navbar />
        {/* <Navbar classNameExtras="absolute" /> */}
        <main className="animate-fade-in animate-duration-1 flex h-full w-full flex-col items-center justify-center align-middle">
          <section className="flex w-full overflow-hidden px-10 pb-16 sm:px-16 md:px-10 lg:px-8">
            {/* <Carousel
              // className="hidden max-w-screen-xl bg-red-500 xl:block"
              className="flex w-full flex-1 items-center justify-center bg-red-500 align-middle "
              visibleSlides={5}
              step={5}
            />
          </section> */}

            {/* Extra Large Screens */}
            <Carousel
              className="hidden w-full flex-1 items-center justify-center align-middle xl:flex"
              visibleSlides={5}
              step={5}
            />
            {/* Large Screens */}
            <Carousel
              className="hidden w-full flex-1 items-center justify-center align-middle lg:flex xl:hidden"
              visibleSlides={3}
              step={3}
            />
            {/* Medium Screens */}
            <Carousel
              className=" hidden w-full flex-1 items-center justify-center align-middle md:flex lg:hidden"
              visibleSlides={2}
            />
            {/* Small Screens */}
            <Carousel className="flex w-full max-w-screen-sm flex-1 items-center justify-center align-middle  md:hidden" />
          </section>
        </main>
      </div>
    </>
  );
};

export default Explore;
