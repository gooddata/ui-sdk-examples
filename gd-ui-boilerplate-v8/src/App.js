// Copyright (C) 2007-2020, GoodData(R) Corporation. All rights reserved.
import React, { useState, useEffect } from "react";
import { Headline, ColumnChart } from "@gooddata/sdk-ui-charts";
import { newAttribute, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { BackendProvider, WorkspaceProvider, Execute } from "@gooddata/sdk-ui";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import backend from "./backend";
import CustomBarChart from "./components/CustomBarChart";
import { loginMachinery } from "./utils";
import * as Ldm from "./ldm/full";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "./App.css";

const WORKSPACE = "xms7ga4tf3g3nzucd8380o2bev8oeknp";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    loginMachinery(
      {
        sdk: backend.sdk,
        projectId: WORKSPACE,
        domain: backend.config.hostname
      },
      () => setIsLogged(true)
    );
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  return (
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace={WORKSPACE}>
        <div className="App">
          <div
            style={{
              width: 400,
              margin: "auto",
              marginBottom: 20,
              marginTop: 20
            }}
          >
            <AttributeFilter
              filter={newPositiveAttributeFilter(
                Ldm.LocationCity,
                []
              )}
              onApply={filter => setFilters([filter])}
            />
          </div>
          <div>
            # of Location City:{" "}
            <Headline primaryMeasure={Ldm.NrLocationCity} filters={filters} />
            <br />
            <br />
          </div>
          <div style={{ height: 400 }}>
            <InsightView
              // insight="aby6oS6DbpFX"
              insight={Ldm.Insights.NrChecksViewedByCityStackedByLocation}
              filters={filters}
              config={{ legend: { position: "top" } }}
            />
          </div>
          <div style={{ height: 400 }}>
            <ColumnChart
              measures={[Ldm.NrChecks]}
              viewBy={Ldm.LocationCity}
              stackBy={Ldm.LocationName.Default}
              filters={filters}
            />
          </div>
          <div style={{ height: 400 }}>
            <Execute
              seriesBy={[Ldm.NrChecks]}
              slicesBy={[Ldm.LocationCity]}
              filters={filters}
              children={CustomBarChart}
            />
          </div>
        </div>
      </WorkspaceProvider>
    </BackendProvider>
  );
}

export default App;
