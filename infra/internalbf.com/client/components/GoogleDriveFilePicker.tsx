import { getLogger, React, ReactRelay } from "deps.ts";
import { graphql } from "infra/internalbf.com/client/deps.ts";
import { Button } from "packages/bfDs/Button.tsx";
import { GoogleDriveFilePickerQuery } from "infra/__generated__/GoogleDriveFilePickerQuery.graphql.ts";
import { GoogleDriveFilePickerLinkGoogleAccountMutation } from "infra/__generated__/GoogleDriveFilePickerLinkGoogleAccountMutation.graphql.ts";
import { useAppEnvironment } from "infra/internalbf.com/client/contexts/AppEnvironmentContext.tsx";
import { useBfDs } from "packages/bfDs/hooks/useBfDs.tsx";
const logger = getLogger(import.meta);
const { useLazyLoadQuery, useMutation } = ReactRelay;
const { useCallback, useState } = React;

// const pickFileMutation = await graphql`
//   mutation ProjectPageCreateGoogleDriveFileMutation($sourceGoogleFileId: String!, $destinationGoogleFolderId: String!) {
//     createBfMediaGoogleDrive(sourceGoogleFileId: $sourceGoogleFileId, destinationGoogleFolderId: $destinationGoogleFolderId) {
//       googleFileId
//     }
//   }
// `;

const accessTokenQuery = await graphql`
  query GoogleDriveFilePickerQuery {
    currentViewer {
      googleAccessToken
    }
  }
`;

const linkGoogleAccountMutation = await graphql`
  mutation GoogleDriveFilePickerLinkGoogleAccountMutation($code: String!) {
    linkGoogleAccount(code: $code) {
      googleAccessToken
    }
  }
`;

export enum GoogleDriveFilePickerFileType {
  VIDEO = "video",
  FOLDER = "folder",
}

type Props = {
  onPick: (googleDocument: google.picker.DocumentObject) => void;
  pickerType?: GoogleDriveFilePickerFileType;
};

export function GoogleDriveFilePicker({ onPick, pickerType }: Props) {
  const { showToast } = useBfDs();
  const data = useLazyLoadQuery<GoogleDriveFilePickerQuery>(
    accessTokenQuery,
    {},
  );

  const [pickedFile, setPickedFile] = useState<google.picker.DocumentObject>();
  const [googleAccessToken, setGoogleAccessToken] = useState(
    data?.currentViewer?.googleAccessToken,
  );

  const [commit] = useMutation<GoogleDriveFilePickerLinkGoogleAccountMutation>(
    linkGoogleAccountMutation,
  );
  const { GOOGLE_OAUTH_CLIENT_ID } = useAppEnvironment();

  const handleProcessFile = () => {
    console.log("Processing...");
  };

  const authorize = useCallback(async () => {
    try {
      const code = await authorizeGdrive();
      commit({
        variables: { code },
        onCompleted: (res) => {
          setGoogleAccessToken(res?.linkGoogleAccount?.googleAccessToken);
        },
        onError: (err) => {
          const timeout = 5000;
          showToast(err.message, { timeout });
        },
      });
    } catch (e) {
      logger.error("Error authorizing", e);
    }
  }, [GOOGLE_OAUTH_CLIENT_ID]);
  if (!googleAccessToken) {
    return (
      <div style={{ padding: 20 }}>
        <div>
          Authorize your Google account to link it to your Bolt Foundry account.
        </div>
        <div style={{ marginTop: 8 }}>
          <Button text="Authorize" onClick={authorize} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Button
        kind="secondary"
        onClick={() =>
          openPicker(
            googleAccessToken,
            GOOGLE_OAUTH_CLIENT_ID,
            pickerType ?? GoogleDriveFilePickerFileType.VIDEO,
          ).then(
            (res) => {
              if (
                res[google.picker.Response.ACTION] ===
                  google.picker.Action.PICKED
              ) {
                const docs = res[google.picker.Response.DOCUMENTS];
                if (docs && docs.length > 0) {
                  const file = docs[0];
                  setPickedFile(file);
                  onPick(file);
                  return;
                }
              }
            },
          )}
        text="Choose file..."
      />{" "}
      <span style={{ color: "var(--textSecondary)" }}>
        {pickedFile
          ? pickedFile[google.picker.Document.NAME]
          : "Select a file..."}
      </span>
    </div>
  );
}

// Create and render a Google Picker object for selecting from Drive.
function openPicker(
  oauthToken: string,
  appId: string,
  type: GoogleDriveFilePickerFileType = GoogleDriveFilePickerFileType.VIDEO,
): Promise<google.picker.ResponseObject> {
  return new Promise((resolve, reject) => {
    const gapiload = new Promise<void>((gapiResolve) => {
      gapi.load("picker", () => {
        gapiResolve();
      });
    });

    const showPicker = async () => {
      await gapiload;
      const sharedDrive = new google.picker.DocsView(google.picker.ViewId.DOCS);
      sharedDrive.setEnableDrives(true).setIncludeFolders(true);

      switch (type) {
        case GoogleDriveFilePickerFileType.FOLDER: {
          sharedDrive.setSelectFolderEnabled(true).setMimeTypes(
            "application/vnd.google-apps.folder",
          );
        }
      }

      const picker = new google.picker.PickerBuilder()
        .addView(sharedDrive)
        .setOAuthToken(
          oauthToken,
        )
        .setAppId(appId)
        .setCallback((pickerResponse) => {
          switch (pickerResponse.action) {
            case google.picker.Action.PICKED:
              resolve(pickerResponse);
              break;
            case google.picker.Action.CANCEL:
              reject(new Error("User cancelled"));
              break;
          }
        })
        .build();

      picker.setVisible(true);
    };
    return showPicker();
  });
}

function authorizeGdrive(): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = `/google/oauth/start`;
    // center the popup on the screen
    const width = 600;
    const height = 800;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const features =
      `scrollbars=yes, width=${width}, height=${height}, top=${top}, left=${left}`;
    const popup = window.open(url, "Google Authorization", features);
    globalThis.addEventListener("message", (event) => {
      if (event.data.code) {
        resolve(event.data.code);
        popup?.postMessage("close", "*");
      }
    });
  });
}
