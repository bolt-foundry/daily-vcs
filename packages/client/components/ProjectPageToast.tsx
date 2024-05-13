import { React } from "deps.ts";
import { Toast } from "packages/bfDs/Toast.tsx";
import { Progress } from "packages/bfDs/Progress.tsx";
import { colors } from "packages/bfDs/const.tsx";
const { useEffect, useState } = React;

const styles: Record<string, React.CSSProperties> = {
  statuses: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  status: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
};

type Props = {
  shouldShow: boolean;
};

export function ProjectPageToast({ shouldShow }: Props) {
  // statuses of uploading, transcribing, clipping
  const [uploading, setUploading] = useState(0.0);
  const [transcribing, setTranscribing] = useState(0.0);
  const [clipping, setClipping] = useState(0.0);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    if (uploading === 1 && transcribing === 1 && clipping === 1) {
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  }, [uploading, transcribing, clipping]);

  return (
    <Toast shouldShow={showToast}>
      <div className="toast-title">
        Project status
      </div>
      <div className="toast-text" style={styles.statuses}>
        <div style={styles.status} onClick={() => setUploading(1)}>
          <Progress
            size={16}
            progress={uploading * 100}
            backgroundColor={colors.transparentDark}
          />
          Uploading
        </div>
        <div style={styles.status} onClick={() => setTranscribing(1)}>
          <Progress
            size={16}
            progress={transcribing * 100}
            backgroundColor={colors.transparentDark}
          />
          Transcribing
        </div>
        <div style={styles.status} onClick={() => setClipping(1)}>
          <Progress
            size={16}
            progress={clipping * 100}
            backgroundColor={colors.transparentDark}
          />
          Clipping
        </div>
      </div>
    </Toast>
  );
}
