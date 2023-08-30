import { ReactNode } from "react";
import { EffectFragment, PortFragment } from "../api/graphql";
import { WidgetRegistryType } from "./types";

export const EffectWrapper = ({
  effects,
  registry,
  children,
  port,
}: {
  registry: WidgetRegistryType;
  effects: (EffectFragment | null | undefined)[];
  children: ReactNode;
  port: PortFragment;
}) => {
  let [effect, ...resteffect] = effects;

  if (effect) {
    let Wrapper = registry.getEffectWidget(effect.kind);

    return (
      <Wrapper effect={effect} port={port}>
        <EffectWrapper effects={resteffect} port={port} registry={registry}>
          {children}
        </EffectWrapper>
      </Wrapper>
    );
  }

  return <>{children}</>;
};
