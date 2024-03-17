import dayjs from 'dayjs';
import type { AppPreview as Game } from '@/app/types';

export function useGame(game: Game) {
  const releaseDateText =
    game.releaseDate != null
      ? `출시일 : ${dayjs(game.releaseDate).format('YYYY.MM.DD')}`
      : '출시 미정';

  const priceInfo = game.storeInfo?.steam?.price;
  const isPriceDefined = priceInfo;
  const regularPriceText =
    priceInfo?.regular == null ? '' : priceInfo.regular.toLocaleString();
  const discountPriceText =
    priceInfo?.current == null ? '' : priceInfo.current.toLocaleString();
  const discountRate = !priceInfo
    ? 0
    : (priceInfo.regular - priceInfo.current) / priceInfo.regular;
  const isLowest = priceInfo && priceInfo.current === priceInfo?.lowest;

  return {
    releaseDateText,
    regularPriceText,
    discountPriceText,
    discountRate,
    isPriceDefined,
    isLowest,
  };
}
