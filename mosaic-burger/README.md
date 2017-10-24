Run `yarn` first to install depedencies.

Then you can start the demo by running `yarn build-css && HTTPS=true yarn start`.

After starting the app you may need to log in first at https://localhost:3000/account.html. You can use the same credentials you are using at https://secure.gooddata.com/.

Note: for the sake of simplicity of the initial setup, this demo uses a hard-coded reference to GoodData's GoodSales demo and it uses a local proxy server to workaround issues with cross-origin requests. For a production ready CORS setup please refer to the [tutorial on accessing GoodData API directly without a local proxy](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly)