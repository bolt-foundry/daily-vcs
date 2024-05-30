/**
 * @generated SignedSource<<d7b6992c738923cf6cbf577045eccf5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProjectNewUploadFileMutation$variables = {
  file: any;
};
export type ProjectNewUploadFileMutation$data = {
  readonly readTextFile: string | null | undefined;
};
export type ProjectNewUploadFileMutation = {
  response: ProjectNewUploadFileMutation$data;
  variables: ProjectNewUploadFileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "file"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "file",
        "variableName": "file"
      }
    ],
    "kind": "ScalarField",
    "name": "readTextFile",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectNewUploadFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectNewUploadFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4a069b248559b5e9cf631bfae50bd239",
    "id": null,
    "metadata": {},
    "name": "ProjectNewUploadFileMutation",
    "operationKind": "mutation",
    "text": "mutation ProjectNewUploadFileMutation(\n  $file: File!\n) {\n  readTextFile(file: $file)\n}\n"
  }
};
})();

(node as any).hash = "06a8830ba3dddc8ca12d041f6dbad871";

export default node;
