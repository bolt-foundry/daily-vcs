/**
 * @generated SignedSource<<39345a582ef833fe4c9bbbe809d8ba9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BfContainerProjectResolverOpurlResolver$data = {
  readonly id: string;
  readonly " $fragmentType": "BfContainerProjectResolverOpurlResolver";
};
export type BfContainerProjectResolverOpurlResolver$key = {
  readonly " $data"?: BfContainerProjectResolverOpurlResolver$data;
  readonly " $fragmentSpreads": FragmentRefs<"BfContainerProjectResolverOpurlResolver">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BfContainerProjectResolverOpurlResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "BfContainerProject",
  "abstractKey": null
};

(node as any).hash = "fb45782ae43b089d4b21364f6be92689";

export default node;
