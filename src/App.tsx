import { useState } from "react";
import "./App.css";
import {
  FaktsProvider,
  FaktsGuard,
  useFakts,
  WellKnownDiscovery,
} from "@jhnnsrs/fakts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Callback } from "./contrib/Callback";
import { NoHerre } from "./NoHerre";
import { HerreGuard, HerreProvider, useHerre } from "@jhnnsrs/herre";
import { RekuestGuard, RekuestProvider, withRekuest } from "./rekuest";
import { RekuestAutoConfigure } from "./contrib/RekuestAutoConfigure";
import { NoRekuest } from "./NoRekuest";
import { FaktsLogin } from "./contrib/FaktsLogin";
import { PostmanProvider } from "./rekuest/postman/PostmanProvider";
import { TestNode } from "./contrib/TestNode";
import { WidgetRegistry } from "./rekuest/widgets/Registry";
import { WidgetRegistryProvider } from "./rekuest/widgets/WidgetsProvider";

export const ProtectedApp = () => {
  return (
    <HerreGuard fallback={<NoHerre />}>
      <RekuestProvider>
        <WidgetRegistryProvider>
          <PostmanProvider>
            <RekuestAutoConfigure />
            <RekuestGuard fallback={<NoRekuest />}>
              <TestNode />
            </RekuestGuard>
          </PostmanProvider>
        </WidgetRegistryProvider>
      </RekuestProvider>
    </HerreGuard>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FaktsProvider>
        <WellKnownDiscovery endpoints={["http://100.91.169.37:8000"]} />
        <FaktsGuard fallback={<FaktsLogin />}>
          <HerreProvider>
            <Router>
              <Routes>
                <Route path="/" element={<ProtectedApp />} />
                <Route path="/callback" element={<Callback />} />
              </Routes>
            </Router>
          </HerreProvider>
        </FaktsGuard>
      </FaktsProvider>
    </div>
  );
}

export default App;
