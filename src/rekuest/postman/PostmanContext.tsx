import React, { useContext } from "react";
import {
  AcknowledgeMutationVariables,
  AssignMutationVariables,
  PostmanAssignationFragment,
  PostmanReservationFragment,
  ReserveMutationVariables,
  UnassignMutationVariables,
  UnreserveMutationVariables,
} from "../api/graphql";

export type Delay = {};

export type PostmanContextType = Postman & {
  setPostman: (postman: Postman) => void;
};

export type AssignVariables = Exclude<AssignMutationVariables, "id">;
export type ReserveVariables = Omit<ReserveMutationVariables, "instanceId">;
export type UnassignVariables = Exclude<UnassignMutationVariables, "id">;
export type UnreserveVariables = Exclude<UnreserveMutationVariables, "id">;
export type AckVariables = Exclude<AcknowledgeMutationVariables, "id">;

export type Reservation = PostmanReservationFragment;
export type Assignation = PostmanAssignationFragment;
export type Unreservation = { id: string };
export type Unprovision = { id: string };
export type Uassignation = { id: string };

export type Postman = {
  reserve: (x: ReserveVariables) => Promise<Reservation>;
  unreserve: (x: UnreserveVariables) => Promise<Unreservation>;
  assign: (x: AssignVariables) => Promise<Assignation>;
  ack: (x: AckVariables) => Promise<Assignation>;
  unassign: (x: UnassignVariables) => Promise<Uassignation>;
};

const NO_POSTMAN_SET = "No postman set";

export const PostmanContext = React.createContext<PostmanContextType>({
  reserve: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  unreserve: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  assign: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  ack: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  unassign: async () => {
    throw new Error(NO_POSTMAN_SET);
  },
  setPostman: (postman: Postman | undefined) => {
    throw new Error(
      "Set postman is not implemented. Do you have a Postman provider?"
    );
  },
});

export const usePostman = () => useContext(PostmanContext);
