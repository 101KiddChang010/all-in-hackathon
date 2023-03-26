import { type NextPage } from "next";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";
import Carousel from "./components/carousel";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <div className="h-screen bg-gradient-to-r from-white to-[#C7C7C7]">
        <Navbar />
        {/* <Navbar classNameExtras="absolute" /> */}
        <main className="flex h-full w-full items-center justify-center align-middle">
          <Carousel />
        </main>
      </div>
    </>
  );
};

export default Explore;
