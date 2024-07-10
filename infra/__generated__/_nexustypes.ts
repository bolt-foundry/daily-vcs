/* @generated */
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "File";
    /**
     * a fully qualified URL
     */
    url<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Url";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "File";
    /**
     * a fully qualified URL
     */
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Url";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  SubmitContactFormInput: { // input type
    company?: string | null; // String
    email: string; // String!
    message: string; // String!
    name: string; // String!
    phone?: string | null; // String
  }
}

export interface NexusGenEnums {
  AccountRole: "ADMIN" | "ANON" | "OMNI" | "OWNER" | "REFRESH_CREDENTIALS_ONLY" | "SERVICE_INGESTION"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  File: File
  Url: string
}

export interface NexusGenObjects {
  BfAccount: { // root type
    displayName?: string | null; // String
    organizationBfGid?: string | null; // ID
    personBfGid?: string | null; // ID
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfAccountConnection: { // root type
    edges?: Array<NexusGenRootTypes['BfAccountEdge'] | null> | null; // [BfAccountEdge]
    nodes?: Array<NexusGenRootTypes['BfAccount'] | null> | null; // [BfAccount]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfAccountEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfAccount'] | null; // BfAccount
  }
  BfClip: { // root type
    title?: string | null; // String
  }
  BfClipConnection: { // root type
    edges?: Array<NexusGenRootTypes['BfClipEdge'] | null> | null; // [BfClipEdge]
    nodes?: Array<NexusGenRootTypes['BfClip'] | null> | null; // [BfClip]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfClipEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfClip'] | null; // BfClip
  }
  BfClipReview: { // root type
    mediaUrl?: NexusGenScalars['Url'] | null; // Url
    title?: string | null; // String
  }
  BfClipReviewConnection: { // root type
    edges?: Array<NexusGenRootTypes['BfClipReviewEdge'] | null> | null; // [BfClipReviewEdge]
    nodes?: Array<NexusGenRootTypes['BfClipReview'] | null> | null; // [BfClipReview]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfClipReviewEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfClipReview'] | null; // BfClipReview
  }
  BfCurrentViewerAccessToken: { // root type
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfCurrentViewerAnon: { // root type
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfOrganization: { // root type
    name?: string | null; // String
  }
  BfPerson: { // root type
    email?: string | null; // String
    name?: string | null; // String
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  SubmitContactFormPayload: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
}

export interface NexusGenInterfaces {
  Actor: core.Discriminate<'BfOrganization', 'required'> | core.Discriminate<'BfPerson', 'required'>;
  BfCurrentViewer: core.Discriminate<'BfCurrentViewerAccessToken', 'required'> | core.Discriminate<'BfCurrentViewerAnon', 'required'>;
  BfNode: core.Discriminate<'BfAccount', 'required'> | core.Discriminate<'BfClip', 'required'> | core.Discriminate<'BfClipReview', 'required'> | core.Discriminate<'BfOrganization', 'required'> | core.Discriminate<'BfPerson', 'required'>;
  IBfGraphQLNode: any;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  BfAccount: { // field return type
    displayName: string | null; // String
    id: string; // ID!
    organization: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
    organizationBfGid: string | null; // ID
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    personBfGid: string | null; // ID
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfAccountConnection: { // field return type
    edges: Array<NexusGenRootTypes['BfAccountEdge'] | null> | null; // [BfAccountEdge]
    nodes: Array<NexusGenRootTypes['BfAccount'] | null> | null; // [BfAccount]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfAccountEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfAccount'] | null; // BfAccount
  }
  BfClip: { // field return type
    clipReviews: NexusGenRootTypes['BfClipReviewConnection'] | null; // BfClipReviewConnection
    id: string; // ID!
    title: string | null; // String
  }
  BfClipConnection: { // field return type
    edges: Array<NexusGenRootTypes['BfClipEdge'] | null> | null; // [BfClipEdge]
    nodes: Array<NexusGenRootTypes['BfClip'] | null> | null; // [BfClip]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfClipEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfClip'] | null; // BfClip
  }
  BfClipReview: { // field return type
    id: string; // ID!
    mediaUrl: NexusGenScalars['Url'] | null; // Url
    title: string | null; // String
  }
  BfClipReviewConnection: { // field return type
    edges: Array<NexusGenRootTypes['BfClipReviewEdge'] | null> | null; // [BfClipReviewEdge]
    nodes: Array<NexusGenRootTypes['BfClipReview'] | null> | null; // [BfClipReview]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfClipReviewEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfClipReview'] | null; // BfClipReview
  }
  BfCurrentViewerAccessToken: { // field return type
    actor: NexusGenRootTypes['Actor'] | null; // Actor
    clips: NexusGenRootTypes['BfClipConnection'] | null; // BfClipConnection
    googleAccessToken: string | null; // String
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfCurrentViewerAnon: { // field return type
    actor: NexusGenRootTypes['Actor'] | null; // Actor
    googleAccessToken: string | null; // String
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfOrganization: { // field return type
    id: string; // ID!
    name: string | null; // String
  }
  BfPerson: { // field return type
    accounts: NexusGenRootTypes['BfAccountConnection'] | null; // BfAccountConnection
    email: string | null; // String
    id: string; // ID!
    name: string | null; // String
  }
  Mutation: { // field return type
    linkGoogleAccount: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    loginWithGoogle: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    logout: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    readTextFile: string | null; // String
    submitContactForm: NexusGenRootTypes['SubmitContactFormPayload'] | null; // SubmitContactFormPayload
    switchAccount: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    upsertClip: NexusGenRootTypes['BfClip'] | null; // BfClip
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    currentViewer: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    node: NexusGenRootTypes['BfNode'] | null; // BfNode
  }
  SubmitContactFormPayload: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
  Actor: { // field return type
    id: string; // ID!
    name: string | null; // String
  }
  BfCurrentViewer: { // field return type
    actor: NexusGenRootTypes['Actor'] | null; // Actor
    googleAccessToken: string | null; // String
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfNode: { // field return type
    id: string; // ID!
  }
  IBfGraphQLNode: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenFieldTypeNames {
  BfAccount: { // field return type name
    displayName: 'String'
    id: 'ID'
    organization: 'BfOrganization'
    organizationBfGid: 'ID'
    person: 'BfPerson'
    personBfGid: 'ID'
    role: 'AccountRole'
  }
  BfAccountConnection: { // field return type name
    edges: 'BfAccountEdge'
    nodes: 'BfAccount'
    pageInfo: 'PageInfo'
  }
  BfAccountEdge: { // field return type name
    cursor: 'String'
    node: 'BfAccount'
  }
  BfClip: { // field return type name
    clipReviews: 'BfClipReviewConnection'
    id: 'ID'
    title: 'String'
  }
  BfClipConnection: { // field return type name
    edges: 'BfClipEdge'
    nodes: 'BfClip'
    pageInfo: 'PageInfo'
  }
  BfClipEdge: { // field return type name
    cursor: 'String'
    node: 'BfClip'
  }
  BfClipReview: { // field return type name
    id: 'ID'
    mediaUrl: 'Url'
    title: 'String'
  }
  BfClipReviewConnection: { // field return type name
    edges: 'BfClipReviewEdge'
    nodes: 'BfClipReview'
    pageInfo: 'PageInfo'
  }
  BfClipReviewEdge: { // field return type name
    cursor: 'String'
    node: 'BfClipReview'
  }
  BfCurrentViewerAccessToken: { // field return type name
    actor: 'Actor'
    clips: 'BfClipConnection'
    googleAccessToken: 'String'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  BfCurrentViewerAnon: { // field return type name
    actor: 'Actor'
    googleAccessToken: 'String'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  BfOrganization: { // field return type name
    id: 'ID'
    name: 'String'
  }
  BfPerson: { // field return type name
    accounts: 'BfAccountConnection'
    email: 'String'
    id: 'ID'
    name: 'String'
  }
  Mutation: { // field return type name
    linkGoogleAccount: 'BfCurrentViewer'
    loginWithGoogle: 'BfCurrentViewerAccessToken'
    logout: 'BfCurrentViewer'
    readTextFile: 'String'
    submitContactForm: 'SubmitContactFormPayload'
    switchAccount: 'BfCurrentViewerAccessToken'
    upsertClip: 'BfClip'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    currentViewer: 'BfCurrentViewer'
    node: 'BfNode'
  }
  SubmitContactFormPayload: { // field return type name
    message: 'String'
    success: 'Boolean'
  }
  Actor: { // field return type name
    id: 'ID'
    name: 'String'
  }
  BfCurrentViewer: { // field return type name
    actor: 'Actor'
    googleAccessToken: 'String'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  BfNode: { // field return type name
    id: 'ID'
  }
  IBfGraphQLNode: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  BfClip: {
    clipReviews: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      reviewable: boolean | null; // Boolean
    }
  }
  BfCurrentViewerAccessToken: {
    clips: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      reviewable: boolean | null; // Boolean
    }
  }
  BfPerson: {
    accounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    linkGoogleAccount: { // args
      code: string; // String!
    }
    loginWithGoogle: { // args
      credential: string; // String!
    }
    readTextFile: { // args
      file: NexusGenScalars['File']; // File!
    }
    submitContactForm: { // args
      input: NexusGenInputs['SubmitContactFormInput']; // SubmitContactFormInput!
    }
    switchAccount: { // args
      accountId: string; // ID!
    }
    upsertClip: { // args
      originalClipId?: string | null; // String
      title?: string | null; // String
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Actor: "BfOrganization" | "BfPerson"
  BfCurrentViewer: "BfCurrentViewerAccessToken" | "BfCurrentViewerAnon"
  BfNode: "BfAccount" | "BfClip" | "BfClipReview" | "BfOrganization" | "BfPerson"
}

export interface NexusGenTypeInterfaces {
  BfAccount: "BfNode"
  BfClip: "BfNode"
  BfClipReview: "BfNode"
  BfCurrentViewerAccessToken: "BfCurrentViewer"
  BfCurrentViewerAnon: "BfCurrentViewer"
  BfOrganization: "Actor" | "BfNode"
  BfPerson: "Actor" | "BfNode"
  Actor: "BfNode"
  IBfGraphQLNode: "BfNode"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    __typename: true
    isTypeOf: false
    resolveType: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}