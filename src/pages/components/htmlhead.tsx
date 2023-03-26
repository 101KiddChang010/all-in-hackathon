import Head from "next/head";

const HtmlHead: React.FC = () => {
  return (
    <Head>
      <title>Diversify</title>
      <meta name="description" content="placeholder" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HtmlHead;
