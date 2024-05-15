import { BfNode } from "packages/bfDb/coreModels/BfNode.ts";

export type BfMediaRequiredProps = {
  name: string;
};
export type BfMediaOptionalProps = Record<string, unknown>;

export class BfMedia<
  ChildRequiredProps extends BfMediaRequiredProps = BfMediaRequiredProps,
  ChildOptionalProps extends BfMediaOptionalProps = BfMediaOptionalProps,
> extends BfNode<ChildRequiredProps, ChildOptionalProps> {
  __typename = "BfMedia";
  protected static isSorted = true;
}
