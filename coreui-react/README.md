# CoreUI React w/ GoodData.UI

This project demonstrates how to connect [CoreUI Free React Admin Template](https://coreui.io/react/) to GoodData Analytics Platform using [GoodData.UI SDK](https://sdk.gooddata.com/gooddata-ui/).

## Live demo

This app is deployed at https://gooddata-demo.s3.amazonaws.com/coreui-react/index.html. For access, you can register at https://gooddata-examples.herokuapp.com/.

## How to run locally

* `git clone --depth 1 https://github.com/gooddata/ui-sdk-examples.git`
* `cd ui-sdk-examples/coreui-react/`
* `yarn install --pure-lockfile` (or `npm install`)
* `yarn start`

## How to build for deployment

* `yarn build` when deploying to root folder
* `PUBLIC_URL=/coreui-react yarn build` when deploying to `/coreui-react` folder

## Backend/proxy info

This app is configured to run against https://developer.na.gooddata.com/. For access, you can register at https://gooddata-examples.herokuapp.com/.

## Screnshots

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/coreui-react/public/screen.png "Homepage")

## TODO

* KPIs
* Custom chart
* Deployment
