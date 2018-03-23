// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { AfmComponents } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import { get, isNaN } from 'lodash';
import gooddata from 'gooddata';

import C from './catalog.json';
import './App.css';
import logo from './logo.svg';

const { ColumnChart, Table } = AfmComponents;
const PARSE_INT_RADIX = 10;
const PROJECT_ID = 'la84vcyhrq8jwbu4wpipw66q2sqeb923';


class App extends Component {
    constructor() {
        super();

        this.state = {
            year: null
        }
    }

    getMeasure() {
        return {
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
    }

    getTableAfm() {
        const { year } = this.state;

        return {
            measures: [{
                ...this.getMeasure(),
                alias: 'Amount sold in ' + (year || 'eternity')
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
                    from: `${year}-01-01`,
                    to: `${year}-12-31`
                }
            }] : []
        };
    }

    getValidElements() {
        gooddata.md.getUrisFromIdentifiers(PROJECT_ID, [ C['Opp. Owner'] ])
            .then(result => {
                // converting attribute identifier into attribute uri
                const attributeUri = result[0].uri;
                const attributeDisplayFormId = attributeUri.split('/').slice(-1)[0];
                const afm = this.getTableAfm();

                // getting valid elements restricted by table afm
                gooddata.md.getValidElements(PROJECT_ID, attributeDisplayFormId, { afm })
                    .then(result => {
                        const items = result.validElements.items.map(item => item.element);
                        console.log(items);
                    });
            });
    }

    render() {
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

        this.getValidElements();

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">To experience drilling, click one of the columns in the column chart and watch table below reload.</p>
                <p className="App-intro">See the source of <code>onFiredDrillEvent()</code> function in <code>src/App.js</code></p>
                <p className="App-intro">Alternatively, see the browser console, where contents of the table below are loaded and listed using <a href="https://www.npmjs.com/package/gooddata">gooddata-js</a> in pure JavaScript.</p>
                <div className="row">
                    <ColumnChart
                        projectId={PROJECT_ID}
                        afm={{
                            measures: [{
                                ...this.getMeasure(),
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
                        projectId={PROJECT_ID}
                        afm={this.getTableAfm()}
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
                    />
                </div>
            </div>
        );
    }
}

export default App;
