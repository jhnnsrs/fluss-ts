import { useFakts } from "fakts";
import { Form, Formik } from "formik";
import React from "react";
import { useHerre } from "@jhnnsrs/herre";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoRekuest: React.FC<PublicHomeProps> = (props) => {
  const { login, logout, token } = useHerre();
  const { fakts, setFakts } = useFakts();

  return (
    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          No Rekuest yet
        </h1>
      </div>
    </main>
  );
};
