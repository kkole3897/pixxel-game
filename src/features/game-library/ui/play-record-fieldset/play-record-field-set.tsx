import cn from 'classnames';

import * as styles from './play-record-fieldset.css';

type PlayRecordFieldsetProps = React.PropsWithChildren<{
  className?: string;
}>;

function PlayRecordFieldset({ children, className }: PlayRecordFieldsetProps) {
  const composedClassName = cn(styles.fieldset, className);

  return <fieldset className={composedClassName}>{children}</fieldset>;
}

type PlayRecordFieldsetLegendProps = React.PropsWithChildren<{
  className?: string;
}>;

function PlayRecordFieldsetLegend({
  className,
  children,
}: PlayRecordFieldsetLegendProps) {
  const composedClassName = cn(styles.legend, className);

  return <legend className={composedClassName}>{children}</legend>;
}

type PlayRecordFieldsetHeaderProps = React.PropsWithChildren<{
  className?: string;
}>;

function PlayRecordFieldsetHeader({
  className,
  children,
}: PlayRecordFieldsetHeaderProps) {
  const composedClassName = cn(styles.header, className);

  return <div className={composedClassName}>{children}</div>;
}

type PlayRecordFieldsetContentProps = React.PropsWithChildren<{
  className?: string;
}>;

function PlayRecordFieldsetContent({
  className,
  children,
}: PlayRecordFieldsetContentProps) {
  const composedClassName = cn(styles.content, className);

  return <div className={composedClassName}>{children}</div>;
}

const Root = PlayRecordFieldset;
const Header = PlayRecordFieldsetHeader;
const Content = PlayRecordFieldsetContent;
const Legend = PlayRecordFieldsetLegend;

export { Root, Header, Content, Legend };
