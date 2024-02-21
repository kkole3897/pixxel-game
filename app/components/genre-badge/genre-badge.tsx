import * as styles from './genre-badge.css';

interface GenreBadgeProps {
  label: string;
}

export default function GenreBadge({ label }: GenreBadgeProps) {
  return <div className={styles.badgeContainer}>{label}</div>;
}
