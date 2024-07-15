declare const __nominal__type: unique symbol;
export type Nominal<Type, Identifier> = Type & {
  readonly [__nominal__type]: Identifier;
};

/**
 * BfGid is a globally unique identifier for a BfModel.
 */
export type BfGid = Nominal<string, "BfGid">;
/**
 * BfOid is an owner for a BfModel. BfOid maps to BfGids.
 */
export type BfOid = Nominal<string, "BfOid"> | BfGid;
/**
 * BfSid is a Source for a BfEdge. BfSid maps to BfGids.
 */
export type BfSid = Nominal<string, "BfSid"> | BfGid;
/**
 * BfCid is the creator for a BfModel. BfCid maps to BfGids for accounts only.
 */
export type BfCid = Nominal<string, "BfCid"> | BfGid;
/**
 * BfTid is a target for a BfModel. Most frequently used in edges. BfTid maps to BfGids.
 */
export type BfTid = Nominal<string, "BfTid"> | BfGid;

export type BfAnyid = BfGid | BfOid | BfSid | BfCid | BfTid;

export type BfAccessToken = Nominal<string, "BfAccessToken">;
export type BfClassName = Nominal<string, "BfClassName">;
export type Unixtime = Nominal<number, "Unixtime">;
export type JsUnixtime = Nominal<number, "JsUnixtime">;

export function toBfGid(value: string): BfGid {
  return value as BfGid;
}

export function toBfOid(value: string): BfOid {
  return value as BfOid;
}

export function toBfSid(value: string): BfSid {
  return value as BfSid;
}

export function toBfTid(value: string): BfTid {
  return value as BfTid;
}

export function toBfCid(value: string): BfCid {
  return value as BfCid;
}

export function toBfSortValue<T extends string>(value: T): BfSortValue<T> {
  return value as BfSortValue<T>;
}

export function toUnixtime(value: number): Unixtime {
  return value as Unixtime;
}

export function toJsUnixtime(value: number): JsUnixtime {
  return value as JsUnixtime;
}

export function convertJsUnixtimeToUnixtime(value: JsUnixtime): Unixtime {
  const unixtime = value / 1000;
  return toUnixtime(unixtime);
}

export function convertUnixtimeToJsUnixtime(value: Unixtime): JsUnixtime {
  const jsUnixtime = value * 1000;
  return toJsUnixtime(jsUnixtime);
}

export enum ACCOUNT_ACTIONS {
  READ = "READ",
  WRITE = "WRITE",
  CREATE = "CREATE",
  DELETE = "DELETE",
  LIST = "LIST",
  UPDATE = "UPDATE",
  REFRESH_CREDENTIALS = "REFRESH_CREDENTIALS",
  TRANSFER_OWNERSHIP = "TRANSFER_OWNERSHIP",
  INVITE = "INVITE",
  CREATE_ORGANIZATION = "CREATE_ORGANIZATION",
  CREATE_USER = "CREATE_USER",
}

export enum ACCOUNT_ROLE {
  ADMIN = "ADMIN",
  ANON = "ANON",
  OWNER = "OWNER",
  OMNI = "OMNI",
  REFRESH_CREDENTIALS_ONLY = "REFRESH_CREDENTIALS_ONLY",
  SERVICE_INGESTION = "SERVICE_INGESTION",
}

const ADMIN_ACTIONS = [
  ACCOUNT_ACTIONS.READ,
  ACCOUNT_ACTIONS.WRITE,
  ACCOUNT_ACTIONS.CREATE,
  ACCOUNT_ACTIONS.DELETE,
  ACCOUNT_ACTIONS.LIST,
  ACCOUNT_ACTIONS.UPDATE,
  ACCOUNT_ACTIONS.INVITE,
];
const OWNER_ACTIONS = [
  ...ADMIN_ACTIONS,
  ACCOUNT_ACTIONS.TRANSFER_OWNERSHIP,
];

const OMNI_ACTIONS = [
  ...OWNER_ACTIONS,
  ACCOUNT_ACTIONS.CREATE_ORGANIZATION,
  ACCOUNT_ACTIONS.CREATE_USER,
];

const roleToActions: Record<ACCOUNT_ROLE, ACCOUNT_ACTIONS[]> = {
  [ACCOUNT_ROLE.ADMIN]: ADMIN_ACTIONS,
  [ACCOUNT_ROLE.OWNER]: OWNER_ACTIONS,
  [ACCOUNT_ROLE.SERVICE_INGESTION]: [
    ACCOUNT_ACTIONS.READ,
    ACCOUNT_ACTIONS.WRITE,
  ],
  [ACCOUNT_ROLE.ANON]: [],
  [ACCOUNT_ROLE.REFRESH_CREDENTIALS_ONLY]: [
    ACCOUNT_ACTIONS.REFRESH_CREDENTIALS,
    ACCOUNT_ACTIONS.READ,
  ],
  [ACCOUNT_ROLE.OMNI]: OMNI_ACTIONS,
};

export function getAvailableActionsForRole(
  role: ACCOUNT_ROLE,
): Array<ACCOUNT_ACTIONS> {
  const actions = roleToActions[role];
  return actions ?? [];
}
