import * as styles from './ordered-list.css';

const Root = ({ children }: { children?: React.ReactNode }) => {
  return <ol className={styles.orderedList}>{children}</ol>;
};

const Item = ({ children }: { children?: React.ReactNode }) => {
  return <li className={styles.orderedListItem}>{children}</li>;
};

export { Root, Item };
