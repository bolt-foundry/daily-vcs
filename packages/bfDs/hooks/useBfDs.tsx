import { React } from "deps.ts";
import { ToastContext, ToastContextType } from "packages/bfDs/conexts/BfDsContext.tsx";
const { useContext } = React;

export const useBfDs = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useBfDs must be used within a BfDsProvider");
  }
  return context;
};