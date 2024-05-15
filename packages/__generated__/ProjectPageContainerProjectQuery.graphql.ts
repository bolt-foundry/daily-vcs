/**
 * @generated SignedSource<<0f67104ddef3ed21bf67d7452f5393fb>>
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
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
            "name": "opurl",
            "args": null,
            "fragment": {
              "kind": "InlineFragment",
              "selections": [
                (v2/*: any*/)
              ],
              "type": "BfContainerProject",
              "abstractKey": null
            },
            "kind": "RelayResolver",
            "storageKey": null,
            "isOutputType": true
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "19ac5552ac9b834ac4939431c529f101",
    "id": null,
    "metadata": {},
    "name": "ProjectPageContainerProjectQuery",
    "operationKind": "query",
    "text": "query ProjectPageContainerProjectQuery(\n  $id: ID!\n) {\n  containerProject(id: $id) {\n    ...ProjectView_containerProject\n    id\n  }\n}\n\nfragment BfContainerProjectResolverOpurlResolver on BfContainerProject {\n  id\n}\n\nfragment ProjectView_containerProject on BfContainerProject {\n  name\n  ...BfContainerProjectResolverOpurlResolver\n}\n"
  }
};
})();

(node as any).hash = "52d865b4b3955970adb8b9fc3c20f736";

export default node;
