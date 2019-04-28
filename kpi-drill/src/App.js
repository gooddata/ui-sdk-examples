import React, { Component } from 'react';
import { Headline, ColumnChart } from '@gooddata/react-components';

import config, { sdk as gooddata } from './config';
import { loginMachinery } from './utils';
import C from './catalog';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      isPopup: false,
      title: '',
      measure: {},
      filters: []
    };

    this.handleIncomingFiltersFromKPIDashboards = this.handleIncomingFiltersFromKPIDashboards.bind(this);
  }

  componentDidMount() {
    loginMachinery({ ...config }, () => this.setState({ isLogged: true }) );

    window.addEventListener('message', this.handleIncomingFiltersFromKPIDashboards);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIncomingFiltersFromKPIDashboards);
  }

  handleIncomingFiltersFromKPIDashboards(message) {
    let data;

    if (message.data) {
      try {
        data = JSON.parse(message.data);
      } catch(e) {
        data = message.data;
      }
    }

    // console.log(data.gdc);

    if (data && data.gdc && data.gdc.event && data.gdc.event.name === 'listeningForDrillableItems') {
      // Embedded KPI Dashboard is ready to listen for drillable items
      const postMessageStructure = {
        gdc: {
          product: "dashboard",
          event: {
            name: "drillableItems",
            data: {
              identifiers: [
                C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)')
              ]
            }
          }
        }
      };
      document.getElementById('gooddata').contentWindow.postMessage(postMessageStructure, '*');
    }

    if (data && data.gdc && data.gdc.event && data.gdc.event.name === 'drill') {
      // It has been clicked into the chart --> show the pop-up
      const drillData = data.gdc.event.data;
      const measure = {
        uri: drillData.drillContext.intersection[0].header.uri,
        title: drillData.drillContext.intersection[0].title
      };
      const date = {
        uri: drillData.drillContext.intersection[1].header.uri,
        id: drillData.drillContext.intersection[1].id,
        title: drillData.drillContext.intersection[1].title
      };
      const attribute = {
        uri: drillData.drillContext.intersection[2].header.uri,
        id: drillData.drillContext.intersection[2].id,
        title: drillData.drillContext.intersection[2].title
      };
      const executionContextFilters = drillData.executionContext.filters || [];

      // console.log(drillData);

      Promise.all([
        gooddata.md.getObjectDetails(date.uri),
        gooddata.md.getObjectDetails(attribute.uri)
      ]).then(results => {
        // Drill event tells what attributeDisplayForm uri was clicked on,
        // but to built AFM attribute uri (not attributeDisplayForm uri) is needed,
        // so getObjectDetails and look to what attribute these attributeDisplayForms belong to.
        // BTW This is crazy not optimized and serves only as demonstration!
        this.setState({
          isPopup: true,
          title: date.title,
          measure: {
            measure: {
              localIdentifier: 'm1',
              definition: {
                measureDefinition: {
                  item: {
                    uri: measure.uri
                  },
                  aggregation: 'sum'
                }
              },
              alias: measure.title
            }
          },
          filters: [
            ...executionContextFilters,
            {
              positiveAttributeFilter: {
                displayForm: {
                  uri: date.uri
                },
                in: [`${results[0].attributeDisplayForm.content.formOf}/elements?id=${date.id}`]
              }
            },
            {
              positiveAttributeFilter: {
                displayForm: {
                  uri: attribute.uri
                },
                in: [`${results[1].attributeDisplayForm.content.formOf}/elements?id=${attribute.id}`]
              }
            }
          ]
        });
      });
    }
  }

  renderPopup() {
    const { isPopup, title, measure, filters } = this.state;

    if (isPopup) {
      return (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-close" onClick={() => this.setState({ isPopup: false })}>✕</div>
            <div className="headline">
              {measure.measure.alias} <Headline {...config} primaryMeasure={measure} filters={filters} /> for {title}
            </div>
            <div className="chart">
              <ColumnChart
                {...config}
                measures={[measure]}
                viewBy={{
                  visualizationAttribute: {
                    localIdentifier: 'a1',
                    displayForm: {
                      identifier: C.dateDataSetDisplayForm('Date (Date)', 'Month/Year (Date)')
                    }
                  }
                }}
                stackBy={{
                  visualizationAttribute: {
                    localIdentifier: 'a2',
                    displayForm: {
                      identifier: C.attributeDisplayForm('Location City')
                    }
                  }
                }}
                filters={filters}
              />
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    const { isLogged } = this.state;

    if (!isLogged) {
      return <span>Checking your credentials, please wait…</span>;
    }

    return (
      <div className="App">
        {this.renderPopup()}
        <iframe id="gooddata" title="KD" src="https://developer.na.gooddata.com/dashboards/embedded/#/project/xms7ga4tf3g3nzucd8380o2bev8oeknp/dashboard/aby7cMBNeo0Y"></iframe>
      </div>
    );
  }
}

export default App;
