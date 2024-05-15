/**
 * @generated SignedSource<<8e3fcd756b5b1451b1e191b252500c71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import * as _____client_relay_localResolvers_BfContainerProjectResolver from "packages/client/relay/localResolvers/BfContainerProjectResolver.ts";
import { FragmentRefs } from "relay-runtime";
import { opurl as bfContainerProjectOpurlResolverType } from "../client/relay/localResolvers/BfContainerProjectResolver.ts";
export type ProjectView_containerProject$data = {
  readonly name: string | null | undefined;
  readonly opurl: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"BfContainerProjectResolverOpurlResolver">;
  readonly " $fragmentType": "ProjectView_containerProject";
};
export type ProjectView_containerProject$key = {
  readonly " $data"?: ProjectView_containerProject$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProjectView_containerProject">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "BfContainerProjectResolverOpurlResolver"
};
return {
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
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "opurl",
      "resolverModule": _____client_relay_localResolvers_BfContainerProjectResolver.opurl,
      "path": "opurl"
    },
    (v0/*: any*/)
  ],
  "type": "BfContainerProject",
  "abstractKey": null
};
})();

(node as any).hash = "5d5be5927bc419f93e4c1487b8be20be";

export default node;
