import { React } from "deps.ts";
import { ReactDOMClient } from "packages/client/deps.ts";
import { Toast } from "packages/bfDs/Toast.tsx";
const { createContext, useState, useEffect } = React;
const { createPortal } = ReactDOMClient;

type ReactNode = React.ReactNode;
type UseToastOptions = {
  timeout?: number;
  title?: string;
};

export type ToastContextType = {
  showToast: (message: ReactNode, options?: UseToastOptions) => void;
  ToastComponent: ReactNode;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const BfDsProvider = ({ children }: { children: ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<string | ReactNode>("");
  const [options, setOptions] = useState<UseToastOptions | undefined>(undefined);
  const [shouldShow, setShouldShow] = useState(false);

  function showToast(message: ReactNode, options: UseToastOptions = {}) {
    setToastMessage(message);
    setOptions(options);
    setShouldShow(true);

    if (options.timeout && options.timeout > 0) {
      setTimeout(() => {
        setShouldShow(false);
      }, options.timeout);
    }
  }

  useEffect(() => {
    if (!shouldShow) {
      setToastMessage("");
      setOptions(undefined);
    }
  }, [shouldShow]);

  const value = { showToast, ToastComponent: shouldShow ? (
    <Toast
      shouldShow={shouldShow}
      title={options?.title}
      timeout={options?.timeout}
      closeCallback={() => setShouldShow(false)}
    >
      {toastMessage}
    </Toast>
  ) : null};

  return (
    <ToastContext.Provider value={value}>
      {children}
      {shouldShow && createPortal(value.ToastComponent, document.getElementById("toast-root") as Element)}
    </ToastContext.Provider>
  );
};