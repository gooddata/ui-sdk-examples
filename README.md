This repository includes various demos for GoodData UI SDK.

Please see TODO TODO for the documentation including reference
documentation of the GoodData SDK Data Layer, visualization components
and various tutorials and guides.

## How to run a demo

All React demos can need to be run via HTTPS. On Mac or Linux, run

`HTTPS=true yarn start`

 or

`HTTPS=true npm start`

On Windows, run

`set HTTPS=true&&yarn start`

 or

`set HTTPS=true&&npm start`

See the [angular-v4.x demo README](angular-v4.x/README.md) for details
about running the Angular 4.x demo.

## Limitations

For the sake of simplicity, all demos are using the GoodSales demo
project workspace. This project workspace is accessible to all GoodData
users with an account at https://secure.gooddata.com/. All demos are
accessing the GoodData platform using a local proxy.

Please refer to TODO TODO documentation to see what needs to be set up
for your app to be able to call GoodData API directly without a proxy
(this is necessary to deploy your app in production).
