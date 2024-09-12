import * as styles from './paragraph.css';

export default function Paragraph({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <p className={styles.paragraph}>{children}</p>;
}
