/**
 * @generated SignedSource<<a375684485bffebce912485bb27c3c8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectView_containerProject$data = {
  readonly name: string | null | undefined;
  readonly " $fragmentType": "ProjectView_containerProject";
};
export type ProjectView_containerProject$key = {
  readonly " $data"?: ProjectView_containerProject$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProjectView_containerProject">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProjectView_containerProject",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "BfContainerProject",
  "abstractKey": null
};

(node as any).hash = "b3c08e8416c02fad02d5152a954b81bc";

export default node;
