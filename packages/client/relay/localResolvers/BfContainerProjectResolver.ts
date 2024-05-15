import { graphql } from "packages/client/deps.ts";
import { getLogger } from "deps.ts";

const logger = getLogger(import.meta);

import {readFragment} from "npm:relay-runtime/lib/store/ResolverFragments.js";

import { BfContainerProjectResolverOpurlResolver$key } from "packages/__generated__/BfContainerProjectResolverOpurlResolver.graphql.ts";
const fragment = await graphql`
fragment BfContainerProjectResolverOpurlResolver on BfContainerProject {
  id
}`;



/**
 * @RelayResolver BfContainerProject.opurl: String
 * @rootFragment BfContainerProjectResolverOpurlResolver
 *
 * file path for the OPFS
 */
export function opurl(
  bfContainerProject$key: BfContainerProjectResolverOpurlResolver$key,
): string | null {

  const data = readFragment(fragment, bfContainerProject$key);
  const id = data.id;
  const url = getObjectUrl(`${id}.mp4`);

  return url;
}

const availableFiles: Record<string, Blob | MediaSource> = {};
const objectUrlCache: Record<string, string> = {};

if (navigator.storage) {
  await refreshFiles();
} else {
  logger.warn("does not support navigator");
}

function getObjectUrl(id: string) {
  if (objectUrlCache[id]) {
    return objectUrlCache[id];
  }

  if (availableFiles[id]) {
    const url = URL.createObjectURL(availableFiles[id]);
    objectUrlCache[id] = url;
    return url;
  }
  return null;
}

export async function refreshFiles() {
  try {
    const rootDirectory = await navigator.storage.getDirectory();
    const videosDirectory = await rootDirectory.getDirectoryHandle("videos", {
      create: true,
    });
    for await (const [id, handle] of videosDirectory.entries()) {
      if (handle.kind === "file") {
        const fileHandle = handle as FileSystemFileHandle;
        availableFiles[id] = await fileHandle.getFile();
      }
    }
    logger.log(availableFiles);
  } catch (e) {
    logger.error(e);
    // throw e;
  }
}

export function addFile(file: File) {
  availableFiles[file.name] = file;
  getObjectUrl(`${file.name}.mp4`);
}
