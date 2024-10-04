'use client';

import { type CreateToasterReturn } from './create-toaster';
import { useToastStore } from './use-toast-store';
import { ToastData } from './types';
import { ToastProvider } from './use-toast-context';
import { Portal } from '@/shared/ui/portal';

type ToasterBaseProps = {
  toaster: CreateToasterReturn;
  children: (context: ToastData) => React.ReactNode;
};

type ToasterProps = ToasterBaseProps;

export const Toaster = ({ toaster, children }: ToasterProps) => {
  const [getToastsByToasterId, getRootNodeByPlacement] = useToastStore(
    (store) => [store.getToastsByToasterId, store.getRootNodeByPlacement]
  );

  const toasts = getToastsByToasterId(toaster.id);

  const rootNode = getRootNodeByPlacement(toaster.placement);

  return (
    <div>
      <Portal container={rootNode}>
        {toasts.map((toast) => (
          <ToastActor value={toast} key={toast.id}>
            {(context) => children(context)}
          </ToastActor>
        ))}
      </Portal>
    </div>
  );
};

type ToastActorProps = {
  children: (context: ToastData) => React.ReactNode;
  value: ToastData;
};

function ToastActor({ children, value }: ToastActorProps) {
  return <ToastProvider value={value}>{children(value)}</ToastProvider>;
}
