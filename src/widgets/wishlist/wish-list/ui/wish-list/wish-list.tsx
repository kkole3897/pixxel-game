import cn from 'classnames';

import * as styles from './wish-list.css';

type WishListProps = {
  className?: string;
  children?: React.ReactNode;
};

export function WishList({ className, children }: WishListProps) {
  const composedRootClassName = cn(className, styles.wishList);

  return <ol className={composedRootClassName}>{children}</ol>;
}

type WishListItemProps = {
  className?: string;
  children?: React.ReactNode;
};

export function WishListItem({ className, children }: WishListItemProps) {
  const composedRootClassName = cn(className, styles.wishListItem);

  return <li className={composedRootClassName}>{children}</li>;
}
