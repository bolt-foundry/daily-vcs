import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";
import {
  Constructor,
  CreationMetadata,
} from "packages/bfDb/classes/BfBaseModelMetadata.ts";
import {
  BfGid,
  BfSid,
  BfTid,
} from "packages/bfDb/classes/BfBaseModelIdTypes.ts";
import { ConnectionArguments } from "packages/graphql/deps.ts";
import { BfModel } from "packages/bfDb/classes/BfModel.ts";
import type { BfBaseModel } from "packages/bfDb/classes/BfModel.ts";
import { bfGetItemsByBfGid, bfQueryItems } from "packages/bfDb/bfDb.ts";
import type { ConnectionInterface } from "react-relay";
import { BfCurrentViewer } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { getLogger } from "deps.ts";

const logger = getLogger(import.meta);
export type BfEdgeRequiredProps = Record<string, never>;

export type BfEdgeOptionalProps = {
  action?: string;
};

type EdgeCreationMetadata = CreationMetadata & {
  bfTClassName: string;
  bfTid: BfTid | BfGid;
  bfSClassName: string;
  bfSid: BfSid | BfGid;
};

export class BfEdge<
  ChildRequiredProps extends BfEdgeRequiredProps = BfEdgeRequiredProps,
  ChildOptionalProps extends BfEdgeOptionalProps = Record<string, unknown>,
> extends BfNode<
  ChildRequiredProps,
  ChildOptionalProps,
  EdgeCreationMetadata
> {
  __typename = "BfEdge";

  static async queryTargetsConnectionForGraphQL<
    TThis extends Constructor<
      BfModel<TRequiredProps, TOptionalProps, TCreationMetadata>
    >,
    TRequiredProps,
    TOptionalProps,
    TCreationMetadata extends CreationMetadata,
  >(
    this: TThis,
    currentViewer: BfCurrentViewer,
    TargetClass: typeof BfNode,
    sourceBfGid: BfGid | BfSid,
    propsToQuery: Partial<TRequiredProps & TOptionalProps> = {},
    connectionArgs: ConnectionArguments,
  ): Promise<
    ConnectionInterface<
      InstanceType<TThis> & EdgeCreationMetadata
    > & { count: number }
  > {
    logger.debug("queryTargetsConnectionForGraphQL", TargetClass, sourceBfGid);
    // @ts-expect-error done is better than good™
    const connection = await this.queryConnectionForGraphQL(
      currentViewer,
      { bfSid: sourceBfGid, bfTClassName: TargetClass.name },
      propsToQuery,
      connectionArgs,
    );
    logger.debug("connection", connection);
    const targetEdgeIds = connection.edges.map((
      edge: { node: { id: string } },
    ) => edge.node.id);
    logger.debug("targetEdgeIds", targetEdgeIds);
    const targetEdges = await bfGetItemsByBfGid(targetEdgeIds);
    const targetIds = targetEdges.map((edge) => edge.metadata.bfTid);
    logger.debug("targetIds", targetIds);
    const targetConnection = await TargetClass.queryConnectionForGraphQL(
      currentViewer,
      {},
      {},
      connectionArgs,
      targetIds,
    );
    logger.debug("targetConnection", targetConnection);
    return targetConnection;
  }

  static async querySourcesConnectionForGraphQL() {
  }
}
