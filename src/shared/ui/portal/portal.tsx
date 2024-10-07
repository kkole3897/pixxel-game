import { createPortal } from 'react-dom';

type PortalProps = React.PropsWithChildren<{
  container?: Element | DocumentFragment | null;
}>;

export default function Portal({ container, children }: PortalProps) {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return <>{children}</>;
  }

  const rootNode = container ?? document.body;

  return createPortal(children, rootNode);
}
