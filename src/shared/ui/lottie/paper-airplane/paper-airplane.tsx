'use client';

import Lottie from 'lottie-react';
import cn from 'classnames';

import paperAirplaneAnimation from './paper-airplane-animation.json';
import * as styles from './paper-airplane.css';

type PaperAirplaneProps = {
  className?: string;
  id?: string;
};

export default function PaperAirplane({
  className,
  ...props
}: PaperAirplaneProps) {
  const composedClassName = cn(className, styles.container);

  return (
    <Lottie
      {...props}
      animationData={paperAirplaneAnimation}
      loop
      className={composedClassName}
    />
  );
}
