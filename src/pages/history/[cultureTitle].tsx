import { useRouter } from "next/router";
import { type NextPage } from "next";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";
import { fetchQuiz } from "../api/fetchQuiz/fetchquiz";

const History: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;

  const test = fetchQuiz("asian", "Famous People", "Mao");
  console.log(test);

  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-8">
        <h1 className="py-4 text-3xl font-bold">
          {typeof cultureTitle === "string"
            ? cultureTitle.replace("_", " ")
            : null}{" "}
          History
        </h1>
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
          <Link
            className="w-60 self-center bg-blue-500 py-2 text-center text-white"
            href={"../history/" + cultureTitle}
          >
            Quiz
          </Link>
        </div>
      </main>
    </>
  );
};

export default History;
function getQuiz(arg0: string, arg1: string, arg2: string) {
  throw new Error("Function not implemented.");
}
