export function composeEventHandlers<E>(
  ...handlers: (((event: E) => void) | undefined)[]
) {
  return (event: E) => {
    handlers.forEach((handler) => {
      handler?.(event);
    });
  };
}
