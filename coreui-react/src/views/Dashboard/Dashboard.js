import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

import { Kpi, Execute, ComboChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import C from './../../catalog.js';
import gooddata from './../../gooddata';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

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
      backgroundColor: brandInfo,
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

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
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
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
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
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

// const mainChart = {
//   labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: hexToRgba(brandInfo, 10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data1,
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data2,
//     },
//     {
//       label: 'My Third dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3,
//     },
//   ],
// };

// const mainChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips,
//     intersect: true,
//     mode: 'index',
//     position: 'nearest',
//     callbacks: {
//       labelColor: function(tooltipItem, chart) {
//         return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
//       }
//     }
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           drawOnChartArea: false,
//         },
//       }],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 5,
//           stepSize: Math.ceil(250 / 5),
//           max: 250,
//         },
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.viewBy1 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Month/Year (Date)'));
    this.viewBy2 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Quarter/Year (Date)'));
    this.viewBy3 = Model.attribute(C.dateDataSetDisplayForm('Date (Date)', 'Year (Date)'));

    this.state = {
      primaryMeasures: [Model.measure(C.measure('# Checks'))],
      secondaryMeasures: [Model.measure(C.measure('$ Gross Profit'))],
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => this.setState({ primaryMeasures: [Model.measure(C.measure('# Checks'))] })}
                      >Use this measure as column</DropdownItem>
                      <DropdownItem
                        onClick={() => this.setState({ secondaryMeasures: [Model.measure(C.measure('# Checks'))] })}
                      >Use this measure as line</DropdownItem>
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
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => this.setState({ primaryMeasures: [Model.measure(C.measure('# Items on Check'))] })}
                      >Use this measure as column</DropdownItem>
                      <DropdownItem
                        onClick={() => this.setState({ secondaryMeasures: [Model.measure(C.measure('# Items on Check'))] })}
                      >Use this measure as line</DropdownItem>
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
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => this.setState({ primaryMeasures: [Model.measure(C.measure('$ Avg Daily Total Sales'))] })}
                      >Use this measure as column</DropdownItem>
                      <DropdownItem
                        onClick={() => this.setState({ secondaryMeasures: [Model.measure(C.measure('$ Avg Daily Total Sales'))] })}
                      >Use this measure as line</DropdownItem>
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
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => this.setState({ primaryMeasures: [Model.measure(C.measure('$ Gross Profit'))] })}
                      >Use this measure as column</DropdownItem>
                      <DropdownItem
                        onClick={() => this.setState({ secondaryMeasures: [Model.measure(C.measure('$ Gross Profit'))] })}
                      >Use this measure as line</DropdownItem>
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
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Quarter</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  {/* <Line data={mainChart} options={mainChartOpts} height={300} /> */}
                  <ComboChart
                    {...gooddata}
                    primaryMeasures={this.state.primaryMeasures}
                    secondaryMeasures={this.state.secondaryMeasures}
                    viewBy={this[`viewBy${this.state.radioSelected}`]}
                    height={300}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
