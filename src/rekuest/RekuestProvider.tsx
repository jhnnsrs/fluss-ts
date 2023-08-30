import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useState } from "react";
import { createRekuestClient } from "./client";
import { RekuestContext } from "./RekuestContext";
import { RekuestConfig, RekuestState } from "./types";

export type RekuestProps = {
  children: React.ReactNode;
  clientCreator?: (
    config: RekuestConfig
  ) => ApolloClient<NormalizedCacheObject>;
};

export const RekuestProvider: React.FC<RekuestProps> = ({
  children,
  clientCreator = createRekuestClient,
}) => {
  const [state, setState] = useState<RekuestState>({
    config: undefined,
    client: undefined,
  });

  const configure = (config?: RekuestConfig) => {
    if (!config) {
      setState({
        config: undefined,
        client: undefined,
      });
      return;
    }

    setState({ config: config, client: clientCreator(config) });
  };

  return (
    <RekuestContext.Provider
      value={{
        configure: configure,
        ...state,
      }}
    >
      {children}
    </RekuestContext.Provider>
  );
};
