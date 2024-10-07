'use client';

import { type CreateToasterReturn } from './create-toaster';
import { useToastStore } from './use-toast-store';
import { ToastData } from './types';
import { ToastProvider } from './use-toast-context';
import { pickToastContext } from './utils';
import { Portal } from '@/shared/ui/portal';

type ToasterBaseProps<T extends Record<string, any>> = {
  toaster: CreateToasterReturn<T>;
  children: (data: ToastData<T>) => React.ReactNode;
};

type ToasterProps<T extends object = {}> = ToasterBaseProps<T>;

export const Toaster = <T extends Record<string, any>>({
  toaster,
  children,
}: ToasterProps<T>) => {
  const [getToastsByToasterId, getRootNodeByPlacement] = useToastStore(
    (store) => [store.getToastsByToasterId, store.getRootNodeByPlacement]
  );

  const toasts = getToastsByToasterId<T>(toaster.id);

  const rootNode = getRootNodeByPlacement(toaster.placement);

  return (
    <div>
      <Portal container={rootNode}>
        {toasts.map((toast) => (
          <ToastActor data={toast} key={toast.id}>
            {(data) => children(data)}
          </ToastActor>
        ))}
      </Portal>
    </div>
  );
};

type ToastActorProps<T extends Record<string, any>> = {
  children: (data: ToastData<T>) => React.ReactNode;
  data: ToastData<T>;
};

function ToastActor<T extends Record<string, any>>({
  children,
  data,
}: ToastActorProps<T>) {
  const value = pickToastContext(data);

  return <ToastProvider value={value}>{children(data)}</ToastProvider>;
}
