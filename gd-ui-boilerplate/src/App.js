// Copyright (C) 2007-2021, GoodData(R) Corporation. All rights reserved.
import React, { useState } from "react";
import { Headline, ColumnChart } from "@gooddata/sdk-ui-charts";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { BackendProvider, WorkspaceProvider, Execute } from "@gooddata/sdk-ui";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import backend from "./backend";
import CustomBarChart from "./components/CustomBarChart";
import * as Md from "./md/full";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "./App.css";

const WORKSPACE = "xms7ga4tf3g3nzucd8380o2bev8oeknp";

function App() {
  const [filters, setFilters] = useState([]);

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
              filter={newPositiveAttributeFilter(Md.LocationCity, [])}
              onApply={filter => setFilters([filter])}
            />
          </div>
          <div>
            # of Location City:{" "}
            <Headline primaryMeasure={Md.NrLocationCity} filters={filters} />
            <br />
            <br />
          </div>
          <div style={{ height: 400 }}>
            <InsightView
              // insight="aby6oS6DbpFX"
              insight={Md.Insights.NrChecksViewedByCityStackedByLocation}
              filters={filters}
              config={{ legend: { position: "top" } }}
            />
          </div>
          <div style={{ height: 400 }}>
            <ColumnChart
              measures={[Md.NrChecks]}
              viewBy={Md.LocationCity}
              stackBy={Md.LocationName.Default}
              filters={filters}
            />
          </div>
          <div style={{ height: 400 }}>
            <Execute
              seriesBy={[Md.NrChecks]}
              slicesBy={[Md.LocationCity]}
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
