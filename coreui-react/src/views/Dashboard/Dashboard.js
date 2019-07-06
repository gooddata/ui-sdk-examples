import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import { includes } from 'lodash';

import { Kpi, Execute, Model } from '@gooddata/react-components';
import ComboChart from '../../ComboChart';
import '@gooddata/react-components/styles/css/main.css';
import C from './../../catalog.js';
import gooddata from './../../gooddata';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandSuccess,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.toggleMeasure = this.toggleMeasure.bind(this);
    this.viewBy1 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Month/Year (Date)'));
    this.viewBy2 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)'));
    this.viewBy3 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Year (Date)'));

    this.state = {
      primaryMeasures: ['# Checks'],
      secondaryMeasures: ['$ Gross Profit'],
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  toggleMeasure(measureCategory, newMeasureTitle) {
    const measuresKey = [`${measureCategory}Measures`];
    const currentMeasures = this.state[measuresKey];

    if (includes(currentMeasures, newMeasureTitle)) {
      this.setState({
        [measuresKey]: currentMeasures.filter(currentMeasureTitle =>
          currentMeasureTitle !== newMeasureTitle)
      });
    } else {
      this.setState({ [measuresKey]: currentMeasures.concat(newMeasureTitle) });
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { primaryMeasures, secondaryMeasures, radioSelected } = this.state;

    return (
      <div className="animated fadeIn">
        <Row className="kpis">
          <Col xs="12" sm="6" lg="3">
            <Card
              className={`text-white bg-success ${includes(primaryMeasures, '# Checks') ? 'active' : ''}`}
              onClick={() => this.toggleMeasure('primary', '# Checks')}
            >
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={(e) => { e.stopPropagation(); this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">
                  <Kpi {...gooddata} measure={C.measure('# Checks')} />
                </div>
                <div># of Checks</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Execute
                  {...gooddata}
                  afm={{
                    measures: [{
                      localIdentifier: "m1",
                      definition: {
                        measure: {
                          item: {
                            identifier: C.measure('# Checks')
                          }
                        }
                      }
                    }],
                    attributes: [{
                      displayForm: {
                        identifier: C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)')
                      },
                      localIdentifier: "a1"
                    }]
                  }}
                  children={({ error, isLoading, result }) => {
                    if (isLoading) {
                      return 'Loading…';
                    }

                    if (error) {
                      return 'Error :-(';
                    }

                    if (!result) {
                      return 'No data.';
                    }

                    cardChartData2.datasets[0].label = '# of Checks';
                    cardChartData2.datasets[0].data =
                      result.executionResult.data.map(row => parseFloat(row[0]));
                    cardChartData2.labels = result.executionResult.headerItems[0][0].map(headerItem =>
                      headerItem.attributeHeaderItem.name);
                    cardChartOpts2.scales.yAxes[0].ticks.min =
                      Math.min.apply(Math, cardChartData2.datasets[0].data) - 10000;
                    cardChartOpts2.scales.yAxes[0].ticks.max =
                      Math.max.apply(Math, cardChartData2.datasets[0].data) + 50000;

                    return (
                      <Line
                        data={cardChartData2}
                        options={cardChartOpts2}
                        height={70}
                      />
                    )
                  }}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card
              className={`text-white bg-primary ${includes(primaryMeasures, '# Items on Check') ? 'active' : ''}`}
              onClick={() => this.toggleMeasure('primary', '# Items on Check')}
            >
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={(e) => { e.stopPropagation(); this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">
                  <Kpi {...gooddata} measure={C.measure('# Items on Check')} format="#,##0" />
                </div>
                <div># of Items on Check</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Execute
                  {...gooddata}
                  afm={{
                    measures: [{
                      localIdentifier: "m1",
                      definition: {
                        measure: {
                          item: {
                            identifier: C.measure('# Items on Check')
                          }
                        }
                      }
                    }],
                    attributes: [{
                      displayForm: {
                        identifier: C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)')
                      },
                      localIdentifier: "a1"
                    }]
                  }}
                  children={({ error, isLoading, result }) => {
                    if (isLoading) {
                      return 'Loading…';
                    }

                    if (error) {
                      return 'Error :-(';
                    }

                    if (!result) {
                      return 'No data.';
                    }

                    cardChartData1.datasets[0].label = '# of Items on Check';
                    cardChartData1.datasets[0].data =
                      result.executionResult.data.map(row => parseFloat(row[0]));
                    cardChartData1.labels = result.executionResult.headerItems[0][0].map(headerItem =>
                      headerItem.attributeHeaderItem.name);
                    cardChartOpts1.scales.yAxes[0].ticks.min =
                      Math.min.apply(Math, cardChartData1.datasets[0].data) - 100000;
                    cardChartOpts1.scales.yAxes[0].ticks.max =
                      Math.max.apply(Math, cardChartData1.datasets[0].data) + 500000;

                    return (
                      <Line
                        data={cardChartData1}
                        options={cardChartOpts1}
                        height={70}
                      />
                    )
                  }}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card
              className={`text-white bg-warning ${includes(secondaryMeasures, '$ Avg Daily Total Sales') ? 'active' : ''}`}
              onClick={() => this.toggleMeasure('secondary', '$ Avg Daily Total Sales')}
            >
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={(e) => { e.stopPropagation(); this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">
                  <Kpi {...gooddata} measure={C.measure('$ Avg Daily Total Sales')} />
                </div>
                <div>$ Avg Daily Total Sales</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Execute
                  {...gooddata}
                  afm={{
                    measures: [{
                      localIdentifier: "m1",
                      definition: {
                        measure: {
                          item: {
                            identifier: C.measure('$ Avg Daily Total Sales')
                          }
                        }
                      }
                    }],
                    attributes: [{
                      displayForm: {
                        identifier: C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)')
                      },
                      localIdentifier: "a1"
                    }]
                  }}
                  children={({ error, isLoading, result }) => {
                    if (isLoading) {
                      return 'Loading…';
                    }

                    if (error) {
                      return 'Error :-(';
                    }

                    if (!result) {
                      return 'No data.';
                    }

                    cardChartData3.datasets[0].label = '$ Avg Daily Total Sales';
                    cardChartData3.datasets[0].data =
                      result.executionResult.data.map(row => parseFloat(row[0]));
                    cardChartData3.labels = result.executionResult.headerItems[0][0].map(headerItem =>
                      headerItem.attributeHeaderItem.name);

                    return (
                      <Line
                        data={cardChartData3}
                        options={cardChartOpts3}
                        height={70}
                      />
                    )
                  }}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card
              className={`text-white bg-danger ${includes(secondaryMeasures, '$ Gross Profit') ? 'active' : ''}`}
              onClick={() => this.toggleMeasure('secondary', '$ Gross Profit')}
            >
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={(e) => { e.stopPropagation(); this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">
                  <Kpi {...gooddata} measure={C.measure('$ Gross Profit')} format="#,##0" />
                </div>
                <div>$ Gross Profit</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Execute
                  {...gooddata}
                  afm={{
                    measures: [{
                      localIdentifier: "m1",
                      definition: {
                        measure: {
                          item: {
                            identifier: C.measure('$ Gross Profit')
                          }
                        }
                      }
                    }],
                    attributes: [{
                      displayForm: {
                        identifier: C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)')
                      },
                      localIdentifier: "a1"
                    }]
                  }}
                  children={({ error, isLoading, result }) => {
                    if (isLoading) {
                      return 'Loading…';
                    }

                    if (error) {
                      return 'Error :-(';
                    }

                    if (!result) {
                      return 'No data.';
                    }

                    cardChartData4.datasets[0].label = '$ Gross Profit';
                    cardChartData4.datasets[0].data =
                      result.executionResult.data.map(row => parseFloat(row[0]));
                    cardChartData4.labels = result.executionResult.headerItems[0][0].map(headerItem =>
                      headerItem.attributeHeaderItem.name);

                    return (
                      <Bar
                        data={cardChartData4}
                        options={cardChartOpts4}
                        height={70}
                      />
                    )
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">GoodData.UI ComboChart</CardTitle>
                    <div className="small text-muted"><a href="https://sdk.gooddata.com/gooddata-ui/docs/combo_chart_component.html" target="_blank" rel="noopener noreferrer">See the docs</a></div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={radioSelected === 1}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={radioSelected === 2}>Quarter</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <ComboChart
                  primaryMeasures={primaryMeasures}
                  secondaryMeasures={secondaryMeasures}
                  viewBy={this[`viewBy${radioSelected}`]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
