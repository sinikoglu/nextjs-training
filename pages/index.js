import Head from "next/head";
import ArticleList from "../components/ArticleList";

import { server } from "./../config";
import { articles } from "./../data";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="keywords" content="web dev , asd " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}
/*
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/

/*
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/
