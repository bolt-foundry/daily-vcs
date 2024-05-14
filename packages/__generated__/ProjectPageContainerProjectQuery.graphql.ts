/**
 * @generated SignedSource<<0697fab2858e0f9f2df40c603bfaa4d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProjectPageContainerProjectQuery$variables = {
  id: string;
};
export type ProjectPageContainerProjectQuery$data = {
  readonly containerProject: {
    readonly id: string;
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type ProjectPageContainerProjectQuery = {
  response: ProjectPageContainerProjectQuery$data;
  variables: ProjectPageContainerProjectQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "BfContainerProject",
    "kind": "LinkedField",
    "name": "containerProject",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "ProjectPageContainerProjectQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectPageContainerProjectQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "37e12fb02df394bb71993c86f12da2d9",
    "id": null,
    "metadata": {},
    "name": "ProjectPageContainerProjectQuery",
    "operationKind": "query",
    "text": "query ProjectPageContainerProjectQuery(\n  $id: ID!\n) {\n  containerProject(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e37c53fa52a39e455e2347eedd0ec4cc";

export default node;
