# KPI Dashboards Drilling

This app demonstrates how to implement drilling in KPI Dashboards.

## Live demo

This app is deployed at https://gooddata-demo.s3.amazonaws.com/kpi-drill/index.html. For access, you can register at https://gooddata-examples.herokuapp.com/.

## How to run locally

* `git clone --depth 1 https://github.com/gooddata/ui-sdk-examples.git`
* `cd ui-sdk-examples/kpi-drill/`
* `yarn install --pure-lockfile` (or `npm install`)
* `yarn start`

## How to build for deployment

* `npm run build` when deploying to root folder
* `PUBLIC_URL=/kpi-drill yarn build` when deploying to `/kpi-drill` folder

## Backend/proxy info

This app is configured to run against https://developer.na.gooddata.com/. For access, you can register at https://gooddata-examples.herokuapp.com/.

## Compatibility

An ES6 [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) was added to support Internet Explorer.

## Screnshots

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/kpi-drill/public/screen1.png "Homepage")
![homepage embedded](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/kpi-drill/public/screen2.png "Homepage embedded")

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
