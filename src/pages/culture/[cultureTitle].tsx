import { useRouter } from "next/router";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";

const CultureDetail: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;

  // const test = getQuiz("asian", "Mao");
  // const test = getQuiz("asian", "Famous People", "Mao");
  // console.log(test);
  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl">
          Learn about the{" "}
          {typeof cultureTitle === "string"
            ? cultureTitle.replace("_", " ")
            : null}{" "}
          ethnicity!
        </h1>
        <div className="flex">
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-center text-white">
            <Link
              className=" bg-blue-500 py-2"
              href={"../history/" + cultureTitle}
            >
              History
            </Link>
            <Link
              className="bg-blue-500 py-2"
              href={"../culture/" + cultureTitle}
            >
              Culture
            </Link>
            <Link
              className="bg-blue-500 py-2"
              href={"../people/" + cultureTitle}
            >
              Famous People
            </Link>
          </div>
          <div className="relative h-[60vh] w-full overflow-hidden lg:w-[20vw]">
            <Image
              className="h-full w-full object-contain object-center transition duration-[225ms] ease-in md:object-cover"
              src={"/images/" + cultureTitle + ".jpg"}
              fill
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default CultureDetail;

import axios from "axios";

export async function getQuiz(group: string, topic: string, subtopic: string) {
  const url = "http://127.0.0.1:5000/getQuiz";
  const request = {
    group: group,
    topic: topic,
    subtopic: subtopic,
  };
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: request,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching quiz:", error);
    throw error;
  }
}
