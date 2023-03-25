import { type NextPage } from "next";
import Link from "next/link";
import HtmlHead from "./htmlHead";

const Explore: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-l from-white to-[#C7C7C7]"></main>
    </>
  );
};

export default Explore;
