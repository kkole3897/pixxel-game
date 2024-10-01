import { createStore } from 'zustand/vanilla';
import { devtools } from 'zustand/middleware';

import { ToastData, Placement } from './types';

export type ToastState = {
  toasts: Map<string, ToastData>;
  placements: Map<Placement, string>;
};

export type ToastActions = {
  addToast: (toast: ToastData) => void;
  removeToast: (id: string) => void;
  addPlacement: (placement: Placement, viewportId: string) => void;
  removePlacement: (placement: Placement) => void;
  hasPlacement: (placement: Placement) => boolean;
  getToastsByPlacementId: (id: string) => ToastData[];
};

export type ToastStore = ToastState & ToastActions;

export const defaultInitState: ToastState = {
  toasts: new Map(),
  placements: new Map(),
};

export const createToastStore = (initState: ToastState = defaultInitState) => {
  return createStore<ToastStore>()(
    devtools(
      (set, get) => ({
        ...initState,
        addToast: (toast) => {
          set((state) => {
            const updatedToasts = new Map(state.toasts);
            updatedToasts.set(toast.id, toast);
            return { ...state, toasts: updatedToasts };
          });

          setTimeout(() => {
            set((state) => {
              const updatedToasts = new Map(state.toasts);
              updatedToasts.delete(toast.id);
              return { ...state, toasts: updatedToasts };
            });
          }, toast.options.duration ?? 5000);
        },
        removeToast: (id) => {
          set((state) => {
            const hasToast = state.toasts.has(id);

            if (!hasToast) {
              return state;
            }

            const updatedToasts = new Map(state.toasts);
            updatedToasts.delete(id);
            return { ...state, toasts: updatedToasts };
          });
        },
        addPlacement: (placement, viewportId) => {
          set((state) => {
            const hasPlacement = state.placements.has(placement);

            if (hasPlacement) {
              return state;
            }

            const updatedPlacements = new Map(state.placements);
            updatedPlacements.set(placement, viewportId);
            return { ...state, placements: updatedPlacements };
          });
        },
        removePlacement: (placement) => {
          set((state) => {
            const hasPlacement = state.placements.has(placement);

            if (!hasPlacement) {
              return state;
            }

            const updatedPlacements = new Map(state.placements);
            updatedPlacements.delete(placement);
            return { ...state, placements: updatedPlacements };
          });
        },
        hasPlacement: (placement) => {
          const { placements } = get();
          return placements.has(placement);
        },
        getToastsByPlacementId: (id) => {
          const { placements } = get();
          const placement = Array.from(placements.entries()).find(
            ([, value]) => value === id
          );

          if (!placement) {
            return [];
          }

          const [placementKey] = placement;

          const { toasts } = get();
          return Array.from(toasts.values()).filter(
            (toast) => toast.placement === placementKey
          );
        },
      }),
      { name: 'ToastStore' }
    )
  );
};
