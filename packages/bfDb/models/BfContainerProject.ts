import {
  BfContainer,
  BfContainerRequiredProps,
} from "packages/bfDb/coreModels/BfContainer.ts";

type BfContainerProjectRequiredProps = BfContainerRequiredProps & {
  name: string;
};

export class BfContainerProject
  extends BfContainer<BfContainerProjectRequiredProps> {
  __typename: "BfContainerProject" = "BfContainerProject";
}
