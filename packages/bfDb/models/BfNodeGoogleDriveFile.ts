import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import { fetchFile } from "lib/googleDriveApi.ts";
import { getLogger } from "deps.ts";
import { streamFileToFfmpegForChunking } from "lib/ffmpegInterface.ts";
import { BfNodeJob } from "packages/bfDb/models/BfNodeJob.ts";

const logger = getLogger(import.meta);

type BfNodeGoogleDriveFileRequiredProps = {
  googleDriveFileId: string,
}

export class BfNodeGoogleDriveFile extends BfNode<BfNodeGoogleDriveFileRequiredProps> {
  __typename = "BfNodeGoogleDriveFile" as const;
  afterCreate() {
    // this.ingest();
    this.createIngestionJob();
  }
  async ingest() {
    logger.debug(`ingesting ${this.props.googleDriveFileId}`);
    const currentViewerAccessToken = await BfPerson.findGoogleApiTokenForCurrentViewer(this.currentViewer);
    const accessToken = await currentViewerAccessToken.getCurrentAccessToken();
    const fileResponse = await fetchFile(accessToken, this.props.googleDriveFileId);
    const fileStream = fileResponse.body;
    if (fileStream) {
      await streamFileToFfmpegForChunking(fileStream);
      logger.info("probably streamed?")
    }
    
  }
  async createIngestionJob() {
    logger.trace(`creating ingestion job for ${this.props.googleDriveFileId}`);
    await BfNodeJob.createJobForNode(this, 'ingest', [])
    logger.trace(`created ingestion job for ${this.props.googleDriveFileId}`);
  }
  
}