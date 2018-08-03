# Pivot-Table Demo

This demo is based on [Simple Interactivity Demo](https://github.com/gooddata/ui-sdk-examples/tree/master/interactivity-stateful-simple)
and provides a simplistic example of how a table created in Analytical Designer
can be taught to pivot using GoodData UI SDK.

## Getting Started

1. Run `yarn` to install depedencies.
1. Run `yarn start` to start the demo.

### Logging in

1. Visit `https://localhost:3000/account.html`.

> If you don't have credentials to GoodData.UI Examples demo project,
visit https://gooddata-examples.herokuapp.com/ and register.

### Changing table

To change the table, simply replace `const VIZ_URI` in `/src/App.js` with your own table created in AD.

### Screenshots

![alt text](https://github.com/gooddata/ui-sdk-examples/blob/master/pivot-table/public/screen-normal-view.png "Normal Table View")
![alt text](https://github.com/gooddata/ui-sdk-examples/blob/master/pivot-table/public/screen-pivot-view.png "Pivot Table View")

## Caution

Note: To simplify the initial setup, this demo uses a hard-coded
reference to GoodData.UI Examples demo project at https://gooddata-examples.herokuapp.com/,
and it uses a local proxy server to work around issues with cross-origin requests.
For a production-ready CORS setup, please refer to the [tutorial on accessing
the GoodData API directly without a local proxy](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly).

## License

Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.

For more information, please see
[LICENSE](https://github.com/gooddata/ui-sdk-examples/blob/master/LICENSE)
