import { BfModel } from "packages/bfDb/classes/BfModel.ts";
import {
  ACCOUNT_ROLE,
  BfGid,
  toBfGid,
  toBfOid,
  toBfPk,
  toBfSkUnsorted,
} from "packages/bfDb/classes/BfBaseModelIdTypes.ts";
import { BfCurrentViewerAccessToken } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfPerson } from "packages/bfDb/models/BfPerson.ts";
import {
  encodeBfAccessToken,
  encodeBfRefreshToken,
} from "packages/bfDb/classes/BfAuth.ts";
import {
  BfModelErrorNotFound,
  BfModelErrorPermission,
} from "packages/bfDb/classes/BfModelError.ts";
import { bfQueryItems } from "packages/bfDb/bfDb.ts";
import { BfDbError } from "packages/bfDb/classes/BfDbError.ts";

export type BfAccountRequiredProps = {
  organizationBfGid: BfGid;
  personBfGid: BfGid;
  role: ACCOUNT_ROLE;
  displayName: string;
};

class BfAccountError extends BfDbError {}

class BfAccountErrorRefreshToken extends BfAccountError {
  constructor(message: string = "Refresh token error") {
    super(message);
  }
}

class BfAccountRefreshTokenExpiredError extends BfAccountErrorRefreshToken {
  constructor() {
    super("Refresh token expired");
  }
}

export class BfAccount extends BfModel<BfAccountRequiredProps> {
  __typename = "BfAccount" as const;

  static async findAllForPerson(
    currentViewer: BfCurrentViewerAccessToken,
    personBfGid: BfGid,
  ) {
    if (currentViewer.personBfGid !== personBfGid) {
      throw new BfModelErrorPermission(
        "Current viewer does not match requested account",
      );
    }
    const accounts = await bfQueryItems<BfAccountRequiredProps>(
      toBfPk(personBfGid),
      toBfSkUnsorted("BfAccount"),
    );

    return accounts.map(({ props, metadata }) =>
      new BfAccount(currentViewer, props, {}, metadata, true)
    );
  }

  static async findDefaultForCurrentViewer(
    currentViewer: BfCurrentViewerAccessToken,
  ) {
    const accounts = await this.findAllForOwner(currentViewer);
    const defaultAccount =
      accounts.find((account) => account.props.role === ACCOUNT_ROLE.OWNER) ??
        accounts[0];
    if (!defaultAccount) {
      throw new BfModelErrorNotFound("Default account not found");
    }
    return defaultAccount;
  }

  static async getRefreshedAccessToken(
    importMeta: ImportMeta,
    refreshToken: string,
  ) {
    const currentViewer = await BfCurrentViewerAccessToken.create(
      importMeta,
      refreshToken,
    );
    const person = await BfPerson.findX(
      currentViewer,
      currentViewer.personBfGid,
    );
    // last logout to unix seconds
    const lastLogout = person?.props.lastLogout
      ? Math.floor(person?.props.lastLogout.getTime() / 1000)
      : 0;
    const refreshTokenIssuedAt = currentViewer.jwtPayload?.iat ?? 0;
    if (lastLogout > refreshTokenIssuedAt) {
      throw new BfAccountRefreshTokenExpiredError();
    }
    if (
      toBfGid(currentViewer.actorBfGid) !== currentViewer.personBfGid &&
      currentViewer.accountBfGid
    ) {
      const relatedAccount = await this.find(
        currentViewer,
        currentViewer.accountBfGid,
      );
      if (relatedAccount) {
        return await relatedAccount.generateAccessToken(importMeta);
      }
      throw new BfAccountErrorRefreshToken();
    }
  }

  async beforeLoad() {
    // try to load using the person's CV, not the actor CV.
    this.metadata.bfOid = await toBfOid(this.currentViewer.personBfGid);
  }

  async generateAccessToken(importMeta: ImportMeta) {
    return await encodeBfAccessToken(
      importMeta,
      this.toJwtPayload(),
    );
  }
  async generateRefreshToken(importMeta: ImportMeta) {
    const jwtPayload = this.toJwtPayload();
    const payload = {
      ...jwtPayload,
      role: ACCOUNT_ROLE.REFRESH_CREDENTIALS_ONLY as const,
    };
    return await encodeBfRefreshToken(
      importMeta,
      payload,
    );
  }

  toJwtPayload() {
    return {
      role: this.props.role,
      actorBfGid: this.props.organizationBfGid,
      personBfGid: this.props.personBfGid,
      tokenCreatedBy: this.metadata.bfGid,
    };
  }
}
