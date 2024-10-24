'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useCallbackRef } from './use-callback-ref';

type UseControllableStateOptions<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

function useUnconrolledState<T>({
  defaultValue,
  onChange,
}: Omit<UseControllableStateOptions<T>, 'value'>) {
  const [state, setState] = useState(defaultValue);
  const prevValueRef = useRef(state);

  const handleChange = useCallbackRef(onChange);

  useEffect(() => {
    if (prevValueRef.current !== state) {
      if (state !== undefined) {
        handleChange(state);
      }
      prevValueRef.current = state;
    }
  }, [state, handleChange, prevValueRef]);

  return [state, setState] as const;
}

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>) {
  const [uncontrolledState, setUncontrolledState] = useUnconrolledState({
    defaultValue,
    onChange,
  });
  const isControlled = value !== undefined;
  const state = isControlled ? value : uncontrolledState;
  const handleChange = useCallbackRef(onChange);

  const setState: React.Dispatch<React.SetStateAction<T | undefined>> =
    useCallback(
      (newState) => {
        if (isControlled) {
          const setter = newState as SetStateFn<T>;
          const newValue =
            typeof setter === 'function' ? setter(value) : newState;

          if (value !== newState) {
            handleChange(newValue as T);
          }
        } else {
          setUncontrolledState(newState);
        }
      },
      [isControlled, value, handleChange, setUncontrolledState]
    );

  return [state, setState] as const;
}
