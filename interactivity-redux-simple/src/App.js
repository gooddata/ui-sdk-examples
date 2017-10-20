import React from 'react'

import './App.css';
import SimpleSwitcherDemo from './SimpleSwitcherDemo'
import BetterSwitcherDemo from './BetterSwitcherDemo'

const App = () => (
  <div className="App">
    <h2>Better metric switcher</h2>
    <p>
      This example uses Redux to propagate the selected metric
      from a drop-down to the <tt>Kpi</tt> component.
    </p>
    <p>
      Unlike the stateful component demo, this Redux example only
      includes the more advanced demo with loading indicator
      and error handling.
    </p>
    <p>
      The following component shows the metric name next to the
      computed value. Since the computed value is retrieved from
      GoodData API with a small delay, we use
      the <tt>onLoadingChanged</tt> method to display a loading 
      indicator and to ensure the metric name is changed after the
      proper value is loaded.
    </p>
    <BetterSwitcherDemo />
  </div>
)

export default App