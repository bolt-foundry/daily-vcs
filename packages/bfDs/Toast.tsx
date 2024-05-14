import { React } from "deps.ts";
import { ReactDOMClient } from "packages/client/deps.ts";
import { classnames } from "lib/classnames.ts";

const { createPortal } = ReactDOMClient;
const { useState, useEffect } = React;

type ToastProps = {
  shouldShow: boolean;
  timeout?: number;
  timeoutCallback?: () => void;
};

export function Toast({
  children,
  shouldShow,
  timeout,
  timeoutCallback,
}: React.PropsWithChildren<ToastProps>) {
  const [show, setShow] = useState(false);
  const [inDOM, setInDOM] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let visibilityTimer: number;
    let domTimer: number;
    let progressInterval: number;

    function removeToast() {
      setShow(false);
      domTimer = setTimeout(() => {
        setInDOM(false);
        timeoutCallback()
      }, 500);
    }

    if (shouldShow) {
      setInDOM(true);
      setProgress(100);
      visibilityTimer = setTimeout(() => setShow(true), 10);

      if (timeout && timeout > 0) {
        progressInterval = setInterval(() => {
          setProgress((prevProgress) => {
            const decrement = (100 * 10) / timeout;
            return Math.max(prevProgress - decrement, 0);
          });
        }, 10);

        domTimer = setTimeout(() => {
          removeToast();
        }, timeout);
      }
    } else {
      removeToast();
    }

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(domTimer);
      clearInterval(progressInterval);
    };
  }, [shouldShow, timeout]);

  const toastClasses = classnames([
    "toast",
    { show },
  ]);

  return inDOM
    ? createPortal(
      <div className={toastClasses}>
        {children}
        {timeout && timeout > 0 && (
          <div className="toast-progress" style={{ width: `${progress}%` }}>
          </div>
        )}
      </div>,
      document.getElementById("toast-root") as Element,
    )
    : null;
}
