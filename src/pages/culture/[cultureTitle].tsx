import { useRouter } from "next/router";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";

const CultureDetail: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;
  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="mt-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl">
          Learn about the{" "}
          {typeof cultureTitle === "string"
            ? cultureTitle.replace("_", " ")
            : null}{" "}
          ethnicity!
        </h1>
        <div className="mt-5 flex gap-10 max-lg:flex-col-reverse">
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-white">
            <Link
              className="w-60 bg-blue-500 py-2"
              href={"../history/" + cultureTitle}
            >
              History
            </Link>
            <Link
              className="w-60 bg-blue-500 py-2"
              href={"../culture/" + cultureTitle}
            >
              Culture
            </Link>
            <Link
              className="w-60 bg-blue-500 py-2"
              href={"../people/" + cultureTitle}
            >
              Famous People
            </Link>
          </div>
          <div className="relative h-[60vh] w-full lg:w-[15vw]">
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
