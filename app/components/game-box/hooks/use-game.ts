import dayjs from 'dayjs';
import type { AppPreview as Game } from '@/app/types';

export function useGame(game: Game) {
  const releaseDateText =
    game.releaseDate != null
      ? `출시일 : ${dayjs(game.releaseDate).format('YYYY.MM.DD')}`
      : '출시 미정';
  const priceInfo = game.prices[0];
  const regularPriceText = priceInfo.regular.toLocaleString();
  const discountPriceText = priceInfo.discount.toLocaleString();
  const discountRate =
    (priceInfo.regular - priceInfo.discount) / priceInfo.regular;

  return {
    releaseDateText,
    regularPriceText,
    discountPriceText,
    discountRate,
  };
}
