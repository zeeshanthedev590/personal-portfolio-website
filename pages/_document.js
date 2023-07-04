import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Zeeshan Khalid - Full Stack Web Developer</title>
      </Head>
      <body className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
