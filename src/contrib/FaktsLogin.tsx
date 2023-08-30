import { useFakts } from "@jhnnsrs/fakts";

const manifest = {
  version: "latest",
  identifier: "github.io.jhnnsrs.orkestrator",
};

export const FaktsLogin: React.FC<{}> = (props) => {
  const { load, registeredEndpoints } = useFakts();

  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-2">
      {registeredEndpoints.map((e, index) => (
        <button
          key={index}
          type="button"
          onClick={() =>
            load({
              endpoint: e,
              manifest,
            }).catch((e) => {
              alert(e.message);
            })
          }
          className="w-full shadow-lg shadow-primary-700/90 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500 md:py-4 md:text-lg md:px-10"
        >
          Connect to {e.name}
        </button>
      ))}
    </div>
  );
};
