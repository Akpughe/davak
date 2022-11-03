import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Davak | David Akpughe</title>
        <meta
          name="description"
          content="Frontend developer and Javascript engineer. I enjoy creating frontend solutions that are reliable, scalable, and have excellent user experiences. - David Akpughe"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
