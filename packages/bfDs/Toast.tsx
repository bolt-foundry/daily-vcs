import { React } from "deps.ts";
import { ReactDOMClient } from "packages/client/deps.ts";
import { Button } from "packages/bfDs/Button.tsx";

const { createPortal } = ReactDOMClient;
const { useState, useEffect } = React;

type ToastProps = {
  closeCallback?: () => void;
  shouldShow: boolean;
  timeout?: number;
  title?: string;
};

export function Toast({
  children,
  closeCallback,
  shouldShow,
  timeout,
  title,
}: React.PropsWithChildren<ToastProps>) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let visibilityTimer: number | undefined;
    let progressInterval: number | undefined;;
    if (shouldShow) {
      if (timeout && timeout > 0) {
        progressInterval = setInterval(() => {
          setProgress((prevProgress) => {
            const decrement = (100 * 100) / timeout; // Decrementing every 100ms
            return Math.max(prevProgress - decrement, 0);
          });
        }, 100);

        visibilityTimer = setTimeout(() => {
          if (closeCallback) closeCallback();
        }, timeout);
      }
    } else {
      setProgress(100);
      if (visibilityTimer) clearTimeout(visibilityTimer);
      if (progressInterval) clearInterval(progressInterval);
    }
    return () => {
      if (visibilityTimer) clearTimeout(visibilityTimer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [shouldShow, timeout, closeCallback]);

  return shouldShow
    ? createPortal(
        <div className="toast show">
          {title && <div className="toast-title">{title}</div>}
          <div className="close-toast">
            <Button
              iconLeft="cross"
              kind="overlayDark"
              size="small"
              onClick={closeCallback}
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
