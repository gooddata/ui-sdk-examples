This repository includes various demos for the GoodData UI SDK.

Please see [this documentation](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/) for tutorials and reference information on the GoodData SDK Data Layer and visualization components.

## How to run a demo

All React demos must be run via HTTPS.

On Mac or Linux, run
`HTTPS=true yarn start`
 or
`HTTPS=true npm start`

On Windows, run
`set HTTPS=true&&yarn start`
 or
`set HTTPS=true&&npm start`

For details about running the Angular 4.x demo, see the [angular-v4.x demo README](angular-v4.x/README.md).

## Limitations

For the sake of simplicity, most demos use the GoodSales demo project. This project is accessible to all GoodData users with an account at https://secure.gooddata.com/. All demos access the GoodData platform using a local proxy.
For information on how to configure your app to call the GoodData API directly without a proxy (this is necessary to deploy your app to production), see [this tutorial](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly).

# ui-sdk-examples
Frontend data layer
