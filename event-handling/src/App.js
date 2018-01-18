// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
 
import './App.css';

import { AfmComponents, Visualization } from '@gooddata/react-components';

const { ColumnChart } = AfmComponents; // replace BarChart with ColumnChart, LineChart, or PieChart whenever needed

const afm = {
  measures: [{
    localIdentifier: "m1",
    definition: {
      measure: {
        item: {
          identifier: "atSHqCtAePe4"
        }
      }
    }
  }]
}
 
class App extends Component {
   render() {
      return (
        <div className="App">
          Drill on Visualization component:
          <div style={{height: 200, width: 600}}>
            <Visualization
                 onFiredDrillEvent={(contexts) => {
                    console.log('callback parameter', contexts);
                 }}
                 projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
                 uri="/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/333296"
                 drillableItems={[{ uri: '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/1638' }]}
            />
          </div>
          Drill on a component defined using AFM:
          <div style={{height: 200, width: 600}}>
            <ColumnChart afm={afm}
              projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
              onFiredDrillEvent={(contexts) => {
                console.log('callback parameter', contexts);
              }}
              drillableItems={ [ { identifier: "atSHqCtAePe4" } ] }
            />
          </div>
          Open the console, click any of the bars above and check the console for callback parameters
          <tt>drillContext</tt> and <tt>executionContext</tt>.
        </div>
      );
   }
}
 
export default App;