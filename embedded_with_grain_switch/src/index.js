import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import qs from 'query-string'
import registerServiceWorker from './registerServiceWorker';

// Example:
// ?project=li4i6ynufj61q7lhlvlsqi9am4qbecyw&measure=acKjadJIgZUN&dateDimension=activity
const params = qs.parse(window.location.search)

ReactDOM.render(
  <App
    project={params.project}
    measure={params.measure}
    defaultGrain={params.defaultGrain}
    daysBack={params.daysBack}
    weeksBack={params.weeksBack}
    monthsBack={params.monthsBack}
    dateDimension={params.dateDimension}
   />,
  document.getElementById('root')
);
registerServiceWorker();
