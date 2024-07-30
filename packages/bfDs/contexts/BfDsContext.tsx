import { React } from "deps.ts";
import { Toast, TRANSITION_DURATION } from "packages/bfDs/Toast.tsx";
import { Modal } from "packages/bfDs/Modal.tsx";

const { createContext, useState } = React;

type ReactNode = React.ReactNode;
type UseToastOptions = {
  closeCallback?: () => void;
  id?: string;
  shouldShow?: boolean;
  timeout?: number;
  title?: string;
};
type UseModalOptions = {
  clickOusideToClose?: boolean;
  confirmClose?: boolean;
  header?: string;
  onClose?: () => void;
  onSave?: (() => void) | null;
  xstyle?: React.CSSProperties;
  contentXstyle?: React.CSSProperties;
  kind?: string;
};

export type BfDsContextType = {
  showModal: (content: ReactNode, options?: UseModalOptions) => () => void;
  showToast: (message: ReactNode, options?: UseToastOptions) => void;
  ModalComponent: ReactNode;
  ToastComponent: ReactNode;
};

export const BfDsContext = createContext<BfDsContextType | undefined>(
  undefined,
);

type ModalType = {
  content: ReactNode;
  options?: UseModalOptions;
};

type Toast = {
  id: string;
  message: string | ReactNode;
  options: UseToastOptions | undefined;
};

export const BfDsProvider = ({ children }: { children: ReactNode }) => {
  const [activeToasts, setActiveToasts] = useState<Array<Toast>>([]);
  const [activeModal, setActiveModal] = useState<ModalType>();

  function showModal(content: ReactNode, options: UseModalOptions) {
    setActiveModal({ content, options });
    return () => {
      setActiveModal(undefined);
    } 
  }

  function showToast(message: ReactNode, options: UseToastOptions = {}) {
    const id = options.id ?? Math.random().toString(36).substring(2, 15);
    const existingToastIndex = activeToasts.findIndex((toast) =>
      toast.id === id
    );
    const newToastData = {
      id,
      message,
      options,
    };

    if (existingToastIndex > -1) {
      const newToasts = [...activeToasts];
      newToasts[existingToastIndex] = newToastData;
      setActiveToasts(newToasts);
      return;
    }

    setActiveToasts([...activeToasts, newToastData]);
  }

  function hideToast(id: string) {
    setActiveToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, shouldShow: false } : toast
      )
    );
    // remove from state after animate off (500ms)
    setTimeout(() => {
      setActiveToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== id)
      );
    }, TRANSITION_DURATION);
  }

  const value = {
    showModal,
    showToast,
    ModalComponent: activeModal && (
      <Modal
        clickOusideToClose={activeModal.options?.clickOusideToClose}
        confirmClose={activeModal.options?.confirmClose}
        header={activeModal.options?.header}
        onClose={() => {
          setActiveModal(undefined);
          activeModal.options?.onClose?.();
        }}
        onSave={activeModal.options?.onSave}
        xstyle={activeModal.options?.xstyle}
        contentXstyle={activeModal.options?.contentXstyle}
        kind={activeModal.options?.kind}
      >
        {activeModal.content}
      </Modal>
    ),
    ToastComponent: (
      <>
        {activeToasts.map((toast) => (
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
    <BfDsContext.Provider value={value}>
      {children}
      {value.ToastComponent}
      {value.ModalComponent}
    </BfDsContext.Provider>
  );
};
