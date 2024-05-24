import { React } from "deps.ts";
import { ReactDOMClient } from "packages/client/deps.ts";
import { classnames } from "lib/classnames.ts";
import { Button } from "packages/bfDs/Button.tsx";

const { createPortal } = ReactDOMClient;
const { useState, useEffect } = React;

const TRANSITION_DURATION = 500;

type ToastProps = {
  closeCallback?: () => void;
  shouldShow?: boolean;
  timeout?: number;
  title?: string;
};

export function Toast({
  children,
  closeCallback,
  shouldShow = true,
  timeout,
  title,
}: React.PropsWithChildren<ToastProps>) {
  const [show, setShow] = useState(false);
  const [inDOM, setInDOM] = useState(false);
  const [progress, setProgress] = useState(100);
  let domTimer: number;

  function removeToast() {
    setShow(false);
    domTimer = setTimeout(() => {
      setInDOM(false);
      if (closeCallback) {
        closeCallback();
      }
    }, TRANSITION_DURATION);
  }

  useEffect(() => {
    let visibilityTimer: number;
    let progressInterval: number;

    function clearTimers() {
      clearTimeout(visibilityTimer);
      clearTimeout(domTimer);
      clearInterval(progressInterval);
    }

    if (shouldShow) {
      clearTimers();
      setInDOM(true);
      setProgress(100);
      visibilityTimer = setTimeout(() => setShow(true), 10);

      if (timeout && timeout > 0) {
        progressInterval = setInterval(() => {
          setProgress((prevProgress) => {
            const decrement = (100 * 10) / (timeout + TRANSITION_DURATION);
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
      clearTimers();
    };
  }, [shouldShow, timeout]);

  const toastClasses = classnames([
    "toast",
    { show },
  ]);

  return inDOM
    ? createPortal(
      <div className={toastClasses}>
        {title && (
          <div className="toast-title">
            {title}
          </div>
        )}
        <div className="close-toast">
          <Button
            iconLeft="cross"
            kind="overlayDark"
            size="small"
            onClick={removeToast}
          />
        </div>
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
