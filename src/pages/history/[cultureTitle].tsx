import { useRouter } from "next/router";
import { type NextPage } from "next";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";
import { cultures } from "~/data/cultures";
import { getQuiz } from "../api/fetchQuiz/fetchquiz";

const History: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;

  // const currentCulture = () => {
  //   cultures.forEach((culture) => culture.title == cultureTitle);
  // };

  const test = getQuiz("asian", "Famous People", "Mao");
  console.log(test);

  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <h1>
          Learn about the{" "}
          {typeof cultureTitle === "string"
            ? cultureTitle.replace("_", " ")
            : null}{" "}
          History!
        </h1>
        <div className="flex flex-col border border-solid border-blue-600">
          <Link
            className="w-60 bg-blue-500 py-2 text-center text-white"
            href={"../history/" + cultureTitle}
          >
            Quiz
          </Link>
          {/* <Link href={"../history/" + cultureTitle}>History</Link>
          <Link href={"../culture/" + cultureTitle}>Culture</Link>
          <Link href={"../people/" + cultureTitle}>Famous People</Link>
          <Link href={"../gallery/" + cultureTitle}>Gallery</Link> */}
        </div>
      </main>
    </>
  );
};

export default History;
