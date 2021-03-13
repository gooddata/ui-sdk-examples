# GoodData.UI Boilerplate App

This app follows steps from https://sdk.gooddata.com/gooddata-ui/docs/ht_create_your_first_visualization.html:

* It initializes create-react-app
* It configures GoodData proxy
* It adds GoodData.UI dependencies

This app also shows:

* Use of `<AttributeFilter>` component
* Use of `<Kpi>` component

And finally this app demonstrates 3 approaches how to render visualizations:

* By referencing `<InsightView>` created in Analytical Designer
* By specifying buckets (measures, viewBy, stackBy) with `<ColumnChart>` component
* By creating custom column chart using `<Execute>` component and [Highcharts](https://www.highcharts.com/) library

## Live demo

This app is deployed at https://gooddata-demo.s3.amazonaws.com/gd-ui-boilerplate/index.html. For access, you can register at https://gooddata-examples.herokuapp.com/.

## How to run locally

* `git clone --depth 1 https://github.com/gooddata/ui-sdk-examples.git`
* `cd ui-sdk-examples/gd-ui-boilerplate/`
* `yarn install`
* `yarn start`

## How to build for deployment

* `yarn build` when deploying to root folder
* `PUBLIC_URL=/gd-ui-boilerplate yarn build` when deploying to `/gd-ui-boilerplate` folder

## Backend/proxy info

This app is configured to run against https://developer.na.gooddata.com/. For access, you can register at https://gooddata-examples.herokuapp.com/.

## Screnshots

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/gd-ui-boilerplate/public/home.png "Homepage")

---

This project was bootstrapped with [GoodData.UI Accelerator Toolkit](https://sdk.gooddata.com/gooddata-ui/docs/ht_create_your_first_visualization_toolkit.html).
