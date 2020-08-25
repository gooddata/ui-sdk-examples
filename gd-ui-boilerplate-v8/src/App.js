import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { newMeasure, newAttribute } from "@gooddata/sdk-model";
import bearFactory, {
  ContextDeferredAuthProvider
} from "@gooddata/sdk-backend-bear";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "./App.css";

const backend = bearFactory().withAuthentication(
  new ContextDeferredAuthProvider()
);

function App() {
  const measures = [newMeasure("aaEGaXAEgB7U", m => m.format("#,##0"))];
  const attribute = newAttribute("date.abm81lMifn6q");

  return (
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace="xms7ga4tf3g3nzucd8380o2bev8oeknp">
        <div className="App">
          <div style={{ height: 500 }}>
            <LineChart
              measures={measures}
              trendBy={attribute}
              config={{
                colors: ["#14b2e2"]
              }}
            />
          </div>
        </div>
      </WorkspaceProvider>
    </BackendProvider>
  );
}

export default App;
