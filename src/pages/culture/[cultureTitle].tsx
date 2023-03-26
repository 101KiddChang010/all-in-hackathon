import { useRouter } from "next/router";
import { type NextPage } from "next";
import { cultures } from "~/data/cultures";
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
      <main className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl">Learn about the {cultureTitle} ethnicity!</h1>
        <div className="mt-5 flex flex-col gap-3 text-center text-white">
          <Link
            className=" bg-blue-500 px-20 py-2"
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
          <Link className="bg-blue-500 py-2" href={"../people/" + cultureTitle}>
            Famous People
          </Link>
          <Link
            className="bg-blue-500 py-2"
            href={"../gallery/" + cultureTitle}
          >
            Gallery
          </Link>
        </div>
      </main>
    </>
  );
};

export default CultureDetail;
