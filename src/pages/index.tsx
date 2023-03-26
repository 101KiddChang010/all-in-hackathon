import { type NextPage } from "next";
import Link from "next/link";
import Navbar from "./components/navbar";
import HtmlHead from "./components/htmlhead";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HtmlHead />
      <Navbar classNameExtras="absolute" />
      <div className={"flex min-h-screen flex-col bg-red-500 "}>
        <img
          // className="h-2/6 w-auto object-contain object-center"
          className="h-[60vh] w-full overflow-hidden bg-green-500 object-cover object-top"
          src="./images/homepage.jpg"
          alt="Image of diverse set of people"
        />
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-14 bg-gradient-to-r from-[#47B2FF] to-[#003256] text-center font-normal text-white">
          <div>
            <h2 className="animate-fade-in animate-duration-1 mb-4 w-[50rem] text-5xl">
              All inclusive space for educating about different cultures!
            </h2>
            <h3 className="animate-fade-in animate-duration-1 mb-8 w-[50rem]">
              Discover the diverse cultures that make up America, often referred
              to as the <span className="text-[#DE8746]">"melting pot"</span>!
            </h3>
          </div>
          <Link
            href="/explore"
            className="animate-fade-in animate-duration-1 animate-delay-1-2 rounded-full border-transparent bg-[#DE8746] px-14 py-1 text-xl transition duration-200 ease-out hover:scale-105"
          >
            <p>Explore</p>
          </Link>
        </div>
      </div>
      {/* <img
        className="w-full"
        src="./images/homepage.jpg"
        alt="Image of diverse set of people"
      /> */}
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
