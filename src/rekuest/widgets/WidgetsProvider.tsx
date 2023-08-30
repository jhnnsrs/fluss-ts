import { OutputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import {
  EffectWidgetProps,
  InputWidgetProps,
  Port,
  ReturnWidgetProps,
  WidgetRegistryType,
} from "./types";
import { WidgetRegistry } from "./Registry";
import { WidgetRegistryContext } from "./WidgetsContext";
import { EffectFragment, Group, PortFragment, PortGroup } from "../api/graphql";
import { notEmpty } from "../utils";

export type WidgetRegistryProviderProps = {
  children: React.ReactNode;
  unknownInputWidget?: React.FC<InputWidgetProps>;
  unknownReturnWidget?: React.FC<ReturnWidgetProps>;
  unknownEffectWidget?: React.FC<EffectWidgetProps>;
};

export const UnknownInputWidget: React.FC<InputWidgetProps> = ({ port }) => {
  return (
    <div className="text-xl bg-red-200">
      Registry error! No assign Widget registered for: {port.kind} and{" "}
      {port?.assignWidget?.__typename || "unset widget"}
    </div>
  );
};

export const UnknownReturnWidget: React.FC<ReturnWidgetProps> = ({
  port,
  value,
}) => {
  return (
    <div className="text-xl bg-red-200">
      Registry error! No assign Widget registered for: {port.kind} and{" "}
      {port?.returnWidget?.__typename || "unset widget"}
      {JSON.stringify(port)}
    </div>
  );
};

export const UnknownEffectWidget: React.FC<EffectWidgetProps> = ({
  children,
  effect,
}) => {
  return (
    <div className="text-xl bg-red-200">
      Registry error! No effect registered for: {effect.kind}
      {children}
    </div>
  );
};

export const WidgetRegistryProvider: React.FC<WidgetRegistryProviderProps> = ({
  children,
  unknownInputWidget = UnknownInputWidget,
  unknownReturnWidget = UnknownReturnWidget,
  unknownEffectWidget = UnknownEffectWidget,
}) => {
  const [widgetRegistry, setWidgetRegistry] = useState<WidgetRegistryType>(
    () =>
      new WidgetRegistry(
        unknownInputWidget,
        unknownReturnWidget,
        unknownEffectWidget
      )
  );

  return (
    <WidgetRegistryContext.Provider
      value={{
        registry: widgetRegistry,
        setRegistry: setWidgetRegistry,
      }}
    >
      {children}
    </WidgetRegistryContext.Provider>
  );
};
