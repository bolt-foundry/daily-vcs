/**
 * @generated SignedSource<<a1a6c112ff69740974f1b45ef3c2f526>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectPageContainerProjectQuery$variables = {
  id: string;
};
export type ProjectPageContainerProjectQuery$data = {
  readonly containerProject: {
    readonly " $fragmentSpreads": FragmentRefs<"ProjectView_containerProject">;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectPageContainerProjectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BfContainerProject",
        "kind": "LinkedField",
        "name": "containerProject",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProjectView_containerProject"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectPageContainerProjectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BfContainerProject",
        "kind": "LinkedField",
        "name": "containerProject",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "5aa0aa8a17b691bb1602c58f456c1128",
    "id": null,
    "metadata": {},
    "name": "ProjectPageContainerProjectQuery",
    "operationKind": "query",
    "text": "query ProjectPageContainerProjectQuery(\n  $id: ID!\n) {\n  containerProject(id: $id) {\n    ...ProjectView_containerProject\n    id\n  }\n}\n\nfragment ProjectView_containerProject on BfContainerProject {\n  name\n}\n"
  }
};
})();

(node as any).hash = "52d865b4b3955970adb8b9fc3c20f736";

export default node;
