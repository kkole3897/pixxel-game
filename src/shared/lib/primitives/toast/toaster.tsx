'use client';

import { type CreateToasterReturn } from './create-toaster';
import { useToastStore } from './use-toast-store';
import { ToastData } from './types';
import { Portal } from '@/shared/ui/portal';

type ToasterBaseProps = {
  toaster: CreateToasterReturn;
  children: (context: ToastData) => React.ReactNode;
};

type ToasterProps = ToasterBaseProps;

export const Toaster = ({ toaster, children }: ToasterProps) => {
    const [getToastsByToasterId, getRootNodeByPlacement] = useToastStore((store) => [store.getToastsByToasterId, store.getRootNodeByPlacement]);

    const toasts = getToastsByToasterId(toaster.id);
    const rootNode = getRootNodeByPlacement(toaster.placement);

    return (
      <Portal container={rootNode}>
        {toasts.map((toast) => (
          <ToastActor key={toast.id} value={toast}>
            {(context) => children(context)}
          </ToastActor>
        ))}
      </Portal>
    );
  }

type ToastActorProps = {
  children: (context: ToastData) => React.ReactNode;
  value: ToastData
}

function ToastActor({ children, value }: ToastActorProps) {
  return (
    <div>
      {children(value)}
    </div>
  )
}
