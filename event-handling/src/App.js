import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
 
import logo from './logo.svg';
import './App.css';

import { AfmComponents, Visualization } from '@gooddata/react-components';

const { ColumnChart } = AfmComponents; // replace BarChart with ColumnChart, LineChart, or PieChart whenever needed

const afm = {
   measures: [
      {
         id: "m1",
         definition: {
            baseObject: {
               id: "atSHqCtAePe4"
            }
         }
      }
   ]
}
 
class App extends Component {
   render() {
      return (
        <div className="App">
          <div style={{height: 400, width: 600}}>
            <Visualization
                 onFiredDrillEvent={({ drillContext, executionContext }) => {
                    console.log('drillContext', drillContext);
                    console.log('executionContext', executionContext)
                 }}
                 projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
                 uri="/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/333296"
                 drillableItems={[{ uri: '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/1638' }]}
            />
          </div>
          <div style={{height: 400, width: 600}}>
            <ColumnChart afm={afm}
              projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
              onFiredDrillEvent={({ drillContext, executionContext }) => {
                console.log('drillContext', drillContext);
                console.log('executionContext', executionContext)
              }}
              drillableItems={ [ { identifier: "atSHqCtAePe4" } ] }
            />
          </div>
        </div>
      );
   }
}
 
export default App;