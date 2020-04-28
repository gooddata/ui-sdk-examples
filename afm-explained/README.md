# GoodData.UI AFM Explained

This app demonstrates the basic concept of [AFM](https://sdk.gooddata.com/gooddata-ui/docs/afm.html).

## Live demo

This app is deployed at https://gooddata-demo.s3.amazonaws.com/afm-explained/index.html. For access, you can register at https://gooddata-examples.herokuapp.com/.

## How to run locally

* `git clone --depth 1 https://github.com/gooddata/ui-sdk-examples.git`
* `cd ui-sdk-examples/afm-explained/`
* `yarn install --pure-lockfile` (or `npm install`)
* `yarn start` (or `GD_URL=developer.na.gooddata.com yarn start`)

## How to build for deployment

* `yarn build` when deploying to root folder
* `PUBLIC_URL=/afm-explained yarn build` when deploying to `/afm-explained` folder

## Backend/proxy info

This app is configured to run against https://developer.na.gooddata.com/. For access, you can register at https://gooddata-examples.herokuapp.com/.

## Compatibility

An ES6 [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) was added to support Internet Explorer.

## Screnshots

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/afm-explained/public/screen1.png "Homepage")

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
