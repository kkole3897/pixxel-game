import type { Meta, StoryObj } from '@storybook/react';

import * as Carousel from '@/components/carousel';
import * as styles from './carousel.stories.css';

const meta: Meta = {
  component: Carousel.Root,
  title: 'Components/Carousel',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel.Root>;

export const Basic: Story = {
  args: {
    value: 0,
    children: (
      <>
        <Carousel.Prev className={styles.carouselControl.left}>
          &lt;
        </Carousel.Prev>
        <Carousel.View className={styles.basicCarouselSlides}>
          <Carousel.Slide className={styles.basicCarouselSlide}>
            1
          </Carousel.Slide>
          <Carousel.Slide className={styles.basicCarouselSlide}>
            2
          </Carousel.Slide>
          <Carousel.Slide className={styles.basicCarouselSlide}>
            3
          </Carousel.Slide>
          <Carousel.Slide className={styles.basicCarouselSlide}>
            4
          </Carousel.Slide>
        </Carousel.View>
        <Carousel.Next className={styles.carouselControl.right}>
          &gt;
        </Carousel.Next>
      </>
    ),
    className: styles.basicCarousel,
  },
};
