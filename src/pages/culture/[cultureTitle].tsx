import { useRouter } from "next/router";
import { type NextPage } from "next";
import HtmlHead from "../../components/htmlhead";

const CultureDetail: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;
  return (
    <>
      <HtmlHead />
      <h1>Details about {cultureTitle}</h1>
    </>
  );
};

export default CultureDetail;
