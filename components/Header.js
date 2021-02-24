import styles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={styles.description}>asdasd asd asd asd asd asd asd</p>
    </div>
  );
};

export default Header;
