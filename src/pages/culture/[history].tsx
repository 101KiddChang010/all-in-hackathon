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
    </>
  );
};

export default CultureDetail;
