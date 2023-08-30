import { useFakts } from "@jhnnsrs/fakts";
import React from "react";
import { useHerre } from "@jhnnsrs/herre";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoHerre: React.FC<PublicHomeProps> = (props) => {
  const { login, logout, token } = useHerre();
  const { fakts, setFakts } = useFakts();

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline text-white">fdf </span>{" "}
          <span className="block text-primary-300 xl:inline drop-shadow-2xl "></span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Login in with your local arkitekt to enjoy all of your benefits or
          enjoy the public demo
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            {token ? (
              <div className="flex flex-row  gap-2">hmm</div>
            ) : (
              <button
                onClick={() =>
                  login(
                    {
                      clientId: fakts.lok.client_id,
                      clientSecret: fakts.lok.client_secret,
                      scopes: fakts.lok.scopes,
                      redirectUri: window.location.origin + "/callback",
                    },
                    {
                      base_url: fakts.lok.base_url,
                      tokenUrl: fakts.lok.base_url + "/token/",
                      userInfoEndpoint: fakts.lok.base_url + "/userinfo/",
                      authUrl: fakts.lok.base_url + "/authorize/",
                    }
                  )
                }
                className="w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
              >
                Login with {fakts?.lok?.base_url}
              </button>
            )}
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              onClick={() => {
                logout();
                setFakts(null);
              }}
              className="w-full flex items-center justify-center  border-gray-500  border-dotted shadow-lg shadow-white/30 px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
