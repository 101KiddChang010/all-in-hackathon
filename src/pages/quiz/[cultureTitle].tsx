import { useRouter } from "next/router";
import { type NextPage } from "next";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";
import { fetchQuiz } from "../api/fetchQuiz/fetchquiz";
import { useState } from "react";

const History: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;

  //   const test = fetchQuiz("asian", "Famous People", "Mao");

  //   let test;
  //   fetchQuiz("asian", "Famous People", "Mao").then((result) => {
  //     test = result;
  //   });
  //   console.log(test);

  const [clickedLink, setClickedLink] = useState<string>("");

  const handleLinkClick = (select: string) => {
    setClickedLink(select);
    console.log(clickedLink);
  };

  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-8">
        <h1 className="py-4 text-3xl font-bold">
          {typeof cultureTitle === "string"
            ? cultureTitle.replace("_", " ")
            : null}{" "}
          Quiz
        </h1>
        {/* Question */}
        <div className="container flex flex-col py-8">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          {/* Answers */}
          <div className="flex gap-4 py-8">
            <Link
              className="w-60 self-center bg-blue-500 py-2 text-center text-white"
              //   onClick={className ? className + " bg-red-500" : ""}
              onClick={() => handleLinkClick("A")}
              href={"../history/" + cultureTitle}
            >
              A. Test
            </Link>
            <Link
              className="w-60 self-center bg-blue-500 py-2 text-center text-white"
              href={"../history/" + cultureTitle}
              onClick={() => handleLinkClick("B")}
            >
              B. Test
            </Link>
            <Link
              className="w-60 self-center bg-blue-500 py-2 text-center text-white"
              href={"../history/" + cultureTitle}
              onClick={() => handleLinkClick("C")}
            >
              C. Test
            </Link>
            <Link
              className="w-60 self-center bg-blue-500 py-2 text-center text-white"
              href={"../history/" + cultureTitle}
              onClick={() => handleLinkClick("D")}
            >
              D. Test
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
function getQuiz(arg0: string, arg1: string, arg2: string) {
  throw new Error("Function not implemented.");
}
