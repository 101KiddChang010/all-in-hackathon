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
      <Navbar />
      <img
        className="absolute z-0 w-screen"
        src="./images/homepage.jpg"
        alt=""
      />
      <div className="absolute bottom-0 z-10 h-2/6 w-full bg-gradient-to-r from-[#47B2FF] to-[#003256]">
        <div className="flex h-full flex-col items-center justify-center text-center font-normal text-white">
          <p className="mb-5 w-[50rem] text-5xl">
            All inclusive space for educating about different cultures!
          </p>
          <Link
            href="/explore"
            className="rounded-full border-transparent bg-[#DE8746] px-14 py-1"
          >
            <p>Explore</p>
          </Link>
        </div>
      </div>
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
