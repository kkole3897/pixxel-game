import Lottie from 'lottie-react';
import cn from 'classnames';

import checkCircleAnimation from './check-circle-animation.json';
import * as styles from './check-circle.css';

type CheckCircleProps = {
  id?: string;
  className?: string;
};

export default function CheckCircle({ className, ...props }: CheckCircleProps) {
  const composedClassName = cn(className, styles.container);

  return (
    <Lottie
      {...props}
      animationData={checkCircleAnimation}
      loop={false}
      className={composedClassName}
    />
  );
}
