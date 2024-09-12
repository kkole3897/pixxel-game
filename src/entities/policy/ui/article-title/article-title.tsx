import * as styles from './article-title.css';

export default function ArticleTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h2 className={styles.title}>{children}</h2>;
}
