/**
 * @generated SignedSource<<9c2c7c94105d3187bd661d698ae91cae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProjectNewCreateNewProjectMutation$variables = {
  name: string;
};
export type ProjectNewCreateNewProjectMutation$data = {
  readonly createProject: {
    readonly id: string;
  } | null | undefined;
};
export type ProjectNewCreateNewProjectMutation = {
  response: ProjectNewCreateNewProjectMutation$data;
  variables: ProjectNewCreateNewProjectMutation$variables;
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
    "concreteType": "BfContainerProject",
    "kind": "LinkedField",
    "name": "createProject",
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
    "name": "ProjectNewCreateNewProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectNewCreateNewProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "47d4128b739937e759a0036ca90cc098",
    "id": null,
    "metadata": {},
    "name": "ProjectNewCreateNewProjectMutation",
    "operationKind": "mutation",
    "text": "mutation ProjectNewCreateNewProjectMutation(\n  $name: String!\n) {\n  createProject(name: $name) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "edf7b22e8ae519b34f8080098bdd9dc0";

export default node;
