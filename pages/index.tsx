import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeFeatured = dynamic(() => import('../components/HomeFeatured'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ReactoTV</title>
        <meta
          name="description"
          content="A Movie, TV show tracker built with NextJS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeFeatured />
      </main>
    </div>
  );
};

export default Home;
