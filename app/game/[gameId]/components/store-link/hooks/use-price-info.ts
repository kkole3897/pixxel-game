interface PriceInfo {
  regular: number;
  current: number;
  lowest: number;
}

export function usePriceInfo(priceInfo: PriceInfo) {
  const { regular, current, lowest } = priceInfo;

  const isDiscounted = current < regular;
  const isLowest = regular === lowest || current === lowest;

  const initalPrice = regular;
  const finalPrice = isDiscounted ? current : regular;

  return {
    initalPrice,
    finalPrice,
    isDiscounted,
    isLowest,
  };
}
