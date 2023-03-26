import { useRouter } from "next/router";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlHead from "../../components/htmlhead";
import Navbar from "~/components/navbar";
import {
  african,
  indian,
  chinese,
  hispanic,
  native_american,
} from "~/data/people";

const History: NextPage = () => {
  const router = useRouter();
  const cultureTitle = router.query.cultureTitle;
  const myObject = {
    personCultureTitle: [{ name: "John", link: "example.com" }],
  };
  const personCultureTitle =
    cultureTitle == "African"
      ? african
      : cultureTitle == "Indian"
      ? indian
      : cultureTitle == "Chinese"
      ? chinese
      : cultureTitle == "Hispanic"
      ? hispanic
      : native_american;

  // const currentCulture = () => {
  //   cultures.forEach((culture) => culture.title == cultureTitle);
  // };

  return (
    <>
      <HtmlHead />
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <h1>Learn about famous {cultureTitle} people!</h1>
        <div className="flex flex-col">
          <div className="flex">
            {personCultureTitle.map((person: any) => (
              <div className="relative h-[60vh] w-full lg:w-[15vw]">
                <img
                  className="h-full w-full object-contain object-center transition duration-[225ms] ease-in md:object-cover"
                  src={person.link}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
