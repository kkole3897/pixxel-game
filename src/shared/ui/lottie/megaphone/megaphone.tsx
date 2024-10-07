import Lottie from 'lottie-react';
import cn from 'classnames';

import megaphoneAnimation from './megaphone-animation.json';
import * as styles from './megaphone.css';

type MegaphoneProps = {
  id?: string;
  className?: string;
};

export default function Megaphone({ className, ...props }: MegaphoneProps) {
  const composedClassName = cn(className, styles.container);

  return (
    <Lottie
      {...props}
      animationData={megaphoneAnimation}
      loop={true}
      className={composedClassName}
    />
  );
}
