# Advanced Interactivity Demo (Redux)

This demo shows how Redux and GoodData UI SDK can be used to create
highly interactive user interfaces that enable the end user to dynamically
filter visualizations on the screen, change granularity of displayed reports,
switch metrics or whatever else the end users need to get their jobs
done.

## Getting Started

1. Run `yarn` to install depedencies.
2. Run `HTTPS=true yarn start` to start the demo.

After starting the app, you may need to first log in to https://localhost:3000/account.html. You can use the same credentials you are using at https://secure.gooddata.com/.

## Caution

Note: To simplify the initial setup, this demo uses a hard-coded reference to GoodData's GoodSales demo project, and it uses a local proxy server to work around issues with cross-origin requests. For a production-ready CORS setup, please refer to the [tutorial on accessing the GoodData API directly without a local proxy](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly).

## License
Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.

For more information, please see
[LICENSE](https://github.com/gooddata/ui-sdk-examples/blob/master/LICENSE)
