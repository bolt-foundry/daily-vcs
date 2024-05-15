/**
 * @generated SignedSource<<9e470d7ed7c3f98d02fb23bea5921a7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProjectNewCreateBffsFileMutation$variables = {
  name: string;
};
export type ProjectNewCreateBffsFileMutation$data = {
  readonly createBfMediaBffsFile: {
    readonly id: string;
  } | null | undefined;
};
export type ProjectNewCreateBffsFileMutation = {
  response: ProjectNewCreateBffsFileMutation$data;
  variables: ProjectNewCreateBffsFileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "BfMediaBffsFile",
    "kind": "LinkedField",
    "name": "createBfMediaBffsFile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectNewCreateBffsFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectNewCreateBffsFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6265583f0f7f53107c57b6b7f78717ac",
    "id": null,
    "metadata": {},
    "name": "ProjectNewCreateBffsFileMutation",
    "operationKind": "mutation",
    "text": "mutation ProjectNewCreateBffsFileMutation(\n  $name: String!\n) {\n  createBfMediaBffsFile(name: $name) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c5ffd7393f3a55413e7f73b7edca6227";

export default node;
