import { React, getLogger } from "deps.ts";
import { graphql, ReactRelay } from "packages/client/deps.ts";
import { PageFrame } from "packages/client/components/PageFrame.tsx";
import { ProjectNewCreateNewProjectMutation } from "packages/__generated__/ProjectNewCreateNewProjectMutation.graphql.ts";
import { ProjectNewCreateBffsFileMutation } from "packages/__generated__/ProjectNewCreateBffsFileMutation.graphql.ts"
import { useRouter } from "packages/client/contexts/RouterContext.tsx";
import { streamFileToOpfs } from "lib/opfs.ts";
import { useBfDs } from "packages/bfDs/hooks/useBfDs.tsx";
import { Button } from "packages/bfDs/Button.tsx";


const logger = getLogger(import.meta);

const { useMutation } = ReactRelay;

const mutation = await graphql`
  mutation ProjectNewCreateNewProjectMutation($name: String!) {
    createProject(name: $name) {
      id
    }
  }
`;

const createBffsFileMutation = await graphql`
  mutation ProjectNewCreateBffsFileMutation($name: String!) {
    createBfMediaBffsFile(name: $name) {
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
  const [commitCreateBffsFile] = useMutation<ProjectNewCreateBffsFileMutation>(createBffsFileMutation);

  const { showToast } = useBfDs();

  return (
    <PageFrame>
      <div className="page" style={styles.page}>
        <div className="container" style={styles.container}>
          <div className="content" style={styles.content}>
            <div>
              <h1>Upload a video</h1>
              <p>Upload a video file up to 2000MB directly to the platform.</p>
            </div>
            <ProjectUploader
              onSelect={(file) => {
                commitCreateBffsFile({
                  variables: { name: file.name },
                  onCompleted: (data) => {
                    const id = data.createBfMediaBffsFile?.id;
                    const observable = streamFileToOpfs(file, id ?? file.name);
                    observable.subscribe({
                      next: (value) => {
                        if (value.type === "progress") {
                          const percentage = (value.totalBytesWritten / value.file.size) * 100;
                          showToast(`Uploading ${percentage.toFixed(2)}%`);
                        }
                      },
                      complete: () => {
                        showToast("File uploaded to OPFS");
                      },
                      error: (error) => {
                        showToast(`Error: ${error.message}`, { timeout: 10000 });
                      },
                    });
                  },
                });
              }}
              onUpload={() => {
                commit({
                  variables: { name: "test" },
                  onCompleted: (response) => {
                    const id = response.createProject?.id;
                    navigate(`/projects/${id}`);
                  },
                  onError: (err) => {
                    showToast(`Error: ${err.message}`, { timeout: 10000 });
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

type ProjectUploaderProps = {
  onUpload: (file: File | void) => void;
  onSelect: (file: File) => void;
}

function ProjectUploader({ onUpload, onSelect }: ProjectUploaderProps) {
  const [file, setFile] = React.useState<File>();
  React.useEffect(() => {
    if (file) {
      onSelect(file);
    }
  }, [file]);
  return (
    <>
      <input type="file" onChange={(e) => setFile((e?.target?.files ?? [])[0])} />
      <Button onClick={() => { onUpload(file) }} />
    </>
  );
}