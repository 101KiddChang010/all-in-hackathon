import { useRouter } from "next/router";
import { type NextPage } from "next";
import Link from "next/link";
import HtmlHead from "../components/htmlhead";
import Navbar from "~/components/navbar";
import { cultures } from "~/data/cultures";

const History: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;

  const currentCulture = () => {
    cultures.forEach((culture) => culture.title == cultureTitle);
  };

  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <h1>Learn about the {cultureTitle} History!</h1>
        <div className="flex flex-col border border-solid border-blue-600">
          <Link href={"../history/" + cultureTitle}>History</Link>
          <Link href={"../culture/" + cultureTitle}>Culture</Link>
          <Link href={"../people/" + cultureTitle}>Famous People</Link>
          <Link href={"../gallery/" + cultureTitle}>Gallery</Link>
        </div>
      </main>
    </>
  );
};

export default History;
