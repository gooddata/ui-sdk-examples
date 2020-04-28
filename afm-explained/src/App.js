import React, { useState, useEffect } from 'react';
import { BubbleChart, Execute, Model } from '@gooddata/react-components';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import C from './catalog';
import config from './config';
import theme from './theme';
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    loginMachinery({ ...config }, () => setIsLogged(true));
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  return (
    <>
      <h1><a href="https://sdk.gooddata.com/gooddata-ui/docs/afm.html">AFM</a> Explained - Edit the Source Code Below and Observe</h1>
      <div className="App">
        <div className="left">
          <LiveProvider scope={{ BubbleChart, config, Model, C }} code={`
    <div style={{ height: 400 }}>
      <BubbleChart
        {...config}
        xAxisMeasure={Model.measure(C.measure('$ Avg Total Sales by Restaurant'))}
        yAxisMeasure={Model.measure(C.measure('$ Gross Profit'))}
        size={Model.measure(C.measure('# Checks'))}
        viewBy={Model.attribute(C.attributeDisplayForm('Location City'))}
        /*filters={[
          Model.positiveAttributeFilter(
            C.attributeDisplayForm('Location City'),
            ['Aventura'],
            true
          )
        ]}*/
      />
    </div>`}>
            <LiveEditor theme={theme} />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
        <div className="right">
          <LiveProvider scope={{ Execute, config, Model, C }} code={`
<Execute
  {...config}
  afm={{
    measures: [{
      localIdentifier: 'm_0', // xAxisMeasure
      definition: {
        measure: {
          item: {
            identifier: C.measure('$ Avg Total Sales by Restaurant')
          }
        }
      }
    }, {
      localIdentifier: 'm_1', // yAxisMeasure
      definition: {
        measure: {
          item: {
            identifier: C.measure('$ Gross Profit')
          }
        }
      }
    }, {
      localIdentifier: 'm_2', // size
      definition: {
        measure: {
          item: {
            identifier: C.measure('# Checks')
          }
        }
      }
    }],
    attributes: [{
      localIdentifier: 'va_0', // viewBy
      displayForm: {
        identifier: C.attributeDisplayForm('Location City')
      }
    }],
    filters: [
      Model.positiveAttributeFilter(
        C.attributeDisplayForm('Location City'),
        ['Aventura'],
        true
      )
    ]
  }}
>{
  ({ result, isLoading, isError }) =>
    !isLoading && !isError &&
    <>
      <hr />
      <h1>Raw Result:</h1>
      <pre>{JSON.stringify(result.executionResult, null, 2)}</pre>
    </>
}</Execute>`}>
              <LiveEditor theme={theme} />
              <LiveError />
              <LivePreview />
            </LiveProvider>
        </div>
      </div>
    </>
  );
}

export default App;
