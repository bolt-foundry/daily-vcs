import { React } from "deps.ts";
import { Toast, TRANSITION_DURATION } from "packages/bfDs/Toast.tsx";
const { createContext, useState } = React;

type ReactNode = React.ReactNode;
type UseToastOptions = {
  closeCallback?: () => void;
  id?: string;
  shouldShow?: boolean;
  timeout?: number;
  title?: string;
};

export type ToastContextType = {
  showToast: (message: ReactNode, options?: UseToastOptions) => void;
  ToastComponent: ReactNode;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

type Toast = {
  id: string;
  message: string | ReactNode;
  options: UseToastOptions | undefined;
};

export const BfDsProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);

  function showToast(message: ReactNode, options: UseToastOptions = {}) {
    const id = options.id ?? Math.random().toString(36).substring(2, 15);
    const existingToastIndex = toasts.findIndex((toast) => toast.id === id);
    const newToastData = {
      id,
      message,
      options,
    };

    if (existingToastIndex > -1) {
      const newToasts = [...toasts];
      newToasts[existingToastIndex] = newToastData;
      setToasts(newToasts);
      return;
    }

    setToasts([...toasts, newToastData]);
  }

  function hideToast(id: string) {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, shouldShow: false } : toast
      )
    );
    // remove from state after animate off (500ms)
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, TRANSITION_DURATION);
  }

  const value = {
    showToast,
    ToastComponent: (
      <>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            shouldShow={toast.options?.shouldShow}
            title={toast.options?.title}
            timeout={toast.options?.timeout}
            closeCallback={() => {
              hideToast(toast.id);
              toast.options?.closeCallback?.();
            }}
          >
            {toast.message}
          </Toast>
        ))}
      </>
    ),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {value.ToastComponent}
    </ToastContext.Provider>
  );
};
