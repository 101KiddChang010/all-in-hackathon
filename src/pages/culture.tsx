import { type NextPage } from "next";
import Link from "next/link";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";

const Culture: NextPage<{
  race: string;
  history: string;
  culture: string;
  famous: string;
  gallery: string;
}> = ({ race, history, culture, famous, gallery }) => {
  console.log(race);
  return (
    <>
      <HtmlHead />
      <div className="bg-gradient-to-r from-white to-[#C7C7C7]">
        <Navbar />
        <p>{race}</p>
        <div className="">
          <Link href={history}>History</Link>
          <Link href={culture}>Culture</Link>
          <Link href={famous}>Famous People</Link>
          <Link href={gallery}>Gallery</Link>
        </div>
      </div>
    </>
  );
};

export default Culture;
