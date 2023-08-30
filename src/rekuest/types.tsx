import {
  ApolloClient,
  NormalizedCacheObject,
  PossibleTypesMap,
} from "@apollo/client";

export type RekuestConfig = {
  endpointUrl: string;
  wsEndpointUrl: string;
  secure: boolean;
  retrieveToken: () => string;
  possibleTypes?: PossibleTypesMap;
};

export type RekuestState = {
  config?: RekuestConfig;
  client?: RekuestClient;
};

export type RekuestContextType = RekuestState & {
  configure: (config: RekuestConfig) => void;
};

export type RekuestClient = ApolloClient<NormalizedCacheObject>;
