import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Davak | David Akpughe</title>
        <meta name="description" content="Frontend developer and Javascript engineer. I enjoy creating frontend solutions that are reliable, scalable, and have excellent user experiences. - David Akpughe" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <link rel="canonical" href="https://www.davak.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}