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
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> & { count?: connectionPluginCore.ConnectionFieldResolver<TypeName, FieldName, "count"> }
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
    count?: number | null; // Int
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
  BfClipReview: { // root type
    mediaUrl?: NexusGenScalars['Url'] | null; // Url
    title?: string | null; // String
  }
  BfClipReviewConnection: { // root type
    count?: number | null; // Int
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
  BfGoogleDriveFolder: { // root type
    name?: string | null; // String
  }
  BfGoogleDriveFolderConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfGoogleDriveFolderEdge'] | null> | null; // [BfGoogleDriveFolderEdge]
    nodes?: Array<NexusGenRootTypes['BfGoogleDriveFolder'] | null> | null; // [BfGoogleDriveFolder]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfGoogleDriveFolderEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfGoogleDriveFolder'] | null; // BfGoogleDriveFolder
  }
  BfMedia: { // root type
    filename?: string | null; // String
  }
  BfMediaConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfMediaEdge'] | null> | null; // [BfMediaEdge]
    nodes?: Array<NexusGenRootTypes['BfMedia'] | null> | null; // [BfMedia]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfMediaEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfMedia'] | null; // BfMedia
  }
  BfMediaTranscript: { // root type
    filename?: string | null; // String
    words?: string | null; // String
  }
  BfMediaTranscriptConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfMediaTranscriptEdge'] | null> | null; // [BfMediaTranscriptEdge]
    nodes?: Array<NexusGenRootTypes['BfMediaTranscript'] | null> | null; // [BfMediaTranscript]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfMediaTranscriptEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfMediaTranscript'] | null; // BfMediaTranscript
  }
  BfOrganization: { // root type
    id: string; // ID!
    name?: string | null; // String
  }
  BfOrganizationConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfOrganizationEdge'] | null> | null; // [BfOrganizationEdge]
    nodes?: Array<NexusGenRootTypes['BfOrganization'] | null> | null; // [BfOrganization]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfOrganizationEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
  }
  BfPerson: { // root type
    email?: string | null; // String
    name?: string | null; // String
  }
  IBfCurrentViewerInternalAdmin: { // root type
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  PlaygroundMutationPayload: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
  Query: {};
  SearchMutationPayload: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
  SubmitContactFormPayload: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
  }
}

export interface NexusGenInterfaces {
  BfCurrentViewer: core.Discriminate<'BfCurrentViewerAccessToken', 'required'> | core.Discriminate<'BfCurrentViewerAnon', 'required'> | core.Discriminate<'IBfCurrentViewerInternalAdmin', 'required'>;
  BfNode: core.Discriminate<'BfAccount', 'required'> | core.Discriminate<'BfClip', 'required'> | core.Discriminate<'BfClipReview', 'required'> | core.Discriminate<'BfGoogleDriveFolder', 'required'> | core.Discriminate<'BfMedia', 'required'> | core.Discriminate<'BfMediaTranscript', 'required'> | core.Discriminate<'BfOrganization', 'required'> | core.Discriminate<'BfPerson', 'required'>;
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
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfAccountEdge'] | null> | null; // [BfAccountEdge]
    nodes: Array<NexusGenRootTypes['BfAccount'] | null> | null; // [BfAccount]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfAccountEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfAccount'] | null; // BfAccount
  }
  BfClip: { // field return type
    id: string; // ID!
    title: string | null; // String
  }
  BfClipReview: { // field return type
    id: string; // ID!
    mediaUrl: NexusGenScalars['Url'] | null; // Url
    title: string | null; // String
  }
  BfClipReviewConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfClipReviewEdge'] | null> | null; // [BfClipReviewEdge]
    nodes: Array<NexusGenRootTypes['BfClipReview'] | null> | null; // [BfClipReview]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfClipReviewEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfClipReview'] | null; // BfClipReview
  }
  BfCurrentViewerAccessToken: { // field return type
    organization: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfCurrentViewerAnon: { // field return type
    organization: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfGoogleDriveFolder: { // field return type
    id: string; // ID!
    name: string | null; // String
  }
  BfGoogleDriveFolderConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfGoogleDriveFolderEdge'] | null> | null; // [BfGoogleDriveFolderEdge]
    nodes: Array<NexusGenRootTypes['BfGoogleDriveFolder'] | null> | null; // [BfGoogleDriveFolder]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfGoogleDriveFolderEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfGoogleDriveFolder'] | null; // BfGoogleDriveFolder
  }
  BfMedia: { // field return type
    filename: string | null; // String
    id: string; // ID!
    transcripts: NexusGenRootTypes['BfMediaTranscriptConnection'] | null; // BfMediaTranscriptConnection
  }
  BfMediaConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfMediaEdge'] | null> | null; // [BfMediaEdge]
    nodes: Array<NexusGenRootTypes['BfMedia'] | null> | null; // [BfMedia]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfMediaEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfMedia'] | null; // BfMedia
  }
  BfMediaTranscript: { // field return type
    filename: string | null; // String
    id: string; // ID!
    words: string | null; // String
  }
  BfMediaTranscriptConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfMediaTranscriptEdge'] | null> | null; // [BfMediaTranscriptEdge]
    nodes: Array<NexusGenRootTypes['BfMediaTranscript'] | null> | null; // [BfMediaTranscript]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfMediaTranscriptEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfMediaTranscript'] | null; // BfMediaTranscript
  }
  BfOrganization: { // field return type
    googleDriveFolders: NexusGenRootTypes['BfGoogleDriveFolderConnection'] | null; // BfGoogleDriveFolderConnection
    id: string; // ID!
    media: NexusGenRootTypes['BfMediaConnection'] | null; // BfMediaConnection
    name: string | null; // String
    reviewableClips: NexusGenRootTypes['BfClipReviewConnection'] | null; // BfClipReviewConnection
  }
  BfOrganizationConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfOrganizationEdge'] | null> | null; // [BfOrganizationEdge]
    nodes: Array<NexusGenRootTypes['BfOrganization'] | null> | null; // [BfOrganization]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfOrganizationEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
  }
  BfPerson: { // field return type
    accounts: NexusGenRootTypes['BfAccountConnection'] | null; // BfAccountConnection
    email: string | null; // String
    googleAuthAccessToken: string | null; // String
    id: string; // ID!
    name: string | null; // String
  }
  IBfCurrentViewerInternalAdmin: { // field return type
    organization: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
    person: NexusGenRootTypes['BfPerson'] | null; // BfPerson
    role: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  Mutation: { // field return type
    createTranscript: NexusGenRootTypes['BfMediaTranscript'] | null; // BfMediaTranscript
    deleteTranscript: NexusGenRootTypes['BfMediaTranscript'] | null; // BfMediaTranscript
    linkAdvancedGoogleAuth: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    loginWithGoogle: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    logout: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    pickGoogleDriveFolder: NexusGenRootTypes['BfGoogleDriveFolder'] | null; // BfGoogleDriveFolder
    playgroundMutation: NexusGenRootTypes['PlaygroundMutationPayload'] | null; // PlaygroundMutationPayload
    readTextFile: string | null; // String
    searchMutation: NexusGenRootTypes['SearchMutationPayload'] | null; // SearchMutationPayload
    submitContactForm: NexusGenRootTypes['SubmitContactFormPayload'] | null; // SubmitContactFormPayload
    switchAccount: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    updateTranscript: NexusGenRootTypes['BfMediaTranscript'] | null; // BfMediaTranscript
    upsertClip: NexusGenRootTypes['BfClip'] | null; // BfClip
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  PlaygroundMutationPayload: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
  Query: { // field return type
    currentViewer: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    node: NexusGenRootTypes['BfNode'] | null; // BfNode
    organizations: NexusGenRootTypes['BfOrganizationConnection'] | null; // BfOrganizationConnection
  }
  SearchMutationPayload: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
  SubmitContactFormPayload: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
  }
  BfCurrentViewer: { // field return type
    organization: NexusGenRootTypes['BfOrganization'] | null; // BfOrganization
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
    count: 'Int'
    edges: 'BfAccountEdge'
    nodes: 'BfAccount'
    pageInfo: 'PageInfo'
  }
  BfAccountEdge: { // field return type name
    cursor: 'String'
    node: 'BfAccount'
  }
  BfClip: { // field return type name
    id: 'ID'
    title: 'String'
  }
  BfClipReview: { // field return type name
    id: 'ID'
    mediaUrl: 'Url'
    title: 'String'
  }
  BfClipReviewConnection: { // field return type name
    count: 'Int'
    edges: 'BfClipReviewEdge'
    nodes: 'BfClipReview'
    pageInfo: 'PageInfo'
  }
  BfClipReviewEdge: { // field return type name
    cursor: 'String'
    node: 'BfClipReview'
  }
  BfCurrentViewerAccessToken: { // field return type name
    organization: 'BfOrganization'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  BfCurrentViewerAnon: { // field return type name
    organization: 'BfOrganization'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  BfGoogleDriveFolder: { // field return type name
    id: 'ID'
    name: 'String'
  }
  BfGoogleDriveFolderConnection: { // field return type name
    count: 'Int'
    edges: 'BfGoogleDriveFolderEdge'
    nodes: 'BfGoogleDriveFolder'
    pageInfo: 'PageInfo'
  }
  BfGoogleDriveFolderEdge: { // field return type name
    cursor: 'String'
    node: 'BfGoogleDriveFolder'
  }
  BfMedia: { // field return type name
    filename: 'String'
    id: 'ID'
    transcripts: 'BfMediaTranscriptConnection'
  }
  BfMediaConnection: { // field return type name
    count: 'Int'
    edges: 'BfMediaEdge'
    nodes: 'BfMedia'
    pageInfo: 'PageInfo'
  }
  BfMediaEdge: { // field return type name
    cursor: 'String'
    node: 'BfMedia'
  }
  BfMediaTranscript: { // field return type name
    filename: 'String'
    id: 'ID'
    words: 'String'
  }
  BfMediaTranscriptConnection: { // field return type name
    count: 'Int'
    edges: 'BfMediaTranscriptEdge'
    nodes: 'BfMediaTranscript'
    pageInfo: 'PageInfo'
  }
  BfMediaTranscriptEdge: { // field return type name
    cursor: 'String'
    node: 'BfMediaTranscript'
  }
  BfOrganization: { // field return type name
    googleDriveFolders: 'BfGoogleDriveFolderConnection'
    id: 'ID'
    media: 'BfMediaConnection'
    name: 'String'
    reviewableClips: 'BfClipReviewConnection'
  }
  BfOrganizationConnection: { // field return type name
    count: 'Int'
    edges: 'BfOrganizationEdge'
    nodes: 'BfOrganization'
    pageInfo: 'PageInfo'
  }
  BfOrganizationEdge: { // field return type name
    cursor: 'String'
    node: 'BfOrganization'
  }
  BfPerson: { // field return type name
    accounts: 'BfAccountConnection'
    email: 'String'
    googleAuthAccessToken: 'String'
    id: 'ID'
    name: 'String'
  }
  IBfCurrentViewerInternalAdmin: { // field return type name
    organization: 'BfOrganization'
    person: 'BfPerson'
    role: 'AccountRole'
  }
  Mutation: { // field return type name
    createTranscript: 'BfMediaTranscript'
    deleteTranscript: 'BfMediaTranscript'
    linkAdvancedGoogleAuth: 'BfCurrentViewer'
    loginWithGoogle: 'BfCurrentViewerAccessToken'
    logout: 'BfCurrentViewer'
    pickGoogleDriveFolder: 'BfGoogleDriveFolder'
    playgroundMutation: 'PlaygroundMutationPayload'
    readTextFile: 'String'
    searchMutation: 'SearchMutationPayload'
    submitContactForm: 'SubmitContactFormPayload'
    switchAccount: 'BfCurrentViewerAccessToken'
    updateTranscript: 'BfMediaTranscript'
    upsertClip: 'BfClip'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  PlaygroundMutationPayload: { // field return type name
    message: 'String'
    success: 'Boolean'
  }
  Query: { // field return type name
    currentViewer: 'BfCurrentViewer'
    node: 'BfNode'
    organizations: 'BfOrganizationConnection'
  }
  SearchMutationPayload: { // field return type name
    message: 'String'
    success: 'Boolean'
  }
  SubmitContactFormPayload: { // field return type name
    message: 'String'
    success: 'Boolean'
  }
  BfCurrentViewer: { // field return type name
    organization: 'BfOrganization'
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
  BfMedia: {
    transcripts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  BfOrganization: {
    googleDriveFolders: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    media: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    reviewableClips: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
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
    createTranscript: { // args
      filename: string; // String!
      words: string; // String!
    }
    deleteTranscript: { // args
      id: string; // String!
    }
    linkAdvancedGoogleAuth: { // args
      code: string; // String!
    }
    loginWithGoogle: { // args
      credential: string; // String!
    }
    pickGoogleDriveFolder: { // args
      folderId?: string | null; // String
      name?: string | null; // String
    }
    playgroundMutation: { // args
      input: string; // String!
      suggestedModel?: string | null; // String
    }
    readTextFile: { // args
      file: NexusGenScalars['File']; // File!
    }
    searchMutation: { // args
      input: string; // String!
      suggestedModel?: string | null; // String
    }
    submitContactForm: { // args
      input: NexusGenInputs['SubmitContactFormInput']; // SubmitContactFormInput!
    }
    switchAccount: { // args
      accountId: string; // ID!
    }
    updateTranscript: { // args
      filename?: string | null; // String
      id: string; // String!
      words?: string | null; // String
    }
    upsertClip: { // args
      file: NexusGenScalars['File']; // File!
      originalClipId: string; // String!
      title?: string | null; // String
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
    organizations: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BfCurrentViewer: "BfCurrentViewerAccessToken" | "BfCurrentViewerAnon" | "IBfCurrentViewerInternalAdmin"
  BfNode: "BfAccount" | "BfClip" | "BfClipReview" | "BfGoogleDriveFolder" | "BfMedia" | "BfMediaTranscript" | "BfOrganization" | "BfPerson"
}

export interface NexusGenTypeInterfaces {
  BfAccount: "BfNode"
  BfClip: "BfNode"
  BfClipReview: "BfNode"
  BfCurrentViewerAccessToken: "BfCurrentViewer"
  BfCurrentViewerAnon: "BfCurrentViewer"
  BfGoogleDriveFolder: "BfNode"
  BfMedia: "BfNode"
  BfMediaTranscript: "BfNode"
  BfOrganization: "BfNode"
  BfPerson: "BfNode"
  IBfCurrentViewerInternalAdmin: "BfCurrentViewer"
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