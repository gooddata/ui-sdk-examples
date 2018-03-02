// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { AfmComponents } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import { get, isNaN } from 'lodash';

import C from './catalog.json';
import './App.css';
import logo from './logo.svg';

const { ColumnChart, Table } = AfmComponents;
const PARSE_INT_RADIX = 10;

class App extends Component {
    constructor() {
        super();

        this.state = {
            year: null
        }
    }

    render() {
        const { year } = this.state;
        const onFiredDrillEvent = (drillEvent) => {
            const intersection = get(drillEvent, ['drillContext', 'intersection'], []);
            const dimension = intersection.find(dimension =>
                dimension.header.identifier === C['Year (Opp. Close)']);
            const year = parseInt(get(dimension, 'title', ''), PARSE_INT_RADIX);

            if (!isNaN(year)) {
                this.setState({ year });
            } else {
                this.setState({ year: null });
            }
        };

        const measure = {
            localIdentifier: 'm1',
            definition: {
                measure: {
                    aggregation: 'sum',
                    item: {
                        identifier: C['Amount 2']
                    }
                }
            }
        };

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">To experience drilling, click one of the columns in the column chart and watch table below reload.</p>
                <p className="App-intro">See the source of <code>onFiredDrillEvent()</code> function in <code>src/App.js</code></p>
                <div className="row">
                    <ColumnChart
                        projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
                        afm={{
                            measures: [{
                                ...measure,
                                alias: 'Amount'
                            }],
                            attributes: [{
                                localIdentifier: 'a1',
                                displayForm: {
                                    identifier: C['Year (Opp. Close)']
                                }
                            }]
                        }}
                        drillableItems={[{ identifier: C['Year (Opp. Close)'] }]}
                        onFiredDrillEvent={onFiredDrillEvent}
                    />
                </div>
                <div className="row">
                    <Table
                        projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
                        afm={{
                            measures: [{
                                ...measure,
                                alias: 'Amount sold in ' + (year ? year : 'eternity')
                            }],
                            attributes: [{
                                localIdentifier: 'a1',
                                displayForm: {
                                    identifier: C['Opp. Owner']
                                }
                            }],
                            filters: year ? [{
                                absoluteDateFilter: {
                                    dataSet: {
                                        identifier: C['Date (Opp. Close) DataSet']
                                    },
                                    from: `${this.state.year}-01-01`,
                                    to: `${this.state.year}-12-31`
                                }
                            }] : []
                        }}
                        resultSpec={{
                            dimensions: [{
                                itemIdentifiers: ['a1'],
                                totals: [{
                                    attributeIdentifier: 'a1',
                                    measureIdentifier: 'm1',
                                    type: 'sum'
                                }]
                            }, {
                                itemIdentifiers: ['measureGroup']
                            }]
                        }}
                        onFiredDrillEvent={onFiredDrillEvent}
                    />
                </div>
            </div>
        );
    }
}

export default App;
