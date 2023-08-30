import React, { useEffect } from "react";
import { useFakts } from "@jhnnsrs/fakts";
import { useHerre } from "@jhnnsrs/herre";
import result from "../api/lok/fragments";
import { useRekuest } from "../rekuest";

export const RekuestAutoConfigure: React.FC<{}> = (props) => {
  const { configure } = useRekuest();
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (token && fakts.rekuest) {
      configure({
        secure: fakts.rekuest.secure,
        wsEndpointUrl: fakts.rekuest.ws_endpoint_url,
        endpointUrl: fakts.rekuest.endpoint_url,
        possibleTypes: result.possibleTypes,
        retrieveToken: () => token,
      });
    }
  }, [token, fakts]);

  return <> </>;
};
