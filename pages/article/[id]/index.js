import Link from "next/link";

const Article = ({ article }) => {
  return (
    <>
      {article && (
        <>
          <h1>This is an article {article.id}</h1>
          <p>{article.body}</p>
          <br />
        </>
      )}

      <h1>hello 2</h1>
      <Link href="/">Go Back</Link>
    </>
  );
};

///*
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  //console.log(article);

  return {
    props: { article },
  };
};
//*/

/*
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  //console.log(article);

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
*/
export default Article;
