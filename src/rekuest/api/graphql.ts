import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  AnyInput: any;
  DateTime: any;
  GenericScalar: any;
  Identifier: any;
  QString: any;
  SearchQuery: any;
  UUID: any;
};

export type Agent = {
  __typename?: 'Agent';
  /** If this Agent is blocked, it will not be used for provision, nor will it be able to provide */
  blocked: Scalars['Boolean'];
  clientId: Scalars['String'];
  id: Scalars['ID'];
  installedAt: Scalars['DateTime'];
  instanceId: Scalars['String'];
  /** This providers Name */
  name: Scalars['String'];
  /** The Instance this Agent is running on */
  onInstance: Scalars['String'];
  /** Is this Provision bound to a certain Agent? */
  provisions: Array<Provision>;
  /** The provide might be limited to a instance like ImageJ belonging to a specific person. Is nullable for backend users */
  registry?: Maybe<Registry>;
  /** The Status of this Agent */
  status: AgentStatus;
  /** The associated registry for this Template */
  templates: Array<Template>;
  /** The Channel we are listening to */
  unique: Scalars['String'];
};

export type AgentEvent = {
  __typename?: 'AgentEvent';
  created?: Maybe<Agent>;
  deleted?: Maybe<Scalars['ID']>;
  updated?: Maybe<Agent>;
};

/** An enumeration. */
export enum AgentStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Disconnected */
  Disconnected = 'DISCONNECTED',
  /** Just kicked */
  Kicked = 'KICKED',
  /** Complete Vanilla Scenario after a forced restart of */
  Vanilla = 'VANILLA'
}

/** An enumeration. */
export enum AgentStatusInput {
  /** Active */
  Active = 'ACTIVE',
  /** Disconnected */
  Disconnected = 'DISCONNECTED',
  /** Just kicked */
  Kicked = 'KICKED',
  /** Complete Vanilla Scenario after a forced restart of */
  Vanilla = 'VANILLA'
}

export type Annotation = {
  /** The name of the annotation */
  kind?: Maybe<Scalars['String']>;
};

export type AnnotationInput = {
  /** The annotation of this annotation */
  annotations?: InputMaybe<Array<InputMaybe<AnnotationInput>>>;
  /** The value of this annotation */
  args?: InputMaybe<Scalars['String']>;
  /** The attribute to check */
  attribute?: InputMaybe<Scalars['String']>;
  /** A hook for the app to call */
  hook?: InputMaybe<Scalars['String']>;
  /** The kind of annotation */
  kind: AnnotationKind;
  /** The max of this annotation (Value Range) */
  max?: InputMaybe<Scalars['Float']>;
  /** The min of this annotation (Value Range) */
  min?: InputMaybe<Scalars['Float']>;
  /** The name of this annotation */
  name?: InputMaybe<Scalars['String']>;
  /** The predicate of this annotation (IsPredicate) */
  predicate?: InputMaybe<IsPredicateType>;
};

/** The kind of annotation */
export enum AnnotationKind {
  AttributePredicate = 'AttributePredicate',
  CustomAnnotation = 'CustomAnnotation',
  IsPredicate = 'IsPredicate',
  ValueRange = 'ValueRange'
}

export type AppRepository = Repository & {
  __typename?: 'AppRepository';
  /** The Associated App */
  app?: Maybe<LokApp>;
  /** Id of the Repository */
  id: Scalars['ID'];
  installedAt: Scalars['DateTime'];
  /** The Name of the Repository */
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  type: RepositoryType;
  /** A world-unique identifier */
  unique: Scalars['String'];
};


export type AppRepositoryNodesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};

export type Assignation = {
  __typename?: 'Assignation';
  /** The app is this assignation */
  app?: Maybe<LokApp>;
  args?: Maybe<Array<Maybe<Scalars['Any']>>>;
  /** The Assignations parent */
  children: Array<Assignation>;
  context?: Maybe<Scalars['GenericScalar']>;
  createdAt: Scalars['DateTime'];
  /** The creator is this assignation */
  creator?: Maybe<User>;
  id: Scalars['ID'];
  kwargs?: Maybe<Scalars['GenericScalar']>;
  log?: Maybe<Array<Maybe<AssignationLog>>>;
  /** The Assignations parent */
  parent?: Maybe<Assignation>;
  /** The progress of this assignation */
  progress?: Maybe<Scalars['Int']>;
  /** Which Provision did we end up being assigned to */
  provision?: Maybe<Provision>;
  /** The Unique identifier of this Assignation considering its parent */
  reference: Scalars['String'];
  /** Which reservation are we assigning to */
  reservation?: Maybe<Reservation>;
  returns?: Maybe<Array<Maybe<Scalars['Any']>>>;
  /** Current lifecycle of Assignation */
  status: AssignationStatus;
  /** Clear Text status of the Assignation as for now */
  statusmessage: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  /** This Assignation app */
  waiter?: Maybe<Waiter>;
};


export type AssignationLogArgs = {
  createdAt?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  level?: InputMaybe<LogLevelInput>;
  o?: InputMaybe<Scalars['String']>;
};

export type AssignationEvent = {
  __typename?: 'AssignationEvent';
  log?: Maybe<AssignationLogEvent>;
};

export type AssignationLog = {
  __typename?: 'AssignationLog';
  /** The reservation this log item belongs to */
  assignation: Assignation;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level: AssignationLogLevel;
  message?: Maybe<Scalars['String']>;
};

export type AssignationLogEvent = {
  __typename?: 'AssignationLogEvent';
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AssignationLogLevel {
  /** Cancel Level */
  Cancel = 'CANCEL',
  /** CRITICAL Level */
  Critical = 'CRITICAL',
  /** DEBUG Level */
  Debug = 'DEBUG',
  /** Done Level */
  Done = 'DONE',
  /** ERROR Level */
  Error = 'ERROR',
  /** Event Level (only handled by plugins) */
  Event = 'EVENT',
  /** INFO Level */
  Info = 'INFO',
  /** YIELD Level */
  Return = 'RETURN',
  /** WARN Level */
  Warn = 'WARN',
  /** YIELD Level */
  Yield = 'YIELD'
}

/** An enumeration. */
export enum AssignationStatus {
  /** Acknowledged */
  Acknowledged = 'ACKNOWLEDGED',
  /** Was able to assign to a pod */
  Assigned = 'ASSIGNED',
  /** Bound */
  Bound = 'BOUND',
  /** Assinment is beeing cancelled */
  Cancel = 'CANCEL',
  /** Cancelling (Assingment is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Assignment has been cancelled. */
  Cancelled = 'CANCELLED',
  /** Critical Error (No Retries available) */
  Critical = 'CRITICAL',
  /** Denied (Assingment was rejected) */
  Denied = 'DENIED',
  /** Assignment has finished */
  Done = 'DONE',
  /** Error (Retrieable) */
  Error = 'ERROR',
  /** Pending */
  Pending = 'PENDING',
  /** Progress (Assignment has current Progress) */
  Progress = 'PROGRESS',
  /** Received (Assignment was received by an agent) */
  Received = 'RECEIVED',
  /** Assignation Returned (Only for Functions) */
  Returned = 'RETURNED',
  /** Assignment yielded a value (only for Generators) */
  Yield = 'YIELD'
}

/** An enumeration. */
export enum AssignationStatusInput {
  /** Acknowledged */
  Acknowledged = 'ACKNOWLEDGED',
  /** Was able to assign to a pod */
  Assigned = 'ASSIGNED',
  /** Bound */
  Bound = 'BOUND',
  /** Assinment is beeing cancelled */
  Cancel = 'CANCEL',
  /** Cancelling (Assingment is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Assignment has been cancelled. */
  Cancelled = 'CANCELLED',
  /** Critical Error (No Retries available) */
  Critical = 'CRITICAL',
  /** Denied (Assingment was rejected) */
  Denied = 'DENIED',
  /** Assignment has finished */
  Done = 'DONE',
  /** Error (Retrieable) */
  Error = 'ERROR',
  /** Pending */
  Pending = 'PENDING',
  /** Progress (Assignment has current Progress) */
  Progress = 'PROGRESS',
  /** Received (Assignment was received by an agent) */
  Received = 'RECEIVED',
  /** Assignation Returned (Only for Functions) */
  Returned = 'RETURNED',
  /** Assignment yielded a value (only for Generators) */
  Yield = 'YIELD'
}

export type AssignationsEvent = {
  __typename?: 'AssignationsEvent';
  create?: Maybe<Assignation>;
  delete?: Maybe<Scalars['ID']>;
  update?: Maybe<Assignation>;
};

/** A predicate that checks if an atribute fullfills a certain condition  */
export type AttributePredicate = Annotation & {
  __typename?: 'AttributePredicate';
  /** The annotations for this attribute */
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  /** The attribute to check */
  attribute: Scalars['String'];
  /** The name of the annotation */
  kind?: Maybe<Scalars['String']>;
};

export type Binds = {
  __typename?: 'Binds';
  /** The clients of this bind */
  clients?: Maybe<Array<Maybe<LokClient>>>;
  /** The templates of this bind */
  templates?: Maybe<Array<Maybe<Template>>>;
};

export type BoolWidget = Widget & {
  __typename?: 'BoolWidget';
  kind: Scalars['String'];
};

export type ChangePermissionsResult = {
  __typename?: 'ChangePermissionsResult';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ChildPort = {
  __typename?: 'ChildPort';
  /** The annotations of this port */
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  /** Description of the Widget */
  assignWidget?: Maybe<Widget>;
  /** The child */
  child?: Maybe<ChildPort>;
  default?: Maybe<Scalars['Any']>;
  /** The corresponding Model */
  identifier?: Maybe<Scalars['Identifier']>;
  /** the type of input */
  kind: PortKind;
  /** Is this argument nullable */
  nullable: Scalars['Boolean'];
  /** A return widget */
  returnWidget?: Maybe<ReturnWidget>;
  /** The scope of this port */
  scope: Scope;
  /** The varients of this port (only for unions) */
  variants?: Maybe<Array<Maybe<ChildPort>>>;
};

export type ChildPortInput = {
  /** The annotations of this argument */
  annotations?: InputMaybe<Array<InputMaybe<AnnotationInput>>>;
  /** The child of this argument */
  assignWidget?: InputMaybe<WidgetInput>;
  /** The child port */
  child?: InputMaybe<ChildPortInput>;
  /** The identifier */
  identifier?: InputMaybe<Scalars['Identifier']>;
  /** The type of this port */
  kind?: InputMaybe<PortKindInput>;
  /** The name of this port */
  name?: InputMaybe<Scalars['String']>;
  /** Is this argument nullable */
  nullable: Scalars['Boolean'];
  /** The child of this argument */
  returnWidget?: InputMaybe<ReturnWidgetInput>;
  /** The scope of this port */
  scope: Scope;
  /** The varients of this port (only for union) */
  variants?: InputMaybe<Array<InputMaybe<ChildPortInput>>>;
};

export type Choice = {
  __typename?: 'Choice';
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  value: Scalars['GenericScalar'];
};

export type ChoiceInput = {
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  value: Scalars['AnyInput'];
};

export type ChoiceReturnWidget = ReturnWidget & {
  __typename?: 'ChoiceReturnWidget';
  /** A list of choices */
  choices?: Maybe<Array<Maybe<Choice>>>;
  kind: Scalars['String'];
};

export type ChoiceWidget = Widget & {
  __typename?: 'ChoiceWidget';
  /** A list of choices */
  choices?: Maybe<Array<Maybe<Choice>>>;
  kind: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  definedAt: Scalars['DateTime'];
  /** A description for the Collection */
  description: Scalars['String'];
  id: Scalars['ID'];
  /** The name of this Collection */
  name: Scalars['String'];
  /** The nodes this collection has */
  nodes?: Maybe<Array<Maybe<Node>>>;
};


export type CollectionNodesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};

export type ColorWidget = Widget & {
  __typename?: 'ColorWidget';
  kind: Scalars['String'];
  /** A start date */
  startDate?: Maybe<Scalars['String']>;
};

/**
 * A comment
 *
 * A comment is a user generated comment on a commentable object. A comment can be a reply to another comment or a top level comment.
 * Comments can be nested to any depth. A comment can be edited and deleted by the user that created it.
 */
export type Comment = {
  __typename?: 'Comment';
  /** Comments that are replies to this comment */
  children?: Maybe<Array<Maybe<Comment>>>;
  /** The content type of the commentable object */
  contentType?: Maybe<CommentableModels>;
  createdAt: Scalars['DateTime'];
  /** The descendents of the comment (this referes to the Comment Tree) */
  descendents?: Maybe<Array<Maybe<Descendent>>>;
  id: Scalars['ID'];
  mentions: Array<User>;
  objectId: Scalars['Int'];
  parent?: Maybe<Comment>;
  resolved?: Maybe<Scalars['DateTime']>;
  resolvedBy?: Maybe<User>;
  text: Scalars['String'];
  user: User;
};


/**
 * A comment
 *
 * A comment is a user generated comment on a commentable object. A comment can be a reply to another comment or a top level comment.
 * Comments can be nested to any depth. A comment can be edited and deleted by the user that created it.
 */
export type CommentChildrenArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** A node in the comment tree */
export type CommentNode = {
  children?: Maybe<Array<Maybe<Descendent>>>;
  untypedChildren?: Maybe<Scalars['GenericScalar']>;
};

export enum CommentableModels {
  FacadeAgent = 'FACADE_AGENT',
  FacadeApprepository = 'FACADE_APPREPOSITORY',
  FacadeAssignation = 'FACADE_ASSIGNATION',
  FacadeAssignationlog = 'FACADE_ASSIGNATIONLOG',
  FacadeCollection = 'FACADE_COLLECTION',
  FacadeMirrorrepository = 'FACADE_MIRRORREPOSITORY',
  FacadeNode = 'FACADE_NODE',
  FacadeProtocol = 'FACADE_PROTOCOL',
  FacadeProvision = 'FACADE_PROVISION',
  FacadeProvisionlog = 'FACADE_PROVISIONLOG',
  FacadeRegistry = 'FACADE_REGISTRY',
  FacadeRepository = 'FACADE_REPOSITORY',
  FacadeReservation = 'FACADE_RESERVATION',
  FacadeReservationlog = 'FACADE_RESERVATIONLOG',
  FacadeStructure = 'FACADE_STRUCTURE',
  FacadeTemplate = 'FACADE_TEMPLATE',
  FacadeTestcase = 'FACADE_TESTCASE',
  FacadeTestresult = 'FACADE_TESTRESULT',
  FacadeWaiter = 'FACADE_WAITER'
}

export type CreateMirrorReturn = {
  __typename?: 'CreateMirrorReturn';
  created?: Maybe<Scalars['Boolean']>;
  repo?: Maybe<MirrorRepository>;
};

export type CustomAnnotation = Annotation & {
  __typename?: 'CustomAnnotation';
  /** The arguments for this annotation */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The hook for this annotation */
  hook: Scalars['String'];
  /** The name of the annotation */
  kind?: Maybe<Scalars['String']>;
};

export type CustomReturnWidget = ReturnWidget & {
  __typename?: 'CustomReturnWidget';
  /** A hook for the app to call */
  hook?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  /** A hook for the app to call */
  ward?: Maybe<Scalars['String']>;
};

export type CustomWidget = Widget & {
  __typename?: 'CustomWidget';
  /** A hook for the ward to call */
  hook?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  /** A ward for the app to call */
  ward?: Maybe<Scalars['String']>;
};

export type DateWidget = Widget & {
  __typename?: 'DateWidget';
  kind: Scalars['String'];
  /** A start date */
  startDate?: Maybe<Scalars['String']>;
};

/** A definition for a template */
export type DefinitionInput = {
  /** The Args */
  args: Array<InputMaybe<PortInput>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** A description for the Node */
  description?: InputMaybe<Scalars['String']>;
  idempotent?: InputMaybe<Scalars['Boolean']>;
  /** The Interfaces this node provides makes sense of the metadata */
  interfaces: Array<InputMaybe<Scalars['String']>>;
  /** The nodes this is a test for */
  isTestFor?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The variety */
  kind: NodeKindInput;
  /** The name of this template */
  name: Scalars['String'];
  portGroups: Array<InputMaybe<PortGroupInput>>;
  pure?: InputMaybe<Scalars['Boolean']>;
  /** The Returns */
  returns: Array<InputMaybe<PortInput>>;
};

export type DeleteAgentReturn = {
  __typename?: 'DeleteAgentReturn';
  id?: Maybe<Scalars['String']>;
};

export type DeleteNodeReturn = {
  __typename?: 'DeleteNodeReturn';
  id?: Maybe<Scalars['String']>;
};

export type DeleteRepoReturn = {
  __typename?: 'DeleteRepoReturn';
  id?: Maybe<Scalars['String']>;
};

export type DeleteTestCaseResult = {
  __typename?: 'DeleteTestCaseResult';
  id?: Maybe<Scalars['String']>;
};

export type Dependency = {
  __typename?: 'Dependency';
  /** The condition of the dependency */
  condition: LogicalCondition;
  /** The key of the port (null should be self) */
  key?: Maybe<Scalars['String']>;
  value: Scalars['GenericScalar'];
};

export type DependencyInput = {
  /** The condition of the dependency */
  condition: LogicalCondition;
  /** The key of the port, defaults to self */
  key?: InputMaybe<Scalars['String']>;
  value: Scalars['AnyInput'];
};

export type DescendendInput = {
  /** Is this a bold leaf? */
  bold?: InputMaybe<Scalars['Boolean']>;
  children?: InputMaybe<Array<InputMaybe<DescendendInput>>>;
  /** Is this a code leaf? */
  code?: InputMaybe<Scalars['Boolean']>;
  /** Is this a italic leaf? */
  italic?: InputMaybe<Scalars['Boolean']>;
  /** The text of the leaf */
  text?: InputMaybe<Scalars['String']>;
  /** The type of the descendent */
  typename?: InputMaybe<Scalars['String']>;
  /** The user that is mentioned */
  user?: InputMaybe<Scalars['String']>;
};

/** A descendent of a node in the comment tree */
export type Descendent = {
  typename?: Maybe<Scalars['String']>;
};

export type Effect = {
  __typename?: 'Effect';
  /** The dependencies of this effect */
  dependencies?: Maybe<Array<Maybe<Dependency>>>;
  /** The condition of the dependency */
  kind: EffectKind;
  message?: Maybe<Scalars['String']>;
};

export type EffectInput = {
  /** The dependencies of this effect */
  dependencies?: InputMaybe<Array<InputMaybe<DependencyInput>>>;
  /** The condition of the dependency */
  kind: EffectKind;
  message?: InputMaybe<Scalars['String']>;
};

export enum EffectKind {
  Crazy = 'CRAZY',
  Hidden = 'HIDDEN',
  Highlight = 'HIGHLIGHT',
  Warn = 'WARN'
}

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  userSet: Array<User>;
};

export type GroupAssignment = {
  __typename?: 'GroupAssignment';
  /** A query that returns an image path */
  group: Group;
  permissions: Array<Maybe<Scalars['String']>>;
};

export type GroupAssignmentInput = {
  group: Scalars['ID'];
  permissions: Array<InputMaybe<Scalars['String']>>;
};

export type ImageReturnWidget = ReturnWidget & {
  __typename?: 'ImageReturnWidget';
  kind: Scalars['String'];
  /** A query that returns an image path */
  query?: Maybe<Scalars['String']>;
  /** A hook for the app to call */
  ward?: Maybe<Scalars['String']>;
};

export type IntWidget = Widget & {
  __typename?: 'IntWidget';
  kind: Scalars['String'];
  /** A Complex description */
  query?: Maybe<Scalars['String']>;
};

export type IsPredicate = Annotation & {
  __typename?: 'IsPredicate';
  /** The name of the annotation */
  kind?: Maybe<Scalars['String']>;
  /** The arguments for this annotation */
  predicate: IsPredicateType;
};

export enum IsPredicateType {
  Digit = 'DIGIT',
  Higher = 'HIGHER',
  Lower = 'LOWER'
}

/** A leaf in the comment tree. Representations some sort of text */
export type Leaf = Descendent & {
  __typename?: 'Leaf';
  /** Is this a bold leaf? */
  bold?: Maybe<Scalars['Boolean']>;
  /** Is this a code leaf? */
  code?: Maybe<Scalars['Boolean']>;
  /** Is this a italic leaf? */
  italic?: Maybe<Scalars['Boolean']>;
  /** The text of the leaf */
  text?: Maybe<Scalars['String']>;
  typename?: Maybe<Scalars['String']>;
};

export type LinkWidget = Widget & {
  __typename?: 'LinkWidget';
  kind: Scalars['String'];
  /** A Complex description */
  linkbuilder?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum LogLevelInput {
  /** Cancel Level */
  Cancel = 'CANCEL',
  /** CRITICAL Level */
  Critical = 'CRITICAL',
  /** DEBUG Level */
  Debug = 'DEBUG',
  /** Done Level */
  Done = 'DONE',
  /** ERROR Level */
  Error = 'ERROR',
  /** Event Level (only handled by plugins) */
  Event = 'EVENT',
  /** INFO Level */
  Info = 'INFO',
  /** YIELD Level */
  Return = 'RETURN',
  /** WARN Level */
  Warn = 'WARN',
  /** YIELD Level */
  Yield = 'YIELD'
}

export enum LogicalCondition {
  In = 'IN',
  Is = 'IS',
  IsNot = 'IS_NOT'
}

export type LokApp = {
  __typename?: 'LokApp';
  /** The Associated App */
  apprepositorySet: Array<AppRepository>;
  /** The app is this assignation */
  assignationSet: Array<Assignation>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lokclientSet: Array<LokClient>;
  /** This provision creator */
  provisionSet: Array<Provision>;
  /** The Associated App */
  registrySet: Array<Registry>;
  /** This Reservations app */
  reservationSet: Array<Reservation>;
  version: Scalars['String'];
};

export type LokClient = {
  __typename?: 'LokClient';
  app: LokApp;
  clientId: Scalars['String'];
  grantType: LokClientGrantType;
  id: Scalars['ID'];
  iss: Scalars['String'];
  name: Scalars['String'];
  registrySet: Array<Registry>;
};

/** An enumeration. */
export enum LokClientGrantType {
  /** Authorization Code */
  AuthorizationCode = 'AUTHORIZATION_CODE',
  /** Backend (Client Credentials) */
  ClientCredentials = 'CLIENT_CREDENTIALS',
  /** Implicit Grant */
  Implicit = 'IMPLICIT',
  /** Password */
  Password = 'PASSWORD',
  /** Django Session */
  Session = 'SESSION'
}

/** A mention in the comment tree. This  is a reference to another user on the platform */
export type MentionDescendent = CommentNode & Descendent & {
  __typename?: 'MentionDescendent';
  children?: Maybe<Array<Maybe<Descendent>>>;
  typename?: Maybe<Scalars['String']>;
  untypedChildren?: Maybe<Scalars['GenericScalar']>;
  /** The user that is mentioned */
  user: User;
};

export type MentionEvent = {
  __typename?: 'MentionEvent';
  create?: Maybe<Comment>;
  deleted?: Maybe<Scalars['ID']>;
  update?: Maybe<Comment>;
};

export type MessageInput = {
  data: Scalars['AnyInput'];
  kind: MessageKind;
  reference: Scalars['String'];
  text: Scalars['String'];
};

export enum MessageKind {
  Assign = 'ASSIGN',
  Cancel = 'CANCEL',
  Tell = 'TELL',
  Terminate = 'TERMINATE'
}

export type MirrorRepository = Repository & {
  __typename?: 'MirrorRepository';
  /** Id of the Repository */
  id: Scalars['ID'];
  installedAt: Scalars['DateTime'];
  /** The Name of the Repository */
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  type: RepositoryType;
  /** A world-unique identifier */
  unique: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type MirrorRepositoryNodesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};

/** The root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  ack?: Maybe<Assignation>;
  assign?: Maybe<Assignation>;
  /** Kick an agent (only signed in users) */
  blockAgent?: Maybe<Agent>;
  /** Kick an agent (only signed in users) */
  bounceAgent?: Maybe<Agent>;
  /** Creates a Sample */
  changePermissions?: Maybe<ChangePermissionsResult>;
  /**
   * Create an Comment
   *
   *     This mutation creates a comment. It takes a commentable_id and a commentable_type.
   *     If this is the first comment on the commentable, it will create a new comment thread.
   *     If there is already a comment thread, it will add the comment to the thread (by setting
   *     it's parent to the last parent comment in the thread).
   *
   *     CreateComment takes a list of Descendents, which are the comment tree. The Descendents
   *     are a recursive structure, where each Descendent can have a list of Descendents as children.
   *     The Descendents are either a Leaf, which is a text node, or a MentionDescendent, which is a
   *     reference to another user on the platform.
   *
   *     Please convert your comment tree to a list of Descendents before sending it to the server.
   *     TODO: Add a converter from a comment tree to a list of Descendents.
   *
   *
   *     (only signed in users)
   */
  createComment?: Maybe<Comment>;
  /** Create Repostiory */
  createMirror?: Maybe<CreateMirrorReturn>;
  createTemplate?: Maybe<Template>;
  /** Create Repostiory */
  createTestCase?: Maybe<TestCase>;
  /** Create Test Result */
  createTestResult?: Maybe<TestResult>;
  /** Deletes an agent (only signed in users) */
  deleteAgent?: Maybe<DeleteAgentReturn>;
  /** Create an experiment (only signed in users) */
  deleteNode?: Maybe<DeleteNodeReturn>;
  /**
   * Delete TestCase
   *
   *     This mutation deletes an TestCase and returns the deleted TestCase.
   */
  deleteTestCase?: Maybe<DeleteTestCaseResult>;
  /** Create an experiment (only signed in users) */
  deleterepo?: Maybe<DeleteRepoReturn>;
  /** Kick an agent (only signed in users) */
  kickAgent?: Maybe<Agent>;
  link?: Maybe<Provision>;
  /** Scan allows you to add Datapoints to your Arnheim Schema, this is only available to Admin users */
  provide?: Maybe<Provision>;
  purgeNodes?: Maybe<PurgeNodesReturn>;
  /**
   * Reply to an Comment
   *
   *     This mutation creates a comment. It takes a commentable_id and a commentable_type.
   *     If this is the first comment on the commentable, it will create a new comment thread.
   *     If there is already a comment thread, it will add the comment to the thread (by setting
   *     it's parent to the last parent comment in the thread).
   *
   *     CreateComment takes a list of Descendents, which are the comment tree. The Descendents
   *     are a recursive structure, where each Descendent can have a list of Descendents as children.
   *     The Descendents are either a Leaf, which is a text node, or a MentionDescendent, which is a
   *     reference to another user on the platform.
   *
   *     Please convert your comment tree to a list of Descendents before sending it to the server.
   *     TODO: Add a converter from a comment tree to a list of Descendents.
   *
   *
   *     (only signed in users)
   */
  replyTo?: Maybe<Comment>;
  reserve?: Maybe<Reservation>;
  /** Create Repostiory */
  resetAgents?: Maybe<ResetAgentsReturn>;
  /** Create Repostiory */
  resetAssignations?: Maybe<ResetAssignationsReturn>;
  /** Create Repostiory */
  resetNodes?: Maybe<ResetNodesReturn>;
  /** Create Repostiory */
  resetProvisions?: Maybe<ResetProvisionsReturn>;
  /** Create Repostiory */
  resetRepository?: Maybe<ResetRepositoryReturn>;
  /** Create Repostiory */
  resetReservations?: Maybe<ResetReservationsReturn>;
  /**
   * Create an Comment
   *
   *     This mutation resolves a comment. By resolving a comment, it will be marked as resolved,
   *     and the user that resolved it will be set as the resolver.
   *
   *     (only signed in users)
   */
  resolveComment?: Maybe<Comment>;
  slate?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tell?: Maybe<Tell>;
  unassign?: Maybe<Assignation>;
  unlink?: Maybe<Provision>;
  unprovide?: Maybe<UnprovideReturn>;
  unreserve?: Maybe<UnreserveResult>;
  /** Create an experiment (only signed in users) */
  updateMirror?: Maybe<UpdateMirrorReturn>;
};


/** The root Mutation */
export type MutationAckArgs = {
  assignation: Scalars['ID'];
};


/** The root Mutation */
export type MutationAssignArgs = {
  args?: InputMaybe<Array<InputMaybe<Scalars['AnyInput']>>>;
  cached?: InputMaybe<Scalars['Boolean']>;
  log?: InputMaybe<Scalars['Boolean']>;
  parent?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  reservation: Scalars['ID'];
};


/** The root Mutation */
export type MutationBlockAgentArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationBounceAgentArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationChangePermissionsArgs = {
  groupAssignments?: InputMaybe<Array<InputMaybe<GroupAssignmentInput>>>;
  object: Scalars['ID'];
  type: SharableModels;
  userAssignments?: InputMaybe<Array<InputMaybe<UserAssignmentInput>>>;
};


/** The root Mutation */
export type MutationCreateCommentArgs = {
  descendents: Array<InputMaybe<DescendendInput>>;
  object: Scalars['ID'];
  parent?: InputMaybe<Scalars['ID']>;
  type: CommentableModels;
};


/** The root Mutation */
export type MutationCreateMirrorArgs = {
  name: Scalars['String'];
  url: Scalars['String'];
};


/** The root Mutation */
export type MutationCreateTemplateArgs = {
  definition: DefinitionInput;
  extensions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imitate?: InputMaybe<Scalars['ID']>;
  instanceId: Scalars['ID'];
  interface: Scalars['String'];
  params?: InputMaybe<Scalars['GenericScalar']>;
  policy?: InputMaybe<Scalars['GenericScalar']>;
};


/** The root Mutation */
export type MutationCreateTestCaseArgs = {
  description?: InputMaybe<Scalars['String']>;
  isBenchmark?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  name: Scalars['String'];
  node: Scalars['ID'];
};


/** The root Mutation */
export type MutationCreateTestResultArgs = {
  case: Scalars['ID'];
  passed: Scalars['Boolean'];
  result?: InputMaybe<Scalars['String']>;
  template: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeleteAgentArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeleteNodeArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeleteTestCaseArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeleterepoArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationKickAgentArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationLinkArgs = {
  provision: Scalars['ID'];
  reservation: Scalars['ID'];
};


/** The root Mutation */
export type MutationProvideArgs = {
  params?: InputMaybe<Scalars['GenericScalar']>;
  template: Scalars['ID'];
};


/** The root Mutation */
export type MutationPurgeNodesArgs = {
  app?: InputMaybe<Scalars['String']>;
};


/** The root Mutation */
export type MutationReplyToArgs = {
  descendents: Array<InputMaybe<DescendendInput>>;
  parent: Scalars['ID'];
};


/** The root Mutation */
export type MutationReserveArgs = {
  allowAutoRequest?: InputMaybe<Scalars['Boolean']>;
  binds?: InputMaybe<ReserveBindsInput>;
  hash?: InputMaybe<Scalars['String']>;
  imitate?: InputMaybe<Scalars['ID']>;
  instanceId: Scalars['ID'];
  node?: InputMaybe<Scalars['ID']>;
  params?: InputMaybe<ReserveParamsInput>;
  persist?: InputMaybe<Scalars['Boolean']>;
  provision?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};


/** The root Mutation */
export type MutationResetAssignationsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
};


/** The root Mutation */
export type MutationResetNodesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** The root Mutation */
export type MutationResetProvisionsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
};


/** The root Mutation */
export type MutationResetReservationsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ReservationStatusInput>>>;
};


/** The root Mutation */
export type MutationResolveCommentArgs = {
  id: Scalars['ID'];
  imitate?: InputMaybe<Scalars['ID']>;
};


/** The root Mutation */
export type MutationSlateArgs = {
  identifier: Scalars['String'];
};


/** The root Mutation */
export type MutationTellArgs = {
  message: MessageInput;
  reservation: Scalars['ID'];
};


/** The root Mutation */
export type MutationUnassignArgs = {
  assignation?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
};


/** The root Mutation */
export type MutationUnlinkArgs = {
  provision: Scalars['ID'];
  reservation: Scalars['ID'];
  safe?: InputMaybe<Scalars['Boolean']>;
};


/** The root Mutation */
export type MutationUnprovideArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Mutation */
export type MutationUnreserveArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationUpdateMirrorArgs = {
  id: Scalars['ID'];
};

export type Node = {
  __typename?: 'Node';
  args?: Maybe<Array<Maybe<Port>>>;
  /** The collections this Node belongs to */
  collections: Array<Collection>;
  /** A description for the Node */
  description: Scalars['String'];
  /** The hash of the Node (completely unique) */
  hash: Scalars['String'];
  id: Scalars['ID'];
  /** Is this function pure. e.g can we cache the result? */
  idempotent: Scalars['Boolean'];
  /** Beautiful images for beautiful Nodes */
  image?: Maybe<Scalars['String']>;
  interfaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The nodes this node tests */
  isTestFor?: Maybe<Array<Maybe<Node>>>;
  /** Function, generator? Check async Programming Textbook */
  kind: NodeKind;
  meta?: Maybe<Scalars['GenericScalar']>;
  /** The cleartext name of this Node */
  name: Scalars['String'];
  /** The port groups */
  portGroups?: Maybe<Array<Maybe<PortGroup>>>;
  /** The tests of its node */
  protocols?: Maybe<Array<Maybe<Protocol>>>;
  /** Is this function pure. e.g can we cache the result? */
  pure: Scalars['Boolean'];
  /** The node this reservation connects */
  reservations: Array<Reservation>;
  returns?: Maybe<Array<Maybe<Port>>>;
  /** The scope of this port */
  scope: NodeScope;
  templates?: Maybe<Array<Maybe<Template>>>;
  /** The node this test belongs to */
  testcases: Array<TestCase>;
  /** The tests of its node */
  tests?: Maybe<Array<Maybe<Node>>>;
};


export type NodeIsTestForArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};


export type NodeProtocolsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
};


export type NodeTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  interface?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  node?: InputMaybe<Scalars['ID']>;
  nodeDescription?: InputMaybe<Scalars['String']>;
  nodeName?: InputMaybe<Scalars['String']>;
  package?: InputMaybe<Scalars['String']>;
  providable?: InputMaybe<Scalars['Boolean']>;
  scopes?: InputMaybe<Array<InputMaybe<NodeScope>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type NodeTestsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};

export type NodeEvent = {
  __typename?: 'NodeEvent';
  created?: Maybe<Node>;
  deleted?: Maybe<Scalars['ID']>;
  updated?: Maybe<Node>;
};

/** An enumeration. */
export enum NodeKind {
  /** Function */
  Function = 'FUNCTION',
  /** Generator */
  Generator = 'GENERATOR'
}

/** An enumeration. */
export enum NodeKindInput {
  /** Function */
  Function = 'FUNCTION',
  /** Generator */
  Generator = 'GENERATOR'
}

export enum NodeScope {
  BridgeGlobalToLocal = 'BRIDGE_GLOBAL_TO_LOCAL',
  BridgeLocalToGlobal = 'BRIDGE_LOCAL_TO_GLOBAL',
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

/** A paragraph in the comment tree. This paragraph contains other nodes (list nodes) */
export type ParagraphDescendent = CommentNode & Descendent & {
  __typename?: 'ParagraphDescendent';
  children?: Maybe<Array<Maybe<Descendent>>>;
  /** The size of the paragraph */
  size?: Maybe<Scalars['String']>;
  typename?: Maybe<Scalars['String']>;
  untypedChildren?: Maybe<Scalars['GenericScalar']>;
};

/**
 * A Permission object
 *
 * This object represents a permission in the system. Permissions are
 * used to control access to different parts of the system. Permissions
 * are assigned to groups and users. A user has access to a part of the
 * system if the user is a member of a group that has the permission
 * assigned to it.
 */
export type Permission = {
  __typename?: 'Permission';
  codename: Scalars['String'];
  groupSet: Array<Group>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Unique ID for this permission */
  unique: Scalars['String'];
  /** Specific permissions for this user. */
  userSet: Array<User>;
};

export type PermissionsOfReturn = {
  __typename?: 'PermissionsOfReturn';
  available?: Maybe<Array<Maybe<Permission>>>;
  groupAssignments?: Maybe<Array<Maybe<GroupAssignment>>>;
  userAssignments?: Maybe<Array<Maybe<UserAssignment>>>;
};

/** A Port */
export type Port = {
  __typename?: 'Port';
  /** The annotations of this port */
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  /** Description of the Widget */
  assignWidget?: Maybe<Widget>;
  /** The child */
  child?: Maybe<ChildPort>;
  default?: Maybe<Scalars['Any']>;
  /** A description for this Port */
  description?: Maybe<Scalars['String']>;
  /** The effects of this port */
  effects?: Maybe<Array<Maybe<Effect>>>;
  /** The port groups */
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The corresponding Model */
  identifier?: Maybe<Scalars['Identifier']>;
  key: Scalars['String'];
  /** the type of input */
  kind: PortKind;
  label?: Maybe<Scalars['String']>;
  nullable: Scalars['Boolean'];
  /** A return widget */
  returnWidget?: Maybe<ReturnWidget>;
  /** The scope of this port */
  scope: Scope;
  /** The varients of this port (only for unions) */
  variants?: Maybe<Array<Maybe<ChildPort>>>;
};

export type PortDemandInput = {
  at?: InputMaybe<Scalars['Int']>;
  child?: InputMaybe<PortDemandInput>;
  identifier?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<PortKindInput>;
  nullable?: InputMaybe<Scalars['Boolean']>;
  variants?: InputMaybe<Array<InputMaybe<PortDemandInput>>>;
};

export type PortGroup = {
  __typename?: 'PortGroup';
  hidden?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
};

export type PortGroupInput = {
  /** Is this port group hidden */
  hidden?: InputMaybe<Scalars['Boolean']>;
  /** The key of the port group */
  key: Scalars['String'];
};

export type PortInput = {
  /** The annotations of this argument */
  annotations?: InputMaybe<Array<InputMaybe<AnnotationInput>>>;
  /** The child of this argument */
  assignWidget?: InputMaybe<WidgetInput>;
  /** The child of this argument */
  child?: InputMaybe<ChildPortInput>;
  /** The key of the arg */
  default?: InputMaybe<Scalars['Any']>;
  /** The description of this argument */
  description?: InputMaybe<Scalars['String']>;
  /** The dependencies of this port */
  effects?: InputMaybe<Array<InputMaybe<EffectInput>>>;
  /** The port group of this argument */
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The identifier */
  identifier?: InputMaybe<Scalars['Identifier']>;
  /** The key of the arg */
  key: Scalars['String'];
  /** The type of this argument */
  kind: PortKindInput;
  /** The name of this argument */
  label?: InputMaybe<Scalars['String']>;
  /** The name of this argument */
  name?: InputMaybe<Scalars['String']>;
  /** Is this argument nullable */
  nullable: Scalars['Boolean'];
  /** The child of this argument */
  returnWidget?: InputMaybe<ReturnWidgetInput>;
  /** The scope of this port */
  scope: Scope;
  /** The varients of this port (only for union) */
  variants?: InputMaybe<Array<InputMaybe<ChildPortInput>>>;
};

export enum PortKind {
  Bool = 'BOOL',
  Date = 'DATE',
  Dict = 'DICT',
  Float = 'FLOAT',
  Int = 'INT',
  List = 'LIST',
  String = 'STRING',
  Structure = 'STRUCTURE',
  Union = 'UNION'
}

export enum PortKindInput {
  Bool = 'BOOL',
  Date = 'DATE',
  Dict = 'DICT',
  Float = 'FLOAT',
  Int = 'INT',
  List = 'LIST',
  String = 'STRING',
  Structure = 'STRUCTURE',
  Union = 'UNION'
}

export type Protocol = {
  __typename?: 'Protocol';
  /** A description for the Protocol */
  description: Scalars['String'];
  id: Scalars['ID'];
  /** The name of this Protocol */
  name: Scalars['String'];
  /** The protocols this Node implements (e.g. Predicate) */
  nodes: Array<Node>;
};

export type Provision = {
  __typename?: 'Provision';
  /** Access Strategy for this Provision */
  access: ProvisionAccess;
  /** Is this Provision bound to a certain Agent? */
  agent?: Maybe<Agent>;
  /** This provision creator */
  app?: Maybe<LokApp>;
  assignations?: Maybe<Array<Maybe<Assignation>>>;
  /** Was this Reservation caused by a Provision? */
  causedReservations: Array<Reservation>;
  context?: Maybe<Scalars['GenericScalar']>;
  createdAt: Scalars['DateTime'];
  /** This provision creator */
  creator?: Maybe<User>;
  /** Is the connection to this Provision lost? */
  dropped: Scalars['Boolean'];
  extensions?: Maybe<Scalars['GenericScalar']>;
  id: Scalars['ID'];
  log?: Maybe<Array<Maybe<ProvisionLog>>>;
  /** The Deployment Mode for this Provisions */
  mode: ProvisionMode;
  params?: Maybe<ProvisionParams>;
  /** The Unique identifier of this Provision */
  reference: Scalars['String'];
  /** Reservation that created this provision (if we were auto created) */
  reservation?: Maybe<Reservation>;
  /** The Provisions this reservation connects */
  reservations: Array<Reservation>;
  /** Current lifecycle of Provision */
  status: ProvisionStatus;
  /** Clear Text status of the Provision as for now */
  statusmessage: Scalars['String'];
  template: Template;
  /** A Short Hand Way to identify this reservation for you */
  title?: Maybe<Scalars['String']>;
  /** A Unique identifier for this Topic */
  unique: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
};


export type ProvisionAssignationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  o?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<Scalars['ID']>;
  reservationReference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
};


export type ProvisionLogArgs = {
  createdAt?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  level?: InputMaybe<LogLevelInput>;
  o?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum ProvisionAccess {
  /** Everyone can link to this Topic */
  Everyone = 'EVERYONE',
  /** This Topic is Only Accessible linkable for its creating User */
  Exclusive = 'EXCLUSIVE'
}

export type ProvisionEvent = {
  __typename?: 'ProvisionEvent';
  log?: Maybe<ProvisionLogEvent>;
};

export type ProvisionLog = {
  __typename?: 'ProvisionLog';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level: ProvisionLogLevel;
  message?: Maybe<Scalars['String']>;
  /** The provision this log item belongs to */
  provision: Provision;
};

export type ProvisionLogEvent = {
  __typename?: 'ProvisionLogEvent';
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ProvisionLogLevel {
  /** Cancel Level */
  Cancel = 'CANCEL',
  /** CRITICAL Level */
  Critical = 'CRITICAL',
  /** DEBUG Level */
  Debug = 'DEBUG',
  /** Done Level */
  Done = 'DONE',
  /** ERROR Level */
  Error = 'ERROR',
  /** Event Level (only handled by plugins) */
  Event = 'EVENT',
  /** INFO Level */
  Info = 'INFO',
  /** YIELD Level */
  Return = 'RETURN',
  /** WARN Level */
  Warn = 'WARN',
  /** YIELD Level */
  Yield = 'YIELD'
}

/** An enumeration. */
export enum ProvisionMode {
  /** Debug Mode (Node might be constantly evolving) */
  Debug = 'DEBUG',
  /** Production Mode (Node might be constantly evolving) */
  Production = 'PRODUCTION'
}

export type ProvisionParams = {
  __typename?: 'ProvisionParams';
  autoUnprovide?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum ProvisionStatus {
  /** Active (Provision is currently active) */
  Active = 'ACTIVE',
  /** Bound (Provision was bound to an Agent) */
  Bound = 'BOUND',
  /** Cancelling (Provisions is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Cancelled (Provision was cancelled by the User and will no longer create Topics) */
  Cancelled = 'CANCELLED',
  /** Critical (Provision resulted in an critical system error) */
  Critical = 'CRITICAL',
  /** Denied (Provision was rejected for this User) */
  Denied = 'DENIED',
  /** Ended (Provision was cancelled by the Platform and will no longer create Topics) */
  Ended = 'ENDED',
  /** Error (Reservation was not able to be performed (See StatusMessage) */
  Error = 'ERROR',
  /** Inactive (Provision is currently not active) */
  Inactive = 'INACTIVE',
  /** Lost (Subscribers to this Topic have lost their connection) */
  Lost = 'LOST',
  /** Pending (Request has been created and waits for its initial creation) */
  Pending = 'PENDING',
  /** Providing (Request has been send to its Agent and waits for Result */
  Providing = 'PROVIDING',
  /** Reconnecting (We are trying to Reconnect to this Topic) */
  Reconnecting = 'RECONNECTING'
}

/** An enumeration. */
export enum ProvisionStatusInput {
  /** Active (Provision is currently active) */
  Active = 'ACTIVE',
  /** Bound (Provision was bound to an Agent) */
  Bound = 'BOUND',
  /** Cancelling (Provisions is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Cancelled (Provision was cancelled by the User and will no longer create Topics) */
  Cancelled = 'CANCELLED',
  /** Critical (Provision resulted in an critical system error) */
  Critical = 'CRITICAL',
  /** Denied (Provision was rejected for this User) */
  Denied = 'DENIED',
  /** Lost (Subscribers to this Topic have lost their connection) */
  Disconnected = 'DISCONNECTED',
  /** Ended (Provision was cancelled by the Platform and will no longer create Topics) */
  Ended = 'ENDED',
  /** Error (Reservation was not able to be performed (See StatusMessage) */
  Error = 'ERROR',
  /** Inactive (Provision is currently not active) */
  Inactive = 'INACTIVE',
  /** Pending (Request has been created and waits for its initial creation) */
  Pending = 'PENDING',
  /** Providing (Request has been send to its Agent and waits for Result */
  Providing = 'PROVIDING',
  /** Reconnecting (We are trying to Reconnect to this Topic) */
  Reconnecting = 'RECONNECTING'
}

export type ProvisionsEvent = {
  __typename?: 'ProvisionsEvent';
  create?: Maybe<Provision>;
  delete?: Maybe<Scalars['ID']>;
  update?: Maybe<Provision>;
};

export type PurgeNodesReturn = {
  __typename?: 'PurgeNodesReturn';
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The root Query */
export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  agents?: Maybe<Array<Maybe<Agent>>>;
  allnodes?: Maybe<Array<Maybe<Node>>>;
  allprovisions?: Maybe<Array<Maybe<Provision>>>;
  allrepositories?: Maybe<Array<Maybe<Repository>>>;
  allreservations?: Maybe<Array<Maybe<Reservation>>>;
  assignation?: Maybe<Assignation>;
  assignations?: Maybe<Array<Maybe<Assignation>>>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  comment?: Maybe<Comment>;
  /**
   * Comments for a specific object
   *
   *     This query returns all comments for a specific object. The object is
   *     specified by the `model` and `id` arguments. The `model` argument is
   *     a string that is the name of the model. The `id` argument is the id of
   *     the object.
   *
   *     You can only query for comments for objects that you have access to.
   *
   *
   */
  commentsfor?: Maybe<Array<Maybe<Comment>>>;
  demandednodes?: Maybe<Array<Maybe<Node>>>;
  hello?: Maybe<Scalars['String']>;
  linkableprovisions?: Maybe<Array<Maybe<Provision>>>;
  me?: Maybe<User>;
  myagents?: Maybe<Array<Maybe<Agent>>>;
  mymentions?: Maybe<Array<Maybe<Comment>>>;
  myprovisions?: Maybe<Array<Maybe<Provision>>>;
  myrepositories?: Maybe<Array<Maybe<Repository>>>;
  myrequests?: Maybe<Array<Maybe<Assignation>>>;
  myreservations?: Maybe<Array<Maybe<Reservation>>>;
  /**
   * Asss
   *
   *     Is A query for all of these specials in the world
   *
   */
  mytemplatefor?: Maybe<Template>;
  mytodos?: Maybe<Array<Maybe<Assignation>>>;
  /**
   * Asss
   *
   *     Is A query for all of these specials in the world
   *
   */
  node?: Maybe<Node>;
  permissionsFor?: Maybe<Array<Maybe<Permission>>>;
  permissionsOf?: Maybe<PermissionsOfReturn>;
  provision?: Maybe<Provision>;
  provisions?: Maybe<Array<Maybe<Provision>>>;
  registries?: Maybe<Array<Maybe<Registry>>>;
  registry?: Maybe<Registry>;
  repository?: Maybe<Repository>;
  requests?: Maybe<Array<Maybe<Assignation>>>;
  reservableTemplates?: Maybe<Array<Maybe<Template>>>;
  reservation?: Maybe<Reservation>;
  reservations?: Maybe<Array<Maybe<Reservation>>>;
  structure?: Maybe<Structure>;
  structures?: Maybe<Array<Maybe<Structure>>>;
  template?: Maybe<Template>;
  templates?: Maybe<Array<Maybe<Template>>>;
  testcase?: Maybe<TestCase>;
  testcases?: Maybe<Array<Maybe<TestCase>>>;
  testresult?: Maybe<TestResult>;
  testresults?: Maybe<Array<Maybe<TestResult>>>;
  todos?: Maybe<Array<Maybe<Assignation>>>;
  user?: Maybe<User>;
  /** Get a list of users */
  users?: Maybe<Array<Maybe<User>>>;
  void?: Maybe<Scalars['String']>;
};


/** The root Query */
export type QueryAgentArgs = {
  client?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  instance?: InputMaybe<Scalars['ID']>;
  sub?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryAgentsArgs = {
  app?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  registry?: InputMaybe<Scalars['ID']>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<AgentStatusInput>>>;
};


/** The root Query */
export type QueryAllnodesArgs = {
  argTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  interfaces?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  protocolNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  protocols?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  repository?: InputMaybe<Scalars['ID']>;
  restrict?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scopes?: InputMaybe<Array<InputMaybe<NodeScope>>>;
  search?: InputMaybe<Scalars['String']>;
  templated?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<NodeKindInput>;
};


/** The root Query */
export type QueryAllprovisionsArgs = {
  agent?: InputMaybe<Scalars['ID']>;
  client?: InputMaybe<Scalars['ID']>;
  clientId?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  status?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
};


/** The root Query */
export type QueryAssignationArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryAssignationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  o?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<Scalars['ID']>;
  reservationReference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
};


/** The root Query */
export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryCollectionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryCommentArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryCommentsforArgs = {
  deep?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  model: CommentableModels;
};


/** The root Query */
export type QueryDemandednodesArgs = {
  inputPortDemands?: InputMaybe<Array<InputMaybe<PortDemandInput>>>;
  outputPortDemands?: InputMaybe<Array<InputMaybe<PortDemandInput>>>;
};


/** The root Query */
export type QueryLinkableprovisionsArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryMyagentsArgs = {
  app?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  registry?: InputMaybe<Scalars['ID']>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<AgentStatusInput>>>;
};


/** The root Query */
export type QueryMyprovisionsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
};


/** The root Query */
export type QueryMyrequestsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


/** The root Query */
export type QueryMyreservationsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ReservationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<ReservationStatusInput>>>;
};


/** The root Query */
export type QueryMytemplateforArgs = {
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  instanceId: Scalars['ID'];
};


/** The root Query */
export type QueryMytodosArgs = {
  exclude?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


/** The root Query */
export type QueryNodeArgs = {
  assignation?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  q?: InputMaybe<Scalars['QString']>;
  reservation?: InputMaybe<Scalars['ID']>;
  template?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryPermissionsForArgs = {
  model: SharableModels;
  name?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryPermissionsOfArgs = {
  id: Scalars['ID'];
  model: SharableModels;
};


/** The root Query */
export type QueryProvisionArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryProvisionsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
  instanceId?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryRegistriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  unique?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryRegistryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryRepositoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryRequestsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  instanceId: Scalars['String'];
};


/** The root Query */
export type QueryReservableTemplatesArgs = {
  hash?: InputMaybe<Scalars['String']>;
  node?: InputMaybe<Scalars['ID']>;
  template?: InputMaybe<Scalars['ID']>;
  templateParams?: InputMaybe<Array<InputMaybe<TemplateParamInput>>>;
};


/** The root Query */
export type QueryReservationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  provision?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryReservationsArgs = {
  exclude?: InputMaybe<Array<InputMaybe<ReservationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<ReservationStatusInput>>>;
  inputPortDemands?: InputMaybe<Array<InputMaybe<PortDemandInput>>>;
  instanceId: Scalars['String'];
  nodeInterfaces?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  outputPortDemands?: InputMaybe<Array<InputMaybe<PortDemandInput>>>;
  templateParams?: InputMaybe<Array<InputMaybe<TemplateParamInput>>>;
};


/** The root Query */
export type QueryStructureArgs = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  interface?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  node?: InputMaybe<Scalars['ID']>;
  nodeDescription?: InputMaybe<Scalars['String']>;
  nodeName?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  package?: InputMaybe<Scalars['String']>;
  providable?: InputMaybe<Scalars['Boolean']>;
  scopes?: InputMaybe<Array<InputMaybe<NodeScope>>>;
  search?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryTestcaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryTestcasesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  key?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<Scalars['ID']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryTestresultArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryTestresultsArgs = {
  case?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  key?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryTodosArgs = {
  exclude?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  filter?: InputMaybe<Array<InputMaybe<AssignationStatusInput>>>;
  identifier?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type QueryWidget = Widget & {
  __typename?: 'QueryWidget';
  kind: Scalars['String'];
  /** A Complex description */
  query?: Maybe<Scalars['String']>;
};

export type Registry = {
  __typename?: 'Registry';
  /** The provide might be limited to a instance like ImageJ belonging to a specific person. Is nullable for backend users */
  agents: Array<Agent>;
  /** The Associated App */
  app?: Maybe<LokApp>;
  client: LokClient;
  id: Scalars['ID'];
  /** @deprecated Will be replaced in the future */
  name?: Maybe<Scalars['String']>;
  /** The Associatsed App */
  user?: Maybe<User>;
  /** The provide might be limited to a instance like ImageJ belonging to a specific person. Is nullable for backend users */
  waiters: Array<Waiter>;
};

export type Repository = {
  /** Id of the Repository */
  id: Scalars['ID'];
  /** The Name of the Repository */
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<Node>>>;
};


export type RepositoryNodesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  package?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum RepositoryType {
  /** Repository that is hosted by an App */
  App = 'APP',
  /** Repository mirrors online Repository */
  Mirror = 'MIRROR'
}

export type Reservation = {
  __typename?: 'Reservation';
  /** Allow automatic requests for this reservation */
  allowAutoRequest: Scalars['Boolean'];
  /** This Reservations app */
  app?: Maybe<LokApp>;
  /** Which reservation are we assigning to */
  assignations: Array<Assignation>;
  binds?: Maybe<Binds>;
  /** Callback */
  callback?: Maybe<Scalars['String']>;
  /** The channel of this Reservation */
  channel: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** Reservation that created this provision (if we were auto created) */
  createdProvisions: Array<Provision>;
  /** This Reservations creator */
  creator?: Maybe<User>;
  /** Is this reservation happy? (aka: does it have as many linked provisions as desired */
  happy: Scalars['Boolean'];
  /** The hash of the Reservation */
  hash: Scalars['String'];
  id: Scalars['ID'];
  log?: Maybe<Array<Maybe<ReservationLog>>>;
  /** The node this reservation connects */
  node: Node;
  params?: Maybe<ReserveParams>;
  /** Provider */
  progress?: Maybe<Scalars['String']>;
  /** Was this Reservation caused by a Provision? */
  provision?: Maybe<Provision>;
  /** The Provisions this reservation connects */
  provisions: Array<Provision>;
  /** The Unique identifier of this Assignation */
  reference: Scalars['String'];
  /** Current lifecycle of Reservation */
  status: ReservationStatus;
  /** Clear Text status of the Provision as for now */
  statusmessage: Scalars['String'];
  /** The template this reservation connects */
  template?: Maybe<Template>;
  /** A Short Hand Way to identify this reservation for you */
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  /** Is this reservation viable? (aka: does it have as many linked provisions as minimal */
  viable: Scalars['Boolean'];
  /** This Reservations app */
  waiter: Waiter;
};


export type ReservationLogArgs = {
  createdAt?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  level?: InputMaybe<LogLevelInput>;
  o?: InputMaybe<Scalars['String']>;
};

export type ReservationEvent = {
  __typename?: 'ReservationEvent';
  log?: Maybe<ReservationLogEvent>;
};

export type ReservationLog = {
  __typename?: 'ReservationLog';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level: ReservationLogLevel;
  message?: Maybe<Scalars['String']>;
  /** The reservation this log item belongs to */
  reservation: Reservation;
};

export type ReservationLogEvent = {
  __typename?: 'ReservationLogEvent';
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ReservationLogLevel {
  /** Cancel Level */
  Cancel = 'CANCEL',
  /** CRITICAL Level */
  Critical = 'CRITICAL',
  /** DEBUG Level */
  Debug = 'DEBUG',
  /** Done Level */
  Done = 'DONE',
  /** ERROR Level */
  Error = 'ERROR',
  /** Event Level (only handled by plugins) */
  Event = 'EVENT',
  /** INFO Level */
  Info = 'INFO',
  /** YIELD Level */
  Return = 'RETURN',
  /** WARN Level */
  Warn = 'WARN',
  /** YIELD Level */
  Yield = 'YIELD'
}

/** An enumeration. */
export enum ReservationStatus {
  /** Active (Reservation is active and accepts assignments */
  Active = 'ACTIVE',
  /** Cancelling (Reervation is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Cancelled (Reservation was cancelled by user and is no longer active) */
  Cancelled = 'CANCELLED',
  /** Critical (Reservation failed with an Critical Error) */
  Critical = 'CRITICAL',
  /** Disconnect (State of provisions this reservation connects to have changed and require Retouring) */
  Disconnect = 'DISCONNECT',
  /** Disconnect (State of provisions this reservation connects to have changed and require Retouring) */
  Disconnected = 'DISCONNECTED',
  /** Ended (Reservation was ended by the the Platform and is no longer active) */
  Ended = 'ENDED',
  /** Error (Reservation was not able to be performed (See StatusMessage) */
  Error = 'ERROR',
  /** SHould signal that this reservation is non viable (has less linked provisions than minimalInstances) */
  NonViable = 'NON_VIABLE',
  /** Providing (Reservation required the provision of a new worker) */
  Providing = 'PROVIDING',
  /** Rerouting (State of provisions this reservation connects to have changed and require Retouring) */
  Rerouting = 'REROUTING',
  /** Routing (Reservation has been requested but no Topic found yet) */
  Routing = 'ROUTING',
  /** Waiting (We are waiting for any assignable Topic to come online) */
  Waiting = 'WAITING'
}

/** An enumeration. */
export enum ReservationStatusInput {
  /** Active (Reservation is active and accepts assignments */
  Active = 'ACTIVE',
  /** Cancelling (Reervation is currently being cancelled) */
  Canceling = 'CANCELING',
  /** Cancelled (Reservation was cancelled by user and is no longer active) */
  Cancelled = 'CANCELLED',
  /** Critical (Reservation failed with an Critical Error) */
  Critical = 'CRITICAL',
  /** Disconnect (State of provisions this reservation connects to have changed and require Retouring) */
  Disconnect = 'DISCONNECT',
  /** Disconnect (State of provisions this reservation connects to have changed and require Retouring) */
  Disconnected = 'DISCONNECTED',
  /** Ended (Reservation was ended by the the Platform and is no longer active) */
  Ended = 'ENDED',
  /** Error (Reservation was not able to be performed (See StatusMessage) */
  Error = 'ERROR',
  /** SHould signal that this reservation is non viable (has less linked provisions than minimalInstances) */
  NonViable = 'NON_VIABLE',
  /** Providing (Reservation required the provision of a new worker) */
  Providing = 'PROVIDING',
  /** Rerouting (State of provisions this reservation connects to have changed and require Retouring) */
  Rerouting = 'REROUTING',
  /** Routing (Reservation has been requested but no Topic found yet) */
  Routing = 'ROUTING',
  /** Waiting (We are waiting for any assignable Topic to come online) */
  Waiting = 'WAITING'
}

export type ReservationsEvent = {
  __typename?: 'ReservationsEvent';
  create?: Maybe<Reservation>;
  delete?: Maybe<Scalars['ID']>;
  update?: Maybe<Reservation>;
};

export type ReserveBindsInput = {
  /** The clients that we are allowed to use */
  clients: Array<InputMaybe<Scalars['ID']>>;
  /** The templates that we are allowed to use */
  templates: Array<InputMaybe<Scalars['ID']>>;
};

export type ReserveParams = {
  __typename?: 'ReserveParams';
  /** Autoproviding */
  autoProvide?: Maybe<Scalars['Boolean']>;
  /** Autounproviding */
  autoUnprovide?: Maybe<Scalars['Boolean']>;
  /** The desired amount of Instances */
  desiredInstances?: Maybe<Scalars['Int']>;
  /** The minimal amount of Instances */
  minimalInstances?: Maybe<Scalars['Int']>;
  /** Registry thar are allowed */
  registries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Templates that can be selected */
  templates?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ReserveParamsInput = {
  /** Agents that are allowed */
  agents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Do you want to autoprovide */
  autoProvide?: InputMaybe<Scalars['Boolean']>;
  /** Do you want to auto_unprovide */
  autoUnprovide?: InputMaybe<Scalars['Boolean']>;
  /** The desired amount of Instances */
  desiredInstances: Scalars['Int'];
  /** The minimal amount of Instances */
  minimalInstances: Scalars['Int'];
  /** Registry thar are allowed */
  registries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Templates that can be selected */
  templates?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ResetAgentsReturn = {
  __typename?: 'ResetAgentsReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ResetAssignationsReturn = {
  __typename?: 'ResetAssignationsReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ResetNodesReturn = {
  __typename?: 'ResetNodesReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ResetProvisionsReturn = {
  __typename?: 'ResetProvisionsReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ResetRepositoryReturn = {
  __typename?: 'ResetRepositoryReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ResetReservationsReturn = {
  __typename?: 'ResetReservationsReturn';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ReturnWidget = {
  kind: Scalars['String'];
};

export type ReturnWidgetInput = {
  /** The dependencies of this port */
  choices?: InputMaybe<Array<InputMaybe<ChoiceInput>>>;
  /** A hook for the app to call */
  hook?: InputMaybe<Scalars['String']>;
  /** type */
  kind: ReturnWidgetKind;
  /** Do we have a possible */
  query?: InputMaybe<Scalars['String']>;
  /** A hook for the app to call */
  ward?: InputMaybe<Scalars['String']>;
};

/** The kind of return widget */
export enum ReturnWidgetKind {
  ChoiceReturnWidget = 'ChoiceReturnWidget',
  CustomReturnWidget = 'CustomReturnWidget',
  ImageReturnWidget = 'ImageReturnWidget'
}

export enum Scope {
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

export type SearchWidget = Widget & {
  __typename?: 'SearchWidget';
  kind: Scalars['String'];
  /** A Complex description */
  query: Scalars['String'];
  /** A ward for the app to call */
  ward: Scalars['String'];
};

/** Sharable Models are models that can be shared amongst users and groups. They representent the models of the DB */
export enum SharableModels {
  FacadeAgent = 'FACADE_AGENT',
  FacadeApprepository = 'FACADE_APPREPOSITORY',
  FacadeAssignation = 'FACADE_ASSIGNATION',
  FacadeAssignationlog = 'FACADE_ASSIGNATIONLOG',
  FacadeCollection = 'FACADE_COLLECTION',
  FacadeMirrorrepository = 'FACADE_MIRRORREPOSITORY',
  FacadeNode = 'FACADE_NODE',
  FacadeProtocol = 'FACADE_PROTOCOL',
  FacadeProvision = 'FACADE_PROVISION',
  FacadeProvisionlog = 'FACADE_PROVISIONLOG',
  FacadeRegistry = 'FACADE_REGISTRY',
  FacadeRepository = 'FACADE_REPOSITORY',
  FacadeReservation = 'FACADE_RESERVATION',
  FacadeReservationlog = 'FACADE_RESERVATIONLOG',
  FacadeStructure = 'FACADE_STRUCTURE',
  FacadeTemplate = 'FACADE_TEMPLATE',
  FacadeTestcase = 'FACADE_TESTCASE',
  FacadeTestresult = 'FACADE_TESTRESULT',
  FacadeWaiter = 'FACADE_WAITER',
  LokLokapp = 'LOK_LOKAPP',
  LokLokclient = 'LOK_LOKCLIENT',
  LokLokuser = 'LOK_LOKUSER'
}

export type SliderWidget = Widget & {
  __typename?: 'SliderWidget';
  kind: Scalars['String'];
  /** A Complex description */
  max?: Maybe<Scalars['Int']>;
  /** A Complex description */
  min?: Maybe<Scalars['Int']>;
};

export type StringWidget = Widget & {
  __typename?: 'StringWidget';
  /** Whether to display as paragraph */
  asParagraph?: Maybe<Scalars['Boolean']>;
  kind: Scalars['String'];
  /** A placeholder to display */
  placeholder?: Maybe<Scalars['String']>;
};

export type Structure = {
  __typename?: 'Structure';
  extenders?: Maybe<Scalars['GenericScalar']>;
  id: Scalars['ID'];
  /** A unique identifier for this Model accross the Platform */
  identifier: Scalars['String'];
  repository?: Maybe<Repository>;
};

/** The root Subscriptions */
export type Subscription = {
  __typename?: 'Subscription';
  agentsEvent?: Maybe<AgentEvent>;
  assignation?: Maybe<AssignationEvent>;
  /**
   * My Mentions
   *
   *     Returns an event of a new mention for the user if the user
   *     was mentioned in a comment.
   *
   */
  mymentions?: Maybe<MentionEvent>;
  myprovisions?: Maybe<ProvisionsEvent>;
  myrequests?: Maybe<AssignationsEvent>;
  myreservations?: Maybe<ReservationsEvent>;
  mytodos?: Maybe<TodoEvent>;
  nodeEvent?: Maybe<Node>;
  nodes?: Maybe<NodeEvent>;
  provision?: Maybe<ProvisionEvent>;
  provisions?: Maybe<ProvisionsEvent>;
  requests?: Maybe<AssignationsEvent>;
  reservation?: Maybe<ReservationEvent>;
  reservations?: Maybe<ReservationsEvent>;
  todos?: Maybe<TodoEvent>;
  waiter?: Maybe<WaiterEvent>;
};


/** The root Subscriptions */
export type SubscriptionAgentsEventArgs = {
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionAssignationArgs = {
  id: Scalars['ID'];
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionMyrequestsArgs = {
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionMyreservationsArgs = {
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionNodeEventArgs = {
  id: Scalars['ID'];
};


/** The root Subscriptions */
export type SubscriptionNodesArgs = {
  interface?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionProvisionArgs = {
  id: Scalars['ID'];
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionProvisionsArgs = {
  identifier: Scalars['String'];
};


/** The root Subscriptions */
export type SubscriptionRequestsArgs = {
  instanceId: Scalars['String'];
};


/** The root Subscriptions */
export type SubscriptionReservationArgs = {
  id: Scalars['ID'];
  level?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionReservationsArgs = {
  instanceId: Scalars['String'];
  provision?: InputMaybe<Scalars['String']>;
};


/** The root Subscriptions */
export type SubscriptionTodosArgs = {
  instanceId: Scalars['String'];
};


/** The root Subscriptions */
export type SubscriptionWaiterArgs = {
  level?: InputMaybe<Scalars['String']>;
};

export type Tell = {
  __typename?: 'Tell';
  reference?: Maybe<Scalars['String']>;
};

export type Template = {
  __typename?: 'Template';
  /** The associated registry for this Template */
  agent: Agent;
  createdAt: Scalars['DateTime'];
  /** Who created this template on this instance */
  creator?: Maybe<User>;
  /** The extentions of this template */
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  /** Interface (think Function) */
  interface: Scalars['String'];
  /** A name for this Template */
  name: Scalars['String'];
  /** The node this template is implementatig */
  node: Node;
  params?: Maybe<Scalars['GenericScalar']>;
  policy?: Maybe<Scalars['GenericScalar']>;
  provisions?: Maybe<Array<Maybe<Provision>>>;
  /** The template this reservation connects */
  reservations: Array<Reservation>;
  testresults: Array<TestResult>;
  updatedAt: Scalars['DateTime'];
};


export type TemplateProvisionsArgs = {
  agent?: InputMaybe<Scalars['ID']>;
  client?: InputMaybe<Scalars['ID']>;
  clientId?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  status?: InputMaybe<Array<InputMaybe<ProvisionStatusInput>>>;
};

export type TemplateField = {
  __typename?: 'TemplateField';
  /** A short description of the field */
  description: Scalars['String'];
  /** The key of the field */
  key: Scalars['String'];
  /** The parent key (if nested) */
  parent?: Maybe<Scalars['String']>;
  /** The type of the field */
  type: Scalars['String'];
};

export type TemplateFieldInput = {
  /** A short description of the field */
  description?: InputMaybe<Scalars['String']>;
  /** The key of the field */
  key: Scalars['String'];
  /** The parent key (if nested) */
  parent?: InputMaybe<Scalars['String']>;
  /** The key of the field */
  type: Scalars['String'];
};

export type TemplateParamInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['GenericScalar']>;
};

export type TemplateWidget = Widget & {
  __typename?: 'TemplateWidget';
  fields: Array<Maybe<TemplateField>>;
  kind: Scalars['String'];
};

export type TestCase = {
  __typename?: 'TestCase';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isBenchmark: Scalars['Boolean'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** The node this test belongs to */
  node: Node;
  results: Array<TestResult>;
};

export type TestResult = {
  __typename?: 'TestResult';
  case: TestCase;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  passed: Scalars['Boolean'];
  result?: Maybe<Scalars['GenericScalar']>;
  template: Template;
};

export type TodoEvent = {
  __typename?: 'TodoEvent';
  create?: Maybe<Assignation>;
  delete?: Maybe<Scalars['ID']>;
  update?: Maybe<Assignation>;
};

export type UnprovideReturn = {
  __typename?: 'UnprovideReturn';
  id: Scalars['ID'];
};

export type UnreserveResult = {
  __typename?: 'UnreserveResult';
  id: Scalars['ID'];
};

export type UpdateMirrorReturn = {
  __typename?: 'UpdateMirrorReturn';
  id?: Maybe<Scalars['String']>;
};

/** A reflection on the real User */
export type User = {
  __typename?: 'User';
  /** The creator is this assignation */
  assignationSet: Array<Assignation>;
  /** The associated color for this user */
  color?: Maybe<Scalars['String']>;
  comments: Array<Comment>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups: Array<Group>;
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  iss?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  mentionedIn: Array<Comment>;
  /** The name of the user */
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** This provision creator */
  provisionSet: Array<Provision>;
  /** The Associatsed App */
  registrySet: Array<Registry>;
  /** This Reservations creator */
  reservationSet: Array<Reservation>;
  resolvedComments: Array<Comment>;
  /** The sub of the user */
  sub?: Maybe<Scalars['String']>;
  /** Who created this template on this instance */
  templateSet: Array<Template>;
  /** Specific permissions for this user. */
  userPermissions: Array<Permission>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type UserAssignment = {
  __typename?: 'UserAssignment';
  permissions: Array<Maybe<Scalars['String']>>;
  /** A query that returns an image path */
  user: User;
};

export type UserAssignmentInput = {
  permissions: Array<InputMaybe<Scalars['String']>>;
  /** The user id */
  user: Scalars['String'];
};

export type ValueRange = Annotation & {
  __typename?: 'ValueRange';
  /** The name of the annotation */
  kind?: Maybe<Scalars['String']>;
  /** The maximum value */
  max: Scalars['Float'];
  /** The minimum value */
  min: Scalars['Float'];
};

export type Waiter = {
  __typename?: 'Waiter';
  /** This Assignation app */
  assignations: Array<Assignation>;
  clientId: Scalars['String'];
  id: Scalars['ID'];
  identifier: Scalars['String'];
  installedAt: Scalars['DateTime'];
  /** This waiters Name */
  name: Scalars['String'];
  /** The provide might be limited to a instance like ImageJ belonging to a specific person. Is nullable for backend users */
  registry?: Maybe<Registry>;
  /** This Reservations app */
  reservations: Array<Reservation>;
  /** The Status of this Waiter */
  status: WaiterStatus;
  /** The Channel we are listening to */
  unique: Scalars['String'];
};

export type WaiterEvent = {
  __typename?: 'WaiterEvent';
  created?: Maybe<Waiter>;
  deleted?: Maybe<Scalars['ID']>;
  updated?: Maybe<Waiter>;
};

/** An enumeration. */
export enum WaiterStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Disconnected */
  Disconnected = 'DISCONNECTED',
  /** Complete Vanilla Scenario after a forced restart of */
  Vanilla = 'VANILLA'
}

export type Widget = {
  kind: Scalars['String'];
};

export type WidgetInput = {
  /** Is this a paragraph */
  asParagraph?: InputMaybe<Scalars['Boolean']>;
  /** The dependencies of this port */
  choices?: InputMaybe<Array<InputMaybe<ChoiceInput>>>;
  /** The fields of this widget (onbly on TemplateWidget) */
  fields?: InputMaybe<Array<InputMaybe<TemplateFieldInput>>>;
  /** A hook for the app to call */
  hook?: InputMaybe<Scalars['String']>;
  /** type */
  kind: WidgetKind;
  /** Max value for int widget */
  max?: InputMaybe<Scalars['Int']>;
  /** Max value for int widget */
  min?: InputMaybe<Scalars['Int']>;
  /** Placeholder for any widget */
  placeholder?: InputMaybe<Scalars['String']>;
  /** Do we have a possible */
  query?: InputMaybe<Scalars['SearchQuery']>;
  /** A ward for the app to call */
  ward?: InputMaybe<Scalars['String']>;
};

/** The kind of widget */
export enum WidgetKind {
  BoolWidget = 'BoolWidget',
  ChoiceWidget = 'ChoiceWidget',
  ColorWidget = 'ColorWidget',
  CustomWidget = 'CustomWidget',
  DateWidget = 'DateWidget',
  IntWidget = 'IntWidget',
  LinkWidget = 'LinkWidget',
  QueryWidget = 'QueryWidget',
  SearchWidget = 'SearchWidget',
  SliderWidget = 'SliderWidget',
  StringWidget = 'StringWidget',
  TemplateWidget = 'TemplateWidget'
}

export type PostmanAssignationFragment = { __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null };

export type IntWidgetFragment = { __typename?: 'IntWidget', kind: string };

export type StringWidgetFragment = { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null };

export type BoolWidgetFragment = { __typename?: 'BoolWidget', kind: string };

export type SliderWidgetFragment = { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null };

export type SearchWidgetFragment = { __typename: 'SearchWidget', kind: string, query: string, ward: string };

export type CustomWidgetFragment = { __typename: 'CustomWidget', kind: string, hook?: string | null };

export type ChoiceWidgetFragment = { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null };

export type LinkWidgetFragment = { __typename?: 'LinkWidget', kind: string, linkbuilder?: string | null };

export type ChildPortNestedFragment = { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null };

export type ChildPortFragment = { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null };

export type DependencyFragment = { __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any };

export type EffectFragment = { __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null };

type InputWidget_BoolWidget_Fragment = { __typename: 'BoolWidget', kind: string };

type InputWidget_ChoiceWidget_Fragment = { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null };

type InputWidget_ColorWidget_Fragment = { __typename: 'ColorWidget', kind: string };

type InputWidget_CustomWidget_Fragment = { __typename: 'CustomWidget', kind: string, hook?: string | null };

type InputWidget_DateWidget_Fragment = { __typename: 'DateWidget', kind: string };

type InputWidget_IntWidget_Fragment = { __typename: 'IntWidget', kind: string };

type InputWidget_LinkWidget_Fragment = { __typename: 'LinkWidget', kind: string };

type InputWidget_QueryWidget_Fragment = { __typename: 'QueryWidget', kind: string };

type InputWidget_SearchWidget_Fragment = { __typename: 'SearchWidget', kind: string, query: string, ward: string };

type InputWidget_SliderWidget_Fragment = { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null };

type InputWidget_StringWidget_Fragment = { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null };

type InputWidget_TemplateWidget_Fragment = { __typename: 'TemplateWidget', kind: string };

export type InputWidgetFragment = InputWidget_BoolWidget_Fragment | InputWidget_ChoiceWidget_Fragment | InputWidget_ColorWidget_Fragment | InputWidget_CustomWidget_Fragment | InputWidget_DateWidget_Fragment | InputWidget_IntWidget_Fragment | InputWidget_LinkWidget_Fragment | InputWidget_QueryWidget_Fragment | InputWidget_SearchWidget_Fragment | InputWidget_SliderWidget_Fragment | InputWidget_StringWidget_Fragment | InputWidget_TemplateWidget_Fragment;

export type PortFragment = { __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: Scope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string | null> | null, effects?: Array<{ __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, annotations?: Array<{ __typename?: 'AttributePredicate' } | { __typename?: 'CustomAnnotation' } | { __typename?: 'IsPredicate' } | { __typename?: 'ValueRange', min: number, max: number } | null> | null };

export type ImageReturnWidgetFragment = { __typename: 'ImageReturnWidget', query?: string | null, kind: string, ward?: string | null };

export type CustomReturnWidgetFragment = { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null };

export type ChoiceReturnWidgetFragment = { __typename: 'ChoiceReturnWidget', choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null };

type ReturnWidget_ChoiceReturnWidget_Fragment = { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null };

type ReturnWidget_CustomReturnWidget_Fragment = { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null };

type ReturnWidget_ImageReturnWidget_Fragment = { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null };

export type ReturnWidgetFragment = ReturnWidget_ChoiceReturnWidget_Fragment | ReturnWidget_CustomReturnWidget_Fragment | ReturnWidget_ImageReturnWidget_Fragment;

export type PortGroupFragment = { __typename?: 'PortGroup', key: string, hidden?: boolean | null };

export type PortsFragment = { __typename?: 'Node', args?: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: Scope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string | null> | null, effects?: Array<{ __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, annotations?: Array<{ __typename?: 'AttributePredicate' } | { __typename?: 'CustomAnnotation' } | { __typename?: 'IsPredicate' } | { __typename?: 'ValueRange', min: number, max: number } | null> | null } | null> | null, returns?: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: Scope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string | null> | null, effects?: Array<{ __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, annotations?: Array<{ __typename?: 'AttributePredicate' } | { __typename?: 'CustomAnnotation' } | { __typename?: 'IsPredicate' } | { __typename?: 'ValueRange', min: number, max: number } | null> | null } | null> | null, portGroups?: Array<{ __typename?: 'PortGroup', key: string, hidden?: boolean | null } | null> | null };

export type PostmanReservationFragment = { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string, statusmessage: string };

export type AcknowledgeMutationVariables = Exact<{
  assignation: Scalars['ID'];
}>;


export type AcknowledgeMutation = { __typename?: 'Mutation', ack?: { __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null } | null };

export type AssignMutationVariables = Exact<{
  reservation: Scalars['ID'];
  args: Array<InputMaybe<Scalars['AnyInput']>>;
}>;


export type AssignMutation = { __typename?: 'Mutation', assign?: { __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null } | null };

export type ReserveMutationVariables = Exact<{
  instanceId: Scalars['ID'];
  node?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['ID']>;
  params?: InputMaybe<ReserveParamsInput>;
  binds?: InputMaybe<ReserveBindsInput>;
  title?: InputMaybe<Scalars['String']>;
  imitate?: InputMaybe<Scalars['ID']>;
  allowAutoRequest?: InputMaybe<Scalars['Boolean']>;
}>;


export type ReserveMutation = { __typename?: 'Mutation', reserve?: { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string, statusmessage: string } | null };

export type UnassignMutationVariables = Exact<{
  assignation: Scalars['ID'];
}>;


export type UnassignMutation = { __typename?: 'Mutation', unassign?: { __typename?: 'Assignation', id: string } | null };

export type UnreserveMutationVariables = Exact<{
  reservation: Scalars['ID'];
}>;


export type UnreserveMutation = { __typename?: 'Mutation', unreserve?: { __typename?: 'UnreserveResult', id: string } | null };

export type AssignationsQueryVariables = Exact<{
  instanceId: Scalars['String'];
}>;


export type AssignationsQuery = { __typename?: 'Query', requests?: Array<{ __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null } | null> | null };

export type ConstantNodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ConstantNodeQuery = { __typename?: 'Query', node?: { __typename?: 'Node', args?: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: Scope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string | null> | null, effects?: Array<{ __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, annotations?: Array<{ __typename?: 'AttributePredicate' } | { __typename?: 'CustomAnnotation' } | { __typename?: 'IsPredicate' } | { __typename?: 'ValueRange', min: number, max: number } | null> | null } | null> | null, returns?: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: Scope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string | null> | null, effects?: Array<{ __typename: 'Effect', kind: EffectKind, message?: string | null, dependencies?: Array<{ __typename?: 'Dependency', key?: string | null, condition: LogicalCondition, value: any } | null> | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: Scope, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, assignWidget?: { __typename: 'BoolWidget', kind: string } | { __typename: 'ChoiceWidget', kind: string, choices?: Array<{ __typename?: 'Choice', value: any, label: string, description?: string | null } | null> | null } | { __typename: 'ColorWidget', kind: string } | { __typename: 'CustomWidget', kind: string, hook?: string | null } | { __typename: 'DateWidget', kind: string } | { __typename: 'IntWidget', kind: string } | { __typename: 'LinkWidget', kind: string } | { __typename: 'QueryWidget', kind: string } | { __typename: 'SearchWidget', kind: string, query: string, ward: string } | { __typename: 'SliderWidget', kind: string, min?: number | null, max?: number | null } | { __typename: 'StringWidget', kind: string, placeholder?: string | null, asParagraph?: boolean | null } | { __typename: 'TemplateWidget', kind: string } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: string, choices?: Array<{ __typename?: 'Choice', label: string, value: any, description?: string | null } | null> | null } | { __typename: 'CustomReturnWidget', kind: string, hook?: string | null, ward?: string | null } | { __typename: 'ImageReturnWidget', kind: string, query?: string | null, ward?: string | null } | null } | null> | null, annotations?: Array<{ __typename?: 'AttributePredicate' } | { __typename?: 'CustomAnnotation' } | { __typename?: 'IsPredicate' } | { __typename?: 'ValueRange', min: number, max: number } | null> | null } | null> | null, portGroups?: Array<{ __typename?: 'PortGroup', key: string, hidden?: boolean | null } | null> | null } | null };

export type ReservationsQueryVariables = Exact<{
  instanceId: Scalars['String'];
}>;


export type ReservationsQuery = { __typename?: 'Query', reservations?: Array<{ __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string, statusmessage: string } | null> | null };

export type WatchAssignationsSubscriptionVariables = Exact<{
  instanceId: Scalars['String'];
}>;


export type WatchAssignationsSubscription = { __typename?: 'Subscription', requests?: { __typename?: 'AssignationsEvent', delete?: string | null, create?: { __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null } | null, update?: { __typename?: 'Assignation', id: string, status: AssignationStatus, statusmessage: string, args?: Array<any | null> | null, kwargs?: any | null, reference: string, progress?: number | null, returns?: Array<any | null> | null } | null } | null };

export type WatchReservationsSubscriptionVariables = Exact<{
  instanceId: Scalars['String'];
}>;


export type WatchReservationsSubscription = { __typename?: 'Subscription', reservations?: { __typename?: 'ReservationsEvent', delete?: string | null, create?: { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string, statusmessage: string } | null, update?: { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string, statusmessage: string } | null } | null };

export const PostmanAssignationFragmentDoc = gql`
    fragment PostmanAssignation on Assignation {
  id
  status
  statusmessage
  args
  kwargs
  reference
  progress
  returns
}
    `;
export const BoolWidgetFragmentDoc = gql`
    fragment BoolWidget on BoolWidget {
  kind
}
    `;
export const LinkWidgetFragmentDoc = gql`
    fragment LinkWidget on LinkWidget {
  kind
  linkbuilder
}
    `;
export const DependencyFragmentDoc = gql`
    fragment Dependency on Dependency {
  key
  condition
  value
}
    `;
export const EffectFragmentDoc = gql`
    fragment Effect on Effect {
  __typename
  kind
  message
  dependencies {
    ...Dependency
  }
}
    ${DependencyFragmentDoc}`;
export const IntWidgetFragmentDoc = gql`
    fragment IntWidget on IntWidget {
  kind
}
    `;
export const StringWidgetFragmentDoc = gql`
    fragment StringWidget on StringWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `;
export const SearchWidgetFragmentDoc = gql`
    fragment SearchWidget on SearchWidget {
  __typename
  kind
  query
  ward
}
    `;
export const SliderWidgetFragmentDoc = gql`
    fragment SliderWidget on SliderWidget {
  __typename
  kind
  min
  max
}
    `;
export const ChoiceWidgetFragmentDoc = gql`
    fragment ChoiceWidget on ChoiceWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `;
export const CustomWidgetFragmentDoc = gql`
    fragment CustomWidget on CustomWidget {
  __typename
  kind
  hook
}
    `;
export const InputWidgetFragmentDoc = gql`
    fragment InputWidget on Widget {
  __typename
  kind
  ...IntWidget
  ...StringWidget
  ...SearchWidget
  ...SliderWidget
  ...ChoiceWidget
  ...CustomWidget
}
    ${IntWidgetFragmentDoc}
${StringWidgetFragmentDoc}
${SearchWidgetFragmentDoc}
${SliderWidgetFragmentDoc}
${ChoiceWidgetFragmentDoc}
${CustomWidgetFragmentDoc}`;
export const ImageReturnWidgetFragmentDoc = gql`
    fragment ImageReturnWidget on ImageReturnWidget {
  __typename
  query
  kind
  ward
}
    `;
export const CustomReturnWidgetFragmentDoc = gql`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `;
export const ChoiceReturnWidgetFragmentDoc = gql`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `;
export const ReturnWidgetFragmentDoc = gql`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...ImageReturnWidget
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${ImageReturnWidgetFragmentDoc}
${CustomReturnWidgetFragmentDoc}
${ChoiceReturnWidgetFragmentDoc}`;
export const ChildPortNestedFragmentDoc = gql`
    fragment ChildPortNested on ChildPort {
  kind
  identifier
  child {
    kind
    identifier
    scope
    assignWidget {
      ...InputWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  variants {
    kind
    identifier
    scope
    assignWidget {
      ...InputWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  scope
  assignWidget {
    ...InputWidget
  }
  returnWidget {
    ...ReturnWidget
  }
}
    ${InputWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const ChildPortFragmentDoc = gql`
    fragment ChildPort on ChildPort {
  kind
  identifier
  scope
  child {
    ...ChildPortNested
  }
  variants {
    ...ChildPortNested
  }
  assignWidget {
    ...InputWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  nullable
}
    ${ChildPortNestedFragmentDoc}
${InputWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const PortFragmentDoc = gql`
    fragment Port on Port {
  __typename
  key
  label
  nullable
  description
  scope
  effects {
    ...Effect
  }
  assignWidget {
    ...InputWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  kind
  identifier
  child {
    ...ChildPort
  }
  variants {
    ...ChildPort
  }
  default
  nullable
  annotations {
    ... on ValueRange {
      min
      max
    }
  }
  groups
}
    ${EffectFragmentDoc}
${InputWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}
${ChildPortFragmentDoc}`;
export const PortGroupFragmentDoc = gql`
    fragment PortGroup on PortGroup {
  key
  hidden
}
    `;
export const PortsFragmentDoc = gql`
    fragment Ports on Node {
  args {
    ...Port
  }
  returns {
    ...Port
  }
  portGroups {
    ...PortGroup
  }
}
    ${PortFragmentDoc}
${PortGroupFragmentDoc}`;
export const PostmanReservationFragmentDoc = gql`
    fragment PostmanReservation on Reservation {
  title
  status
  id
  reference
  statusmessage
}
    `;
export const AcknowledgeDocument = gql`
    mutation Acknowledge($assignation: ID!) {
  ack(assignation: $assignation) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;
export type AcknowledgeMutationFn = Apollo.MutationFunction<AcknowledgeMutation, AcknowledgeMutationVariables>;

/**
 * __useAcknowledgeMutation__
 *
 * To run a mutation, you first call `useAcknowledgeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcknowledgeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acknowledgeMutation, { data, loading, error }] = useAcknowledgeMutation({
 *   variables: {
 *      assignation: // value for 'assignation'
 *   },
 * });
 */
export function useAcknowledgeMutation(baseOptions?: Apollo.MutationHookOptions<AcknowledgeMutation, AcknowledgeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcknowledgeMutation, AcknowledgeMutationVariables>(AcknowledgeDocument, options);
      }
export type AcknowledgeMutationHookResult = ReturnType<typeof useAcknowledgeMutation>;
export type AcknowledgeMutationResult = Apollo.MutationResult<AcknowledgeMutation>;
export type AcknowledgeMutationOptions = Apollo.BaseMutationOptions<AcknowledgeMutation, AcknowledgeMutationVariables>;
export const AssignDocument = gql`
    mutation Assign($reservation: ID!, $args: [AnyInput]!) {
  assign(reservation: $reservation, args: $args) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;
export type AssignMutationFn = Apollo.MutationFunction<AssignMutation, AssignMutationVariables>;

/**
 * __useAssignMutation__
 *
 * To run a mutation, you first call `useAssignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignMutation, { data, loading, error }] = useAssignMutation({
 *   variables: {
 *      reservation: // value for 'reservation'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useAssignMutation(baseOptions?: Apollo.MutationHookOptions<AssignMutation, AssignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignMutation, AssignMutationVariables>(AssignDocument, options);
      }
export type AssignMutationHookResult = ReturnType<typeof useAssignMutation>;
export type AssignMutationResult = Apollo.MutationResult<AssignMutation>;
export type AssignMutationOptions = Apollo.BaseMutationOptions<AssignMutation, AssignMutationVariables>;
export const ReserveDocument = gql`
    mutation Reserve($instanceId: ID!, $node: ID, $hash: String, $template: ID, $params: ReserveParamsInput, $binds: ReserveBindsInput, $title: String, $imitate: ID, $allowAutoRequest: Boolean) {
  reserve(
    instanceId: $instanceId
    node: $node
    template: $template
    hash: $hash
    params: $params
    binds: $binds
    title: $title
    allowAutoRequest: $allowAutoRequest
    imitate: $imitate
  ) {
    ...PostmanReservation
  }
}
    ${PostmanReservationFragmentDoc}`;
export type ReserveMutationFn = Apollo.MutationFunction<ReserveMutation, ReserveMutationVariables>;

/**
 * __useReserveMutation__
 *
 * To run a mutation, you first call `useReserveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReserveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reserveMutation, { data, loading, error }] = useReserveMutation({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *      node: // value for 'node'
 *      hash: // value for 'hash'
 *      template: // value for 'template'
 *      params: // value for 'params'
 *      binds: // value for 'binds'
 *      title: // value for 'title'
 *      imitate: // value for 'imitate'
 *      allowAutoRequest: // value for 'allowAutoRequest'
 *   },
 * });
 */
export function useReserveMutation(baseOptions?: Apollo.MutationHookOptions<ReserveMutation, ReserveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReserveMutation, ReserveMutationVariables>(ReserveDocument, options);
      }
export type ReserveMutationHookResult = ReturnType<typeof useReserveMutation>;
export type ReserveMutationResult = Apollo.MutationResult<ReserveMutation>;
export type ReserveMutationOptions = Apollo.BaseMutationOptions<ReserveMutation, ReserveMutationVariables>;
export const UnassignDocument = gql`
    mutation Unassign($assignation: ID!) {
  unassign(assignation: $assignation) {
    id
  }
}
    `;
export type UnassignMutationFn = Apollo.MutationFunction<UnassignMutation, UnassignMutationVariables>;

/**
 * __useUnassignMutation__
 *
 * To run a mutation, you first call `useUnassignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnassignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unassignMutation, { data, loading, error }] = useUnassignMutation({
 *   variables: {
 *      assignation: // value for 'assignation'
 *   },
 * });
 */
export function useUnassignMutation(baseOptions?: Apollo.MutationHookOptions<UnassignMutation, UnassignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnassignMutation, UnassignMutationVariables>(UnassignDocument, options);
      }
export type UnassignMutationHookResult = ReturnType<typeof useUnassignMutation>;
export type UnassignMutationResult = Apollo.MutationResult<UnassignMutation>;
export type UnassignMutationOptions = Apollo.BaseMutationOptions<UnassignMutation, UnassignMutationVariables>;
export const UnreserveDocument = gql`
    mutation Unreserve($reservation: ID!) {
  unreserve(id: $reservation) {
    id
  }
}
    `;
export type UnreserveMutationFn = Apollo.MutationFunction<UnreserveMutation, UnreserveMutationVariables>;

/**
 * __useUnreserveMutation__
 *
 * To run a mutation, you first call `useUnreserveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnreserveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unreserveMutation, { data, loading, error }] = useUnreserveMutation({
 *   variables: {
 *      reservation: // value for 'reservation'
 *   },
 * });
 */
export function useUnreserveMutation(baseOptions?: Apollo.MutationHookOptions<UnreserveMutation, UnreserveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnreserveMutation, UnreserveMutationVariables>(UnreserveDocument, options);
      }
export type UnreserveMutationHookResult = ReturnType<typeof useUnreserveMutation>;
export type UnreserveMutationResult = Apollo.MutationResult<UnreserveMutation>;
export type UnreserveMutationOptions = Apollo.BaseMutationOptions<UnreserveMutation, UnreserveMutationVariables>;
export const AssignationsDocument = gql`
    query Assignations($instanceId: String!) {
  requests(exclude: [DONE, CRITICAL], instanceId: $instanceId) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;

/**
 * __useAssignationsQuery__
 *
 * To run a query within a React component, call `useAssignationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignationsQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useAssignationsQuery(baseOptions: Apollo.QueryHookOptions<AssignationsQuery, AssignationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignationsQuery, AssignationsQueryVariables>(AssignationsDocument, options);
      }
export function useAssignationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignationsQuery, AssignationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignationsQuery, AssignationsQueryVariables>(AssignationsDocument, options);
        }
export type AssignationsQueryHookResult = ReturnType<typeof useAssignationsQuery>;
export type AssignationsLazyQueryHookResult = ReturnType<typeof useAssignationsLazyQuery>;
export type AssignationsQueryResult = Apollo.QueryResult<AssignationsQuery, AssignationsQueryVariables>;
export const ConstantNodeDocument = gql`
    query ConstantNode($id: ID!) {
  node(id: $id) {
    ...Ports
  }
}
    ${PortsFragmentDoc}`;

/**
 * __useConstantNodeQuery__
 *
 * To run a query within a React component, call `useConstantNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useConstantNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConstantNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConstantNodeQuery(baseOptions: Apollo.QueryHookOptions<ConstantNodeQuery, ConstantNodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConstantNodeQuery, ConstantNodeQueryVariables>(ConstantNodeDocument, options);
      }
export function useConstantNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConstantNodeQuery, ConstantNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConstantNodeQuery, ConstantNodeQueryVariables>(ConstantNodeDocument, options);
        }
export type ConstantNodeQueryHookResult = ReturnType<typeof useConstantNodeQuery>;
export type ConstantNodeLazyQueryHookResult = ReturnType<typeof useConstantNodeLazyQuery>;
export type ConstantNodeQueryResult = Apollo.QueryResult<ConstantNodeQuery, ConstantNodeQueryVariables>;
export const ReservationsDocument = gql`
    query Reservations($instanceId: String!) {
  reservations(exclude: [ENDED, CRITICAL, CANCELLED], instanceId: $instanceId) {
    ...PostmanReservation
  }
}
    ${PostmanReservationFragmentDoc}`;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useReservationsQuery(baseOptions: Apollo.QueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
      }
export function useReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
        }
export type ReservationsQueryHookResult = ReturnType<typeof useReservationsQuery>;
export type ReservationsLazyQueryHookResult = ReturnType<typeof useReservationsLazyQuery>;
export type ReservationsQueryResult = Apollo.QueryResult<ReservationsQuery, ReservationsQueryVariables>;
export const WatchAssignationsDocument = gql`
    subscription WatchAssignations($instanceId: String!) {
  requests(instanceId: $instanceId) {
    create {
      ...PostmanAssignation
    }
    delete
    update {
      ...PostmanAssignation
    }
  }
}
    ${PostmanAssignationFragmentDoc}`;

/**
 * __useWatchAssignationsSubscription__
 *
 * To run a query within a React component, call `useWatchAssignationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchAssignationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchAssignationsSubscription({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useWatchAssignationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<WatchAssignationsSubscription, WatchAssignationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WatchAssignationsSubscription, WatchAssignationsSubscriptionVariables>(WatchAssignationsDocument, options);
      }
export type WatchAssignationsSubscriptionHookResult = ReturnType<typeof useWatchAssignationsSubscription>;
export type WatchAssignationsSubscriptionResult = Apollo.SubscriptionResult<WatchAssignationsSubscription>;
export const WatchReservationsDocument = gql`
    subscription WatchReservations($instanceId: String!) {
  reservations(instanceId: $instanceId) {
    create {
      ...PostmanReservation
    }
    delete
    update {
      ...PostmanReservation
    }
  }
}
    ${PostmanReservationFragmentDoc}`;

/**
 * __useWatchReservationsSubscription__
 *
 * To run a query within a React component, call `useWatchReservationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchReservationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchReservationsSubscription({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useWatchReservationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<WatchReservationsSubscription, WatchReservationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WatchReservationsSubscription, WatchReservationsSubscriptionVariables>(WatchReservationsDocument, options);
      }
export type WatchReservationsSubscriptionHookResult = ReturnType<typeof useWatchReservationsSubscription>;
export type WatchReservationsSubscriptionResult = Apollo.SubscriptionResult<WatchReservationsSubscription>;