import Link from "next/link";

import styles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a className={styles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
