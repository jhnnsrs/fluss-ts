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
  Config: any;
  DateTime: any;
  Email: any;
  GenericScalar: any;
  Upload: any;
};

export type App = {
  __typename?: 'App';
  faktApplications: Array<FaktApplication>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  version: Scalars['String'];
};

export type Application = {
  __typename?: 'Application';
  algorithm?: Maybe<ApplicationAlgorithm>;
  authorizationGrantType: ApplicationAuthorizationGrantType;
  clientId: Scalars['String'];
  clientType: ApplicationClientType;
  created: Scalars['DateTime'];
  faktapplication?: Maybe<FaktApplication>;
  id: Scalars['ID'];
  /** The Url of the Image */
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** The associated Redirect Uris */
  redirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  skipAuthorization: Scalars['Boolean'];
  updated: Scalars['DateTime'];
  user?: Maybe<HerreUser>;
};

/** An enumeration. */
export enum ApplicationAlgorithm {
  /** No OIDC support */
  A = 'A_',
  /** HMAC with SHA-2 256 */
  Hs256 = 'HS256',
  /** RSA with SHA-2 256 */
  Rs256 = 'RS256'
}

/** An enumeration. */
export enum ApplicationAuthorizationGrantType {
  /** Authorization code */
  AuthorizationCode = 'AUTHORIZATION_CODE',
  /** Client credentials */
  ClientCredentials = 'CLIENT_CREDENTIALS',
  /** Implicit */
  Implicit = 'IMPLICIT',
  /** OpenID connect hybrid */
  OpenidHybrid = 'OPENID_HYBRID',
  /** Resource owner password-based */
  Password = 'PASSWORD'
}

/** An enumeration. */
export enum ApplicationClientType {
  /** Confidential */
  Confidential = 'CONFIDENTIAL',
  /** Public */
  Public = 'PUBLIC'
}

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user: HerreUser;
};

export type CreatedBackendApp = {
  __typename?: 'CreatedBackendApp';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
};

export type DeleteApplicationResult = {
  __typename?: 'DeleteApplicationResult';
  clientId?: Maybe<Scalars['ID']>;
};

export type DeleteChannelResult = {
  __typename?: 'DeleteChannelResult';
  token?: Maybe<Scalars['String']>;
};

export type DeletePrivateFaktResult = {
  __typename?: 'DeletePrivateFaktResult';
  id?: Maybe<Scalars['ID']>;
};

export type DeletePublicFaktResult = {
  __typename?: 'DeletePublicFaktResult';
  id?: Maybe<Scalars['ID']>;
};

export type DeviceCode = {
  __typename?: 'DeviceCode';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  graph?: Maybe<Graph>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scopes?: Maybe<Scalars['GenericScalar']>;
  user?: Maybe<HerreUser>;
  version?: Maybe<Scalars['String']>;
};

export type Element = {
  __typename?: 'Element';
  graph: Graph;
  id: Scalars['ID'];
  name: Scalars['String'];
  values?: Maybe<Scalars['GenericScalar']>;
};

export type FaktApplication = {
  __typename?: 'FaktApplication';
  app?: Maybe<App>;
  application: Application;
  clientId: Scalars['String'];
  clientSecret: Scalars['String'];
  creator: HerreUser;
  id: Scalars['ID'];
  kind?: Maybe<FaktApplicationKind>;
  logo?: Maybe<Scalars['String']>;
  scopes: Array<Maybe<Scalars['String']>>;
  token: Scalars['String'];
  user?: Maybe<HerreUser>;
};

/** An enumeration. */
export enum FaktApplicationKind {
  /** Dekstop */
  Desktop = 'DESKTOP',
  /** User */
  User = 'USER',
  /** Website */
  Website = 'WEBSITE'
}

export enum GrantType {
  AuthorizationCode = 'AUTHORIZATION_CODE',
  ClientCredentials = 'CLIENT_CREDENTIALS',
  Implicit = 'IMPLICIT',
  Password = 'PASSWORD'
}

export type Graph = {
  __typename?: 'Graph';
  codes: Array<DeviceCode>;
  elements: Array<Element>;
  /** Is this appearing on a selection of hosts? */
  host: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  version: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  profile?: Maybe<GroupProfile>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  userSet: Array<HerreUser>;
};

export type GroupProfile = {
  __typename?: 'GroupProfile';
  avatar?: Maybe<Scalars['String']>;
  group: Group;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type HerreUser = {
  __typename?: 'HerreUser';
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups: Array<Group>;
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  profile?: Maybe<Profile>;
  /** The associated rules of this  */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** The root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  changeMe?: Maybe<HerreUser>;
  createApplication?: Maybe<Application>;
  createChannel?: Maybe<Channel>;
  createElement?: Maybe<Element>;
  createGraph?: Maybe<Graph>;
  createPrivateFakt?: Maybe<FaktApplication>;
  createPublicFakt?: Maybe<FaktApplication>;
  createUserApp?: Maybe<CreatedBackendApp>;
  createUserLoginApp?: Maybe<Application>;
  deleteApplication?: Maybe<DeleteApplicationResult>;
  deleteChannel?: Maybe<DeleteChannelResult>;
  deletePrivateFakt?: Maybe<DeletePrivateFaktResult>;
  deletePublicFakt?: Maybe<DeletePublicFaktResult>;
  publishToChannel?: Maybe<PublishResult>;
  updateApp?: Maybe<App>;
  updateGroup?: Maybe<Group>;
  updateUser?: Maybe<HerreUser>;
};


/** The root Mutation */
export type MutationChangeMeArgs = {
  email?: InputMaybe<Scalars['Email']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


/** The root Mutation */
export type MutationCreateApplicationArgs = {
  grantType: GrantType;
  name: Scalars['String'];
  redirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The root Mutation */
export type MutationCreateChannelArgs = {
  name?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};


/** The root Mutation */
export type MutationCreateElementArgs = {
  graph: Scalars['ID'];
  name: Scalars['String'];
  values: Scalars['Config'];
};


/** The root Mutation */
export type MutationCreateGraphArgs = {
  name: Scalars['String'];
};


/** The root Mutation */
export type MutationCreatePrivateFaktArgs = {
  identifier: Scalars['String'];
  imitate?: InputMaybe<Scalars['ID']>;
  scopes: Array<InputMaybe<Scalars['String']>>;
  version: Scalars['String'];
};


/** The root Mutation */
export type MutationCreatePublicFaktArgs = {
  identifier: Scalars['String'];
  kind: PublicFaktType;
  redirectUris: Array<InputMaybe<Scalars['String']>>;
  scopes: Array<InputMaybe<Scalars['String']>>;
  version: Scalars['String'];
};


/** The root Mutation */
export type MutationCreateUserAppArgs = {
  identifier: Scalars['String'];
  name: Scalars['String'];
  version: Scalars['String'];
};


/** The root Mutation */
export type MutationCreateUserLoginAppArgs = {
  name: Scalars['String'];
  redirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The root Mutation */
export type MutationDeleteApplicationArgs = {
  clientId: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeleteChannelArgs = {
  token: Scalars['String'];
};


/** The root Mutation */
export type MutationDeletePrivateFaktArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationDeletePublicFaktArgs = {
  id: Scalars['ID'];
};


/** The root Mutation */
export type MutationPublishToChannelArgs = {
  channel: Scalars['ID'];
  message: Scalars['String'];
  title: Scalars['String'];
};


/** The root Mutation */
export type MutationUpdateAppArgs = {
  id: Scalars['ID'];
  logo?: InputMaybe<Scalars['Upload']>;
};


/** The root Mutation */
export type MutationUpdateGroupArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


/** The root Mutation */
export type MutationUpdateUserArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['Email']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  user: HerreUser;
};

export enum PublicFaktType {
  Dekstop = 'DEKSTOP',
  Website = 'WEBSITE'
}

export type PublishResult = {
  __typename?: 'PublishResult';
  channel?: Maybe<Channel>;
  status?: Maybe<Scalars['String']>;
};

/** The root Query */
export type Query = {
  __typename?: 'Query';
  app?: Maybe<App>;
  application?: Maybe<Application>;
  applications?: Maybe<Array<Maybe<Application>>>;
  apps?: Maybe<Array<Maybe<App>>>;
  client?: Maybe<Application>;
  clients?: Maybe<Array<Maybe<Application>>>;
  graphs?: Maybe<Array<Maybe<Graph>>>;
  /** Get a group */
  group?: Maybe<Group>;
  /** Get a list of users */
  groups?: Maybe<Array<Maybe<Group>>>;
  hello?: Maybe<Scalars['String']>;
  me?: Maybe<HerreUser>;
  /** Get information on your Docker Template */
  member?: Maybe<Member>;
  myapplications?: Maybe<Array<Maybe<Application>>>;
  myclients?: Maybe<Array<Maybe<Application>>>;
  /** Get a list of users */
  mygroups?: Maybe<Array<Maybe<Group>>>;
  privatefaktapp?: Maybe<FaktApplication>;
  privatefaktapps?: Maybe<Array<Maybe<FaktApplication>>>;
  publicfaktapp?: Maybe<FaktApplication>;
  publicfaktapps?: Maybe<Array<Maybe<FaktApplication>>>;
  scope?: Maybe<Scope>;
  scopes?: Maybe<Array<Maybe<Scope>>>;
  user?: Maybe<HerreUser>;
  userapp?: Maybe<Application>;
  users?: Maybe<Array<Maybe<HerreUser>>>;
  void?: Maybe<Scalars['String']>;
};


/** The root Query */
export type QueryAppArgs = {
  clientId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryApplicationArgs = {
  clientId: Scalars['ID'];
};


/** The root Query */
export type QueryAppsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryClientArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryGroupsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryMemberArgs = {
  id: Scalars['ID'];
};


/** The root Query */
export type QueryMygroupsArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryPrivatefaktappArgs = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryPublicfaktappArgs = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryScopeArgs = {
  key: Scalars['String'];
};


/** The root Query */
export type QueryScopesArgs = {
  search?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** The root Query */
export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The root Query */
export type QueryUserappArgs = {
  clientId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


/** The root Query */
export type QueryUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  search?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Scope = {
  __typename?: 'Scope';
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  value: Scalars['String'];
};

export type CreateChannelMutationVariables = Exact<{
  name: Scalars['String'];
  token: Scalars['String'];
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel?: { __typename?: 'Channel', id: string, name?: string | null, token?: string | null } | null };

export type PublishToChannelMutationVariables = Exact<{
  channel: Scalars['ID'];
  message: Scalars['String'];
  title: Scalars['String'];
}>;


export type PublishToChannelMutation = { __typename?: 'Mutation', publishToChannel?: { __typename?: 'PublishResult', status?: string | null, channel?: { __typename?: 'Channel', id: string, name?: string | null, token?: string | null } | null } | null };


export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!, $token: String!) {
  createChannel(name: $name, token: $token) {
    id
    name
    token
  }
}
    `;
export type CreateChannelMutationFn = Apollo.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, options);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const PublishToChannelDocument = gql`
    mutation PublishToChannel($channel: ID!, $message: String!, $title: String!) {
  publishToChannel(channel: $channel, message: $message, title: $title) {
    status
    channel {
      id
      name
      token
    }
  }
}
    `;
export type PublishToChannelMutationFn = Apollo.MutationFunction<PublishToChannelMutation, PublishToChannelMutationVariables>;

/**
 * __usePublishToChannelMutation__
 *
 * To run a mutation, you first call `usePublishToChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishToChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishToChannelMutation, { data, loading, error }] = usePublishToChannelMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      message: // value for 'message'
 *      title: // value for 'title'
 *   },
 * });
 */
export function usePublishToChannelMutation(baseOptions?: Apollo.MutationHookOptions<PublishToChannelMutation, PublishToChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishToChannelMutation, PublishToChannelMutationVariables>(PublishToChannelDocument, options);
      }
export type PublishToChannelMutationHookResult = ReturnType<typeof usePublishToChannelMutation>;
export type PublishToChannelMutationResult = Apollo.MutationResult<PublishToChannelMutation>;
export type PublishToChannelMutationOptions = Apollo.BaseMutationOptions<PublishToChannelMutation, PublishToChannelMutationVariables>;