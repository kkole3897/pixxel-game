import React from 'react';

type MaybeRef<T> = React.Ref<T> | undefined;

export function composeRefs<T>(...refs: MaybeRef<T>[]) {
  return (node: T) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        return ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    });
}

export function useComposedRefs<T>(...refs: MaybeRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(() => composeRefs(...refs), refs);
}
