import { React } from "deps.ts";
import { graphql, ReactRelay } from "packages/client/deps.ts";
import { PageFrame } from "packages/client/components/PageFrame.tsx";
import { Toast } from "packages/bfDs/Toast.tsx";
import { Button } from "packages/bfDs/Button.tsx";
import { ProjectNewCreateNewProjectMutation } from "packages/__generated__/ProjectNewCreateNewProjectMutation.graphql.ts";
import { useRouter } from "packages/client/contexts/RouterContext.tsx";

const { useMutation } = ReactRelay;

const mutation = await graphql`
  mutation ProjectNewCreateNewProjectMutation($name: String!) {
    createProject(name: $name) {
      id
    }
  }
`;

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
};

export function ProjectNew() {
  const { navigate } = useRouter();
  const [commit] = useMutation<ProjectNewCreateNewProjectMutation>(mutation);
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
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
            <ProjectUploader
              onSelect={(file) => {
                console.log(file);
              }}
              onUpload={() => {
                commit({
                  variables: {
                    name: "test",
                  },
                  onCompleted: (response) => {
                    const id = response.createProject?.id;
                    navigate(`/projects/${id}`);
                  },
                  onError: (err) => {
                    setError(err.message);
                  },
                });
              }}
            />

            <Toast shouldShow={error != ""} timeout={10000}>{error}</Toast>
            <TempToastDemo />
            <TempToastDemo2 />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function ProjectUploader({ onUpload, onSelect }) {
  return (
    <>
      <input type="file" onChange={(e) => onSelect(e.target.files[0])} />
      <Button onClick={onUpload} />
    </>
  );
}

function TempToastDemo() {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowToast(!showToast)}>
        Show toast immediately
      </button>
      <Toast
        shouldShow={showToast}
        timeout={3000}
        closeCallback={() => setShowToast(false)}
      >
        Immediate toast
      </Toast>
    </>
  );
}

function TempToastDemo2() {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowToast(!showToast)}>
        Show toast immediately
      </button>
      <Toast
        shouldShow={showToast}
        title="Toasty"
        closeCallback={() => setShowToast(false)}
      >
        Closeable toast
      </Toast>
    </>
  );
}
