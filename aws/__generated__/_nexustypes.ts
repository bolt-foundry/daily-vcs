/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
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
  ProjectSettingsInput: { // input type
    additionalJson?: string | null; // String
    captionColor?: string | null; // String
    captionHighlightColor?: string | null; // String
    captionLines?: number | null; // Int
    captionWordsPerLine?: number | null; // Int
    censorShowFirstLetter?: boolean | null; // Boolean
    censorSwears?: boolean | null; // Boolean
    censorUseAsterisks?: boolean | null; // Boolean
    font?: string | null; // String
    largeMovementThresholdPct?: number | null; // Float
    minimumWords?: number | null; // Int
    ratio?: number | null; // Float
    showCaptions?: boolean | null; // Boolean
    showTrackingDebug?: boolean | null; // Boolean
    showWatermark?: boolean | null; // Boolean
    template?: string | null; // String
    useAutocropping?: boolean | null; // Boolean
    useTracking?: boolean | null; // Boolean
    watermarkLogo?: string | null; // String
    watermarkOpacity?: number | null; // Float
    watermarkPosition?: NexusGenEnums['PositionEnum'] | null; // PositionEnum
  }
}

export interface NexusGenEnums {
  AccountRole: "ADMIN" | "ANON" | "OWNER" | "REFRESH_CREDENTIALS_ONLY" | "SERVICE_INGESTION"
  ClipsStatusString: "COMPLETED" | "FAILED" | "IN_PROGRESS" | "NOT_STARTED"
  PositionEnum: "bottom_center" | "bottom_left" | "bottom_right" | "top_center" | "top_left" | "top_right" | "under_caption"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  BfAccount: { // root type
    displayName?: string | null; // String
    id?: string | null; // ID
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
  BfCurrentViewerAccessToken: { // root type
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfCurrentViewerAnon: { // root type
    role?: NexusGenEnums['AccountRole'] | null; // AccountRole
  }
  BfMediaGoogleDrive: { // root type
    googleFileId?: string | null; // String
    id: string; // ID!
  }
  BfOrganization: { // root type
    id: string; // ID!
    name?: string | null; // String
  }
  BfPerson: { // root type
    email?: string | null; // String
    id: string; // ID!
    name?: string | null; // String
  }
  Clip: { // root type
    description?: string | null; // String
    downloadUrl?: string | null; // String
    encodingStatus?: string | null; // String
    endTimeOverride?: number | null; // Float
    end_index?: number | null; // Int
    end_time?: number | null; // Float
    id?: string | null; // ID
    isStarred?: boolean | null; // Boolean
    manualCrop?: string | null; // String
    manualCropActive?: boolean | null; // Boolean
    projectId: string; // String!
    showCaptions?: boolean | null; // Boolean
    start_index?: number | null; // Int
    start_time?: number | null; // Float
    text?: string | null; // String
    title?: string | null; // String
  }
  ClipConnection: { // root type
    edges?: Array<NexusGenRootTypes['ClipEdge'] | null> | null; // [ClipEdge]
    nodes?: Array<NexusGenRootTypes['Clip'] | null> | null; // [Clip]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ClipEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Clip'] | null; // Clip
  }
  ClipsStatus: { // root type
    progress?: number | null; // Float
    status?: string | null; // String
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Person: { // root type
    email?: string | null; // String
    id?: string | null; // ID
    isSubscriptionValid?: boolean | null; // Boolean
    name?: string | null; // String
    stripeCustomerId?: string | null; // String
  }
  Project: { // root type
    clipsJson?: string | null; // String
    clipsLength?: number | null; // Int
    height?: number | null; // Int
    id?: string | null; // ID
    isReadyToView?: boolean | null; // Boolean
    language?: string | null; // String
    model?: string | null; // String
    name?: string | null; // String
    ratio?: number | null; // Float
    showCaptions?: boolean | null; // Boolean
    trackUploadUrl?: string | null; // String
    transcriptLength?: number | null; // Int
    transcriptUrl?: string | null; // String
    transcriptionJson?: string | null; // String
    videoUrl?: string | null; // String
    width?: number | null; // Int
  }
  ProjectConnection: { // root type
    edges?: Array<NexusGenRootTypes['ProjectEdge'] | null> | null; // [ProjectEdge]
    nodes?: Array<NexusGenRootTypes['Project'] | null> | null; // [Project]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProjectEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Project'] | null; // Project
  }
  Query: {};
  Settings: { // root type
    additionalJson?: string | null; // String
    captionColor?: string | null; // String
    captionHighlightColor?: string | null; // String
    captionLines?: number | null; // Int
    captionWordsPerLine?: number | null; // Int
    censorShowFirstLetter?: boolean | null; // Boolean
    censorSwears?: boolean | null; // Boolean
    censorUseAsterisks?: boolean | null; // Boolean
    font?: string | null; // String
    largeMovementThresholdPct?: number | null; // Float
    minimumWords?: number | null; // Int
    ratio?: number | null; // Float
    showCaptions?: boolean | null; // Boolean
    showTrackingDebug?: boolean | null; // Boolean
    showWatermark?: boolean | null; // Boolean
    template?: string | null; // String
    useAutocropping?: boolean | null; // Boolean
    useTracking?: boolean | null; // Boolean
    watermarkLogo?: string | null; // String
    watermarkOpacity?: number | null; // Float
    watermarkPosition?: NexusGenEnums['PositionEnum'] | null; // PositionEnum
  }
  Subscription: {};
  Transcript: { // root type
    id?: string | null; // ID
    transcriptLength?: number | null; // Int
    transcriptText?: string | null; // String
    words?: string | null; // String
    wordsJson?: string | null; // String
    wordsS3Url?: string | null; // String
  }
  TranscriptConnection: { // root type
    edges?: Array<NexusGenRootTypes['TranscriptEdge'] | null> | null; // [TranscriptEdge]
    nodes?: Array<NexusGenRootTypes['Transcript'] | null> | null; // [Transcript]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TranscriptEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Transcript'] | null; // Transcript
  }
  Word: { // root type
    confidence?: number | null; // Float
    end?: number | null; // Float
    id?: string | null; // ID
    punctuated_word?: string | null; // String
    speaker?: number | null; // Float
    speaker_confidence?: number | null; // Float
    start?: number | null; // Float
    word?: string | null; // String
  }
}

export interface NexusGenInterfaces {
  Actor: core.Discriminate<'BfOrganization', 'required'> | core.Discriminate<'BfPerson', 'required'>;
  BfCurrentViewer: core.Discriminate<'BfCurrentViewerAccessToken', 'required'> | core.Discriminate<'BfCurrentViewerAnon', 'required'>;
  BfMedia: core.Discriminate<'BfMediaGoogleDrive', 'required'>;
  BfNode: core.Discriminate<'BfMediaGoogleDrive', 'required'> | core.Discriminate<'BfOrganization', 'required'> | core.Discriminate<'BfPerson', 'required'>;
  Node: core.Discriminate<'BfAccount', 'optional'> | core.Discriminate<'Clip', 'optional'> | core.Discriminate<'Person', 'optional'> | core.Discriminate<'Project', 'optional'> | core.Discriminate<'Transcript', 'optional'> | core.Discriminate<'Word', 'optional'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  BfAccount: { // field return type
    displayName: string | null; // String
    id: string | null; // ID
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
  BfCurrentViewerAccessToken: { // field return type
    actor: NexusGenRootTypes['Actor'] | null; // Actor
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
  BfMediaGoogleDrive: { // field return type
    googleFileId: string | null; // String
    id: string; // ID!
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
  Clip: { // field return type
    description: string | null; // String
    downloadUrl: string | null; // String
    encodingStatus: string | null; // String
    endTimeOverride: number | null; // Float
    end_index: number | null; // Int
    end_time: number | null; // Float
    id: string | null; // ID
    isStarred: boolean | null; // Boolean
    manualCrop: string | null; // String
    manualCropActive: boolean | null; // Boolean
    projectId: string; // String!
    showCaptions: boolean | null; // Boolean
    start_index: number | null; // Int
    start_time: number | null; // Float
    text: string | null; // String
    title: string | null; // String
  }
  ClipConnection: { // field return type
    edges: Array<NexusGenRootTypes['ClipEdge'] | null> | null; // [ClipEdge]
    nodes: Array<NexusGenRootTypes['Clip'] | null> | null; // [Clip]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ClipEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Clip'] | null; // Clip
  }
  ClipsStatus: { // field return type
    progress: number | null; // Float
    status: string | null; // String
  }
  Mutation: { // field return type
    confirmEmail: NexusGenRootTypes['Person'] | null; // Person
    confirmForgotPassword: NexusGenRootTypes['Person'] | null; // Person
    createBfMediaGoogleDrive: NexusGenRootTypes['BfMediaGoogleDrive'] | null; // BfMediaGoogleDrive
    createClip: NexusGenRootTypes['Clip'] | null; // Clip
    createProject: NexusGenRootTypes['ProjectEdge'] | null; // ProjectEdge
    deleteProject: NexusGenRootTypes['Project'] | null; // Project
    encodeClip: NexusGenRootTypes['Clip'] | null; // Clip
    forgotPassword: boolean | null; // Boolean
    linkGoogleAccount: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    login: NexusGenRootTypes['Person'] | null; // Person
    loginWithGoogle: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    logout: NexusGenRootTypes['Person'] | null; // Person
    resendConfirmationCode: boolean | null; // Boolean
    signup: NexusGenRootTypes['Person'] | null; // Person
    switchAccount: NexusGenRootTypes['BfCurrentViewerAccessToken'] | null; // BfCurrentViewerAccessToken
    updateClip: NexusGenRootTypes['Clip'] | null; // Clip
    updatePersonSettings: NexusGenRootTypes['Person'] | null; // Person
    updateProject: NexusGenRootTypes['Project'] | null; // Project
    updateProjectSettings: NexusGenRootTypes['Project'] | null; // Project
    updateTranscriptWord: NexusGenRootTypes['Transcript'] | null; // Transcript
    word: NexusGenRootTypes['Word'] | null; // Word
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Person: { // field return type
    email: string | null; // String
    id: string | null; // ID
    isSubscriptionValid: boolean | null; // Boolean
    name: string | null; // String
    projects: NexusGenRootTypes['ProjectConnection'] | null; // ProjectConnection
    settings: NexusGenRootTypes['Settings'] | null; // Settings
    stripeCustomerId: string | null; // String
  }
  Project: { // field return type
    clips: NexusGenRootTypes['ClipConnection'] | null; // ClipConnection
    clipsJson: string | null; // String
    clipsLength: number | null; // Int
    clipsStatus: NexusGenRootTypes['ClipsStatus'] | null; // ClipsStatus
    effectiveSettings: NexusGenRootTypes['Settings'] | null; // Settings
    height: number | null; // Int
    id: string | null; // ID
    isReadyToView: boolean | null; // Boolean
    language: string | null; // String
    model: string | null; // String
    name: string | null; // String
    overriddenSettingsKeys: Array<string | null> | null; // [String]
    ratio: number | null; // Float
    showCaptions: boolean | null; // Boolean
    trackUploadUrl: string | null; // String
    transcriptLength: number | null; // Int
    transcriptUrl: string | null; // String
    transcriptionJson: string | null; // String
    transcripts: NexusGenRootTypes['TranscriptConnection'] | null; // TranscriptConnection
    url: string | null; // String
    videoUrl: string | null; // String
    width: number | null; // Int
  }
  ProjectConnection: { // field return type
    edges: Array<NexusGenRootTypes['ProjectEdge'] | null> | null; // [ProjectEdge]
    nodes: Array<NexusGenRootTypes['Project'] | null> | null; // [Project]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProjectEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Project'] | null; // Project
  }
  Query: { // field return type
    clip: NexusGenRootTypes['Clip'] | null; // Clip
    currentViewer: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    me: NexusGenRootTypes['Person'] | null; // Person
    node: NexusGenRootTypes['Node'] | null; // Node
    project: NexusGenRootTypes['Project'] | null; // Project
    transcript: NexusGenRootTypes['Transcript'] | null; // Transcript
  }
  Settings: { // field return type
    additionalJson: string | null; // String
    captionColor: string | null; // String
    captionHighlightColor: string | null; // String
    captionLines: number | null; // Int
    captionWordsPerLine: number | null; // Int
    censorShowFirstLetter: boolean | null; // Boolean
    censorSwears: boolean | null; // Boolean
    censorUseAsterisks: boolean | null; // Boolean
    font: string | null; // String
    largeMovementThresholdPct: number | null; // Float
    minimumWords: number | null; // Int
    ratio: number | null; // Float
    showCaptions: boolean | null; // Boolean
    showTrackingDebug: boolean | null; // Boolean
    showWatermark: boolean | null; // Boolean
    template: string | null; // String
    useAutocropping: boolean | null; // Boolean
    useTracking: boolean | null; // Boolean
    watermarkLogo: string | null; // String
    watermarkOpacity: number | null; // Float
    watermarkPosition: NexusGenEnums['PositionEnum'] | null; // PositionEnum
  }
  Subscription: { // field return type
    clip: NexusGenRootTypes['Clip'] | null; // Clip
    person: NexusGenRootTypes['Person'] | null; // Person
    project: NexusGenRootTypes['Project'] | null; // Project
  }
  Transcript: { // field return type
    id: string | null; // ID
    transcriptLength: number | null; // Int
    transcriptText: string | null; // String
    words: string | null; // String
    wordsJson: string | null; // String
    wordsS3Url: string | null; // String
  }
  TranscriptConnection: { // field return type
    edges: Array<NexusGenRootTypes['TranscriptEdge'] | null> | null; // [TranscriptEdge]
    nodes: Array<NexusGenRootTypes['Transcript'] | null> | null; // [Transcript]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TranscriptEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Transcript'] | null; // Transcript
  }
  Word: { // field return type
    confidence: number | null; // Float
    end: number | null; // Float
    id: string | null; // ID
    punctuated_word: string | null; // String
    speaker: number | null; // Float
    speaker_confidence: number | null; // Float
    start: number | null; // Float
    word: string | null; // String
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
  BfMedia: { // field return type
    id: string; // ID!
  }
  BfNode: { // field return type
    id: string; // ID!
  }
  Node: { // field return type
    id: string | null; // ID
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
  BfCurrentViewerAccessToken: { // field return type name
    actor: 'Actor'
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
  BfMediaGoogleDrive: { // field return type name
    googleFileId: 'String'
    id: 'ID'
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
  Clip: { // field return type name
    description: 'String'
    downloadUrl: 'String'
    encodingStatus: 'String'
    endTimeOverride: 'Float'
    end_index: 'Int'
    end_time: 'Float'
    id: 'ID'
    isStarred: 'Boolean'
    manualCrop: 'String'
    manualCropActive: 'Boolean'
    projectId: 'String'
    showCaptions: 'Boolean'
    start_index: 'Int'
    start_time: 'Float'
    text: 'String'
    title: 'String'
  }
  ClipConnection: { // field return type name
    edges: 'ClipEdge'
    nodes: 'Clip'
    pageInfo: 'PageInfo'
  }
  ClipEdge: { // field return type name
    cursor: 'String'
    node: 'Clip'
  }
  ClipsStatus: { // field return type name
    progress: 'Float'
    status: 'String'
  }
  Mutation: { // field return type name
    confirmEmail: 'Person'
    confirmForgotPassword: 'Person'
    createBfMediaGoogleDrive: 'BfMediaGoogleDrive'
    createClip: 'Clip'
    createProject: 'ProjectEdge'
    deleteProject: 'Project'
    encodeClip: 'Clip'
    forgotPassword: 'Boolean'
    linkGoogleAccount: 'BfCurrentViewer'
    login: 'Person'
    loginWithGoogle: 'BfCurrentViewerAccessToken'
    logout: 'Person'
    resendConfirmationCode: 'Boolean'
    signup: 'Person'
    switchAccount: 'BfCurrentViewerAccessToken'
    updateClip: 'Clip'
    updatePersonSettings: 'Person'
    updateProject: 'Project'
    updateProjectSettings: 'Project'
    updateTranscriptWord: 'Transcript'
    word: 'Word'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Person: { // field return type name
    email: 'String'
    id: 'ID'
    isSubscriptionValid: 'Boolean'
    name: 'String'
    projects: 'ProjectConnection'
    settings: 'Settings'
    stripeCustomerId: 'String'
  }
  Project: { // field return type name
    clips: 'ClipConnection'
    clipsJson: 'String'
    clipsLength: 'Int'
    clipsStatus: 'ClipsStatus'
    effectiveSettings: 'Settings'
    height: 'Int'
    id: 'ID'
    isReadyToView: 'Boolean'
    language: 'String'
    model: 'String'
    name: 'String'
    overriddenSettingsKeys: 'String'
    ratio: 'Float'
    showCaptions: 'Boolean'
    trackUploadUrl: 'String'
    transcriptLength: 'Int'
    transcriptUrl: 'String'
    transcriptionJson: 'String'
    transcripts: 'TranscriptConnection'
    url: 'String'
    videoUrl: 'String'
    width: 'Int'
  }
  ProjectConnection: { // field return type name
    edges: 'ProjectEdge'
    nodes: 'Project'
    pageInfo: 'PageInfo'
  }
  ProjectEdge: { // field return type name
    cursor: 'String'
    node: 'Project'
  }
  Query: { // field return type name
    clip: 'Clip'
    currentViewer: 'BfCurrentViewer'
    me: 'Person'
    node: 'Node'
    project: 'Project'
    transcript: 'Transcript'
  }
  Settings: { // field return type name
    additionalJson: 'String'
    captionColor: 'String'
    captionHighlightColor: 'String'
    captionLines: 'Int'
    captionWordsPerLine: 'Int'
    censorShowFirstLetter: 'Boolean'
    censorSwears: 'Boolean'
    censorUseAsterisks: 'Boolean'
    font: 'String'
    largeMovementThresholdPct: 'Float'
    minimumWords: 'Int'
    ratio: 'Float'
    showCaptions: 'Boolean'
    showTrackingDebug: 'Boolean'
    showWatermark: 'Boolean'
    template: 'String'
    useAutocropping: 'Boolean'
    useTracking: 'Boolean'
    watermarkLogo: 'String'
    watermarkOpacity: 'Float'
    watermarkPosition: 'PositionEnum'
  }
  Subscription: { // field return type name
    clip: 'Clip'
    person: 'Person'
    project: 'Project'
  }
  Transcript: { // field return type name
    id: 'ID'
    transcriptLength: 'Int'
    transcriptText: 'String'
    words: 'String'
    wordsJson: 'String'
    wordsS3Url: 'String'
  }
  TranscriptConnection: { // field return type name
    edges: 'TranscriptEdge'
    nodes: 'Transcript'
    pageInfo: 'PageInfo'
  }
  TranscriptEdge: { // field return type name
    cursor: 'String'
    node: 'Transcript'
  }
  Word: { // field return type name
    confidence: 'Float'
    end: 'Float'
    id: 'ID'
    punctuated_word: 'String'
    speaker: 'Float'
    speaker_confidence: 'Float'
    start: 'Float'
    word: 'String'
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
  BfMedia: { // field return type name
    id: 'ID'
  }
  BfNode: { // field return type name
    id: 'ID'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  BfPerson: {
    accounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    confirmEmail: { // args
      confirmationCode: string; // String!
      email: string; // String!
      password: string; // String!
    }
    confirmForgotPassword: { // args
      email: string; // String!
      newPassword: string; // String!
      verificationCode: string; // String!
    }
    createBfMediaGoogleDrive: { // args
      googleFileId: string; // String!
    }
    createClip: { // args
      description?: string | null; // String
      endTimeOverride?: number | null; // Float
      end_index: number; // Int!
      end_time: number; // Float!
      isStarred?: boolean | null; // Boolean
      manualCrop?: string | null; // String
      manualCropActive?: boolean | null; // Boolean
      project_id: string; // ID!
      start_index: number; // Int!
      start_time: number; // Float!
      text: string; // String!
      title: string; // String!
    }
    createProject: { // args
      height: number; // Int!
      language: string; // String!
      model: string; // String!
      name: string; // String!
      usesOriginPrivateFileSystem: boolean; // Boolean!
      width: number; // Int!
    }
    deleteProject: { // args
      id: string; // ID!
    }
    encodeClip: { // args
      id: string; // ID!
    }
    forgotPassword: { // args
      email: string; // String!
    }
    linkGoogleAccount: { // args
      code: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    loginWithGoogle: { // args
      credential: string; // String!
    }
    resendConfirmationCode: { // args
      email: string; // String!
    }
    signup: { // args
      email: string; // String!
      intendedSubscriptionTier: string; // String!
      name: string; // String!
      password: string; // String!
    }
    switchAccount: { // args
      accountId: string; // ID!
    }
    updateClip: { // args
      description?: string | null; // String
      endTimeOverride?: number | null; // Float
      end_index?: number | null; // Int
      end_time?: number | null; // Float
      id: string; // ID!
      isStarred?: boolean | null; // Boolean
      manualCrop?: string | null; // String
      manualCropActive?: boolean | null; // Boolean
      start_index?: number | null; // Int
      start_time?: number | null; // Float
      text?: string | null; // String
      title?: string | null; // String
      transcriptId?: string | null; // ID
      wordsToUpdate?: string | null; // String
    }
    updatePersonSettings: { // args
      settings: NexusGenInputs['ProjectSettingsInput']; // ProjectSettingsInput!
    }
    updateProject: { // args
      height?: number | null; // Int
      id: string; // ID!
      language?: string | null; // String
      model?: string | null; // String
      name?: string | null; // String
      setRatio?: number | null; // Float
      showCaptions?: boolean | null; // Boolean
      usesOriginPrivateFileSystem?: boolean | null; // Boolean
      width?: number | null; // Int
    }
    updateProjectSettings: { // args
      id: string; // ID!
      settings: NexusGenInputs['ProjectSettingsInput']; // ProjectSettingsInput!
    }
    updateTranscriptWord: { // args
      confidence?: number | null; // Float
      end?: number | null; // Float
      id: string; // ID!
      punctuated_word?: string | null; // String
      speaker?: number | null; // Float
      speaker_confidence?: number | null; // Float
      start: number; // Float!
      word: string; // String!
    }
    word: { // args
      id: string; // ID!
    }
  }
  Person: {
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Project: {
    clips: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    transcripts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    clip: { // args
      id: string; // ID!
    }
    node: { // args
      id: string; // ID!
    }
    project: { // args
      id: string; // ID!
    }
    transcript: { // args
      id: string; // ID!
    }
  }
  Subscription: {
    clip: { // args
      id: string; // ID!
    }
    person: { // args
      id: string; // ID!
    }
    project: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Actor: "BfOrganization" | "BfPerson"
  BfCurrentViewer: "BfCurrentViewerAccessToken" | "BfCurrentViewerAnon"
  BfMedia: "BfMediaGoogleDrive"
  BfNode: "BfMediaGoogleDrive" | "BfOrganization" | "BfPerson"
  Node: "BfAccount" | "Clip" | "Person" | "Project" | "Transcript" | "Word"
}

export interface NexusGenTypeInterfaces {
  BfAccount: "Node"
  BfCurrentViewerAccessToken: "BfCurrentViewer"
  BfCurrentViewerAnon: "BfCurrentViewer"
  BfMediaGoogleDrive: "BfMedia" | "BfNode"
  BfOrganization: "Actor" | "BfNode"
  BfPerson: "Actor" | "BfNode"
  Clip: "Node"
  Person: "Node"
  Project: "Node"
  Transcript: "Node"
  Word: "Node"
  Actor: "BfNode"
  BfMedia: "BfNode"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Node";

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