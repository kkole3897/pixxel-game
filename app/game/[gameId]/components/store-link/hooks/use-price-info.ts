interface PriceInfo {
  regular: number;
  discount: number;
  lowest: number;
}

export function usePriceInfo(priceInfo: PriceInfo) {
  const { regular, discount, lowest } = priceInfo;

  const isDiscounted = discount < regular;
  const isLowest = regular === lowest || discount === lowest;

  const initalPrice = regular;
  const finalPrice = isDiscounted ? discount : regular;

  return {
    initalPrice,
    finalPrice,
    isDiscounted,
    isLowest,
  };
}
