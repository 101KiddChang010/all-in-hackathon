import { type NextPage } from "next";
import Link from "next/link";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <div className="bg-gradient-to-l from-white to-[#C7C7C7]">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center ">
          Test
        </main>
      </div>
    </>
  );
};

export default Explore;
