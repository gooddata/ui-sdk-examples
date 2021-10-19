// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React, { Component } from "react";
import {
  Kpi,
  Visualization,
  ColumnChart,
  Execute,
  AttributeElements
} from "@gooddata/react-components";
import Select from "react-select";
import html2canvas from "html2canvas";

import C from "./catalog";
import CustomBarChart from "./CustomBarChart";
import logo from "./logo.svg";
import "@gooddata/react-components/styles/css/main.css";
import "react-select/dist/react-select.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(options) {
    if (options.length) {
      this.setState({
        filters: [
          {
            positiveAttributeFilter: {
              displayForm: {
                identifier: C.attributeDisplayForm("Location City")
              },
              in: options.map(option => option.value)
            }
          }
        ]
      });
    } else {
      this.setState({
        filters: []
      });
    }
  }

  render() {
    const { filters } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a
            href="#"
            style={{ margin: 2, color: "white" }}
            onClick={() => {
              html2canvas(document.querySelector(".App-intro")).then(canvas => {
                const link = document.createElement("a");
                link.setAttribute("href", canvas.toDataURL("image/png"));
                link.setAttribute("download", "export.png");
                link.click();
              });
            }}
          >
            PNG
          </a>
        </header>
        <div className="App-intro">
          <div style={{ width: 400, margin: "auto", marginBottom: 20 }}>
            <AttributeElements
              projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
              identifier={C.attributeDisplayForm("Location City")}
              options={{ limit: 100 }}
              children={({ validElements, isLoading, error }) => {
                const options = validElements
                  ? validElements.items.map(item => ({
                      label: item.element.title,
                      value: item.element.uri
                    }))
                  : [];
                const selectedOptions = filters.length
                  ? filters[0].positiveAttributeFilter.in
                  : [];
                return (
                  <Select
                    multi
                    onChange={this.onChange}
                    options={options}
                    value={selectedOptions}
                    isLoading={isLoading}
                    placeholder="Filter cities"
                  />
                );
              }}
            />
          </div>
          <Kpi
            projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
            measure={C.measure("# Checks")}
            filters={filters}
          />
          <div style={{ height: 400 }}>
            <Visualization
              projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
              identifier="aby6oS6DbpFX"
              filters={filters}
            />
          </div>
          <div style={{ height: 400 }}>
            <ColumnChart
              projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
              config={{
                colors: [
                  "#5B9BD5",
                  "#FFC819",
                  "#6B67DB",
                  "#FFD962",
                  "#FFBE62",
                  "#82B7E6",
                  "#908DE9",
                  "#FFE388",
                  "#FFCE88"
                ],
                legend: {
                  enabled: false
                }
              }}
              measures={[
                {
                  measure: {
                    localIdentifier: "m1",
                    alias: "# Checks 💰",
                    definition: {
                      measureDefinition: {
                        item: {
                          identifier: C.measure("# Checks")
                        }
                      }
                    }
                  }
                }
              ]}
              viewBy={{
                visualizationAttribute: {
                  localIdentifier: "a1",
                  alias: "Location 🏙",
                  displayForm: {
                    identifier: C.attributeDisplayForm("Location City")
                  }
                }
              }}
              stackBy={{
                visualizationAttribute: {
                  localIdentifier: "a2",
                  displayForm: {
                    identifier: C.attributeDisplayForm("Location Name")
                  }
                }
              }}
              filters={filters}
            />
          </div>
          <Execute
            projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
            afm={{
              measures: [
                {
                  localIdentifier: "m1",
                  definition: {
                    measure: {
                      item: {
                        identifier: C.measure("# Checks")
                      }
                    }
                  }
                }
              ],
              attributes: [
                {
                  localIdentifier: "a1",
                  displayForm: {
                    identifier: C.attributeDisplayForm("Location City")
                  }
                }
              ],
              filters: filters
            }}
            children={CustomBarChart}
          />
        </div>
      </div>
    );
  }
}

export default App;
