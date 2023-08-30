import { withRekuest } from "../rekuest";
import { useConstantNodeQuery } from "../rekuest/api/graphql";
import { useWidgetRegistry } from "../rekuest/widgets/WidgetsContext";
import { ArgsContainer } from "../rekuest/widgets/tailwind";

export const TestNode: React.FC = (props) => {
  const { data } = withRekuest(useConstantNodeQuery)({
    variables: {
      id: "2881",
    },
  });

  const { registry } = useWidgetRegistry();

  return (
    <>
      {data?.node?.args && (
        <ArgsContainer
          registry={registry}
          ports={data?.node.args || []}
          groups={data?.node.portGroups || []}
        />
      )}
    </>
  );
};
