import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Toast } from '@/shared/lib/primitives/toast';
import * as styles from './toast.css';
import React from 'react';

type RootProps = PropsWithChildren<{
  className?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  type?: 'default' | 'error';
}>;

export const Root = ({
  children,
  className,
  icon,
  action,
  type: toastType = 'default',
}: RootProps) => {
  const composedClassName = cn(
    className,
    styles.root({
      hasIcon: Boolean(icon),
      hasAction: Boolean(action),
      type: toastType,
    })
  );

  return (
    <Toast.Root className={composedClassName}>
      {icon}
      <div className={styles.center}>{children}</div>
      {action}
    </Toast.Root>
  );
};

type TitleProps = PropsWithChildren<{ className?: string }>;

export const Title = ({ children, className }: TitleProps) => {
  const composedClassName = cn(className, styles.title);

  return <Toast.Title className={composedClassName}>{children}</Toast.Title>;
};

type DescriptionProps = PropsWithChildren<{ className?: string }>;

export const Description = ({ children, className }: DescriptionProps) => {
  const composedClassName = cn(className, styles.description);

  return (
    <Toast.Description className={composedClassName}>
      {children}
    </Toast.Description>
  );
};

type ActionProps = PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

export const Action = ({ children, className, ...props }: ActionProps) => {
  const composedClassName = cn(className, styles.action);

  return (
    <Toast.Action {...props} className={composedClassName}>
      {children}
    </Toast.Action>
  );
};
