// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { user } from 'gooddata';

import '@gooddata/react-components/styles/css/main.css';
import { Visualization, AfmComponents } from '@gooddata/react-components';
import Isvg from 'react-inlinesvg'

import catalog from './catalog';

import './styles/app.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import AppLogo from './styles/assets/mosaic-logo.svg'
import KpiTriangle from './styles/assets/triangle.svg'
import MessageIco from './styles/assets/warning.svg'
import NewsFeedIco from './styles/assets/newsfeed.svg'
import PerformanceIco from './styles/assets/performance.svg'
import EmployeesIco from './styles/assets/employees.svg'
import InventoryIco from './styles/assets/inventory.svg'
import StaffingIco from './styles/assets/staffing.svg'
import CalendarIco from './styles/assets/calendar.svg'

const { BarChart } = AfmComponents

const project = { projectId: 'la84vcyhrq8jwbu4wpipw66q2sqeb923' }

const getAccountPageUri = () => `/account.html?lastUrl=${encodeURIComponent(window.location.href)}`;

export class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          isAuthorized: false,
          activitiesByDropdown: 'Activity Type'
      };
  }

  componentWillMount() {
      user.getAccountInfo()
          .then(
              () => this.setState({ isAuthorized: true }),
              () => window.location.href = getAccountPageUri() // eslint-disable-line no-return-assign
          );
  }

  setActivitiesBy(attributeName) {
    this.setState({ activitiesByDropdown: attributeName })
  }

  render() {
    const { isAuthorized } = this.state;
    if (!isAuthorized) {
        return false;
    }

    return (
        <div className="app-body">
            <header className="header">
                <div className="header-logo">
                    <Isvg src={AppLogo} className="header-logo-image" />
                    <h2 className="header-app-name">Mosaic Burger</h2>
                </div>
                <div className="header-info">
                    <span className="header-info-row header-username">Romeo Aldo</span>
                    <span className="header-info-row header-week">Monday, Nov 22nd 2016 - week 47</span>
                </div>
            </header>
            <div className="body-container">
                <nav className="body-nav">
                    <ul className="nav">
                        <li className="nav-item active">
                            <Isvg src={NewsFeedIco} className="nav-item-image ico-newsfeed" />
                            <span className="nav-item-text">News feed</span>
                        </li>
                        <li className="nav-item">
                            <Isvg src={PerformanceIco} className="nav-item-image ico-performance" />
                            <span className="nav-item-text">Performance</span>
                        </li>
                        <li className="nav-item">
                            <Isvg src={EmployeesIco} className="nav-item-image ico-employees" />
                            <span className="nav-item-text">Employees</span>
                        </li>
                        <li className="nav-item">
                            <Isvg src={InventoryIco} className="nav-item-image ico-inventory" />
                            <span className="nav-item-text">Inventory</span>
                        </li>
                        <li className="nav-item">
                            <Isvg src={StaffingIco} className="nav-item-image ico-staffing" />
                            <span className="nav-item-text">Staffing</span>
                        </li>
                        <li className="nav-item">
                            <Isvg src={CalendarIco} className="nav-item-image ico-calendar" />
                            <span className="nav-item-text">Calendar</span>
                        </li>
                    </ul>
                </nav>
                <section className="body-content">
                    <div className="decision">
                        <span className="decision-message">
                            You need to staff <strong>336</strong> man hours this weeks <br/>
                            <span className="kpi kpi-negative"><Isvg src={KpiTriangle} className="kpi-triangle kpi-triangle-down" />5%</span> than last week
                        </span>
                        <button className="button decision-action">Create schedule</button>
                    </div>
                    <div className="message">
                        <Isvg src={MessageIco} className="message-ico" />
                        Next Tuesday 3 people are on vacation. Check for substitutes.
                    </div>
                    <div className="kpi-block">
                        <div className="kpi-block-item">
                            <span className="kpi-block-number">9,450</span>
                            <span className="kpi-block-title">predicted # of transactions</span>
                        </div>
                        <div className="kpi-block-item">
                            <span className="kpi-block-number">$4,272</span>
                            <span className="kpi-block-title">labor costs</span>
                        </div>
                        <div className="kpi-block-item">
                            <span className="kpi-block-number">3.5 min</span>
                            <span className="kpi-block-title">time to serve</span>
                        </div>
                        <div className="kpi-block-item">
                            <span className="kpi-block-number">7 hrs</span>
                            <span className="kpi-block-title">understaffed</span>
                        </div>
                        <div className="kpi-block-item">
                            <span className="kpi-block-number">5 hrs</span>
                            <span className="kpi-block-title">overstaffed</span>
                        </div>
                    </div>
                    <div className="reports">
                        <div className="report-wrapper layout-half">
                            Activities by <select onChange={(e) => this.setActivitiesBy(e.target.value)}>
                                <option>Activity Type</option>
                                <option>Activity Status</option>
                            </select>
                            <div className="report" key="Report1">
                                <BarChart {...project} onLoadingChanged={this.onLoadingChanged} afm={{
                                    measures: [ {
                                        localIdentifier: 'm1',
                                        definition: {
                                            measure: { item: { identifier: catalog['# of Activities'] }}
                                        },
                                        alias: '# of Activities'
                                    } ],
                                    attributes: [ {
                                        localIdentifier: 'a1',
                                        displayForm: { identifier: catalog[this.state.activitiesByDropdown] },
                                    } ]
                                 }}
                                />
                            </div>
                        </div>

                        <div className="report-wrapper layout-half">
                            Win Rate Trend
                            <div className="report" key="Report2">
                                <Visualization {...project} uri="/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/349237"/>
                            </div>
                        </div>

                        <div className="report-wrapper layout-full">
                            <div className="report" key="Report3">
                                <Visualization {...project} uri="/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/349238"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
}

export default App;
