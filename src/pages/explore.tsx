import { type NextPage } from "next";
import Link from "next/link";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";
import Carousel from "./components/carousel";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <div className="bg-gradient-to-r from-white to-[#C7C7C7]">
        <Navbar classNameExtras={"absolute"} />
        <main className="flex min-h-screen flex-col items-center justify-center">
          <Carousel />
        </main>
      </div>
    </>
  );
};

export default Explore;
