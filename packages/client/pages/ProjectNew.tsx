import { React } from "deps.ts";
import { PageFrame } from "packages/client/components/PageFrame.tsx";

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: 600,
    maxWidth: "95%",
    background: "var(--background)",
    borderRadius: 8,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 24,
    boxSizing: "border-box",
  },
  page: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    paddingTop: 50,
    boxSizing: "border-box",
  },
}

export function ProjectNew() {
  return (
    <PageFrame>
      <div className="page" style={styles.page}>
        <div className="container" style={styles.container}>
          <div className="content" style={styles.content}>
            <div>
              <h1>Upload a video</h1>
              <p>Upload a video file up to 2000MB directly to the platform.</p>
            </div>
            {
              /* <FileUpload
                onStart={() => setUploading(true)}
                onProgress={handleProgress}
                onComplete={handleUpload}
                onError={(message) => setUploadError(message)}
                project$key={project}
                maxSizeMB={2000}
              /> */
            }
            <ProjectUploader />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function ProjectUploader() {
  return <input type="file" />;
}