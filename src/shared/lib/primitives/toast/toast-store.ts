import { createStore } from 'zustand/vanilla';
import { devtools } from 'zustand/middleware';

import { ToastData, Placement, ToastGroupContext } from './types';

export type ToastState = {
  toasts: Map<string, ToastData>;
  groups: Map<Placement, ToastGroupContext>;
};

export type ToastActions = {
  addToast: (toast: ToastData) => void;
  removeToast: (id: string) => void;
  addGroup: (placement: Placement, groupContext: ToastGroupContext) => void;
  removeGroup: (placement: Placement) => void;
  isPlacementAssigned: (placement: Placement) => boolean;
  getToastsByGroupId: (id: string) => ToastData[];
};

export type ToastStore = ToastState & ToastActions;

export const defaultInitState: ToastState = {
  toasts: new Map(),
  groups: new Map(),
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
          }, toast.duration ?? 5000);
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
        addGroup: (placement, groupContext) => {
          set((state) => {
            const isPlacementAssigned = state.groups.has(placement);

            if (isPlacementAssigned) {
              return state;
            }

            const updatedPlacements = new Map(state.groups);
            updatedPlacements.set(placement, groupContext);
            return { ...state, groups: updatedPlacements };
          });
        },
        removeGroup: (placement) => {
          set((state) => {
            const isPlacementAssigned = state.groups.has(placement);

            if (!isPlacementAssigned) {
              return state;
            }

            const updatedPlacements = new Map(state.groups);
            updatedPlacements.delete(placement);
            return { ...state, groups: updatedPlacements };
          });
        },
        isPlacementAssigned: (placement) => {
          const { groups } = get();
          return groups.has(placement);
        },
        getToastsByGroupId: (id: string) => {
          const { groups } = get();
          const placement = Array.from(groups.entries()).find(
            ([, value]) => value.id === id
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
